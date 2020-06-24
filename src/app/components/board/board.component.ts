import { Component, Inject, OnInit } from '@angular/core';
import { Cell, Config } from '../../models/index';
import { ConfigService, FlagService } from 'src/app/services';
import { LevelConstants } from 'src/app/shared/constants/index';
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'board-component',
    styleUrls: ['./board.component.scss'],
    templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {
    config: Config;
    cells: Cell[][] = [];
    correctFlag = 0;
    directions: any = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    lefrightClick = {
        leftClick: false,
        rightClick: false
    };
    firstClick = false;

    constructor(private configService: ConfigService,
                private flagService: FlagService) {
        this.configService.config$.subscribe(res => {
            this.config = res;

            if (this.config.status == 'play') {
                this.generateBoard();
            }
        });
    }

    ngOnInit() {
    }

    generateBoard() {
        this.cells = [];
        this.correctFlag = 0;
        this.firstClick = false;

        for(let x = 0; x < this.config.rows; x++) {
            this.cells[x] = [];

            for (let y = 0; y < this.config.cols; y++) {
                this.cells[x][y] = new Cell(x, y);
            }
        }
    }

    generateMines(firstCell: Cell) {
        // random mines
        var count = 0;
        while(count < this.config.mines) {
            var thisCell = this.randomCell();

            if (!thisCell.mine && this.checkFirstCell(firstCell, thisCell) == true) {
                thisCell.mine = true;
                count++;
            }
        }

        // count adjacent
        for (let x = 0; x < this.config.rows; x++) {
            for (let y = 0; y < this.config.cols; y++) {
                let adjacentMines = 0;

                for (const d of this.directions) {
                    var nextX = x + d[0];
                    var nextY = y + d[1];
                    if (nextX >= 0 && nextX < this.config.rows
                        && nextY >= 0 && nextY < this.config.cols
                        && this.cells[nextX][nextY].mine) {
                        adjacentMines++;
                    }
                }

                this.cells[x][y].proximityMines = adjacentMines;
            }
        }
    }

    checkFirstCell(cell: Cell, mineCell: Cell) {
        if (cell.row == mineCell.row && cell.column == mineCell.column) return false;
        
        for(var i = 0; i < this.directions.length; i++) {
            var d = this.directions[i];
            var nextX = d[0] + cell.row;
            var nextY = d[1] + cell.column;

            if (nextX == mineCell.row && nextY == mineCell.column) {
                console.log(cell.row + " " + cell.column + "-" + nextX + " " + nextY);
                return false;
            }
        }

        return true;
    }

    onClick(event: any, cell: Cell) {
        if (!this.firstClick) {
            this.generateMines(cell);

            this.firstClick = true;
        }

        this.checkCell(cell);
    }

    checkCell(cell: Cell): 'gameover' | 'win' | null {
        if (cell.status != 'close') return;

        if (cell.mine) {
            return this.loose(cell);
        }
        else {
            this.openCell(cell);
        }

        return;
    }

    updateHeaderStatus(stt: any) {
        this.config.status = stt;
        this.configService.config$.next(this.config);
    }

    openCell(cell: Cell) {
        if (cell.status == 'open') return;

        this.config.remainCells--;
        cell.status = 'open';
        if (cell.proximityMines == 0) {
            for(let d of this.directions) {
                var nextX = cell.row + d[0];
                var nextY = cell.column + d[1];

                if (nextX >= 0 && nextX < this.config.rows
                    && nextY >= 0 && nextY < this.config.cols
                    && !this.cells[nextX][nextY].mine) {
                        var thisCell = this.cells[nextX][nextY];

                        this.checkCell(thisCell);
                    }
            }
        }
    }

    
    mouseDown(event: any, cell: any) {
        if(cell.status != 'open') {
            cell.focus = true;
            this.focusedCells.push(cell);
            return;
        }

        switch(event.which) {
            case 1: 
                this.lefrightClick.leftClick = true; 
                break;
            case 3:
                this.lefrightClick.rightClick = true;
                break;
        }

        if (!this.lefrightClick.leftClick || !this.lefrightClick.rightClick) return;

        if (cell.status == 'open') {
            this.leftRightClickCell(cell);
        }
    }

    mouseUp(event: any, cell: any) {
        this.focusedCells.forEach(cell => cell.focus = false);
        this.focusedCells = [];

        if(cell.status != 'open') {
            return;
        }

        switch(event.which) {
            case 1: 
                this.lefrightClick.leftClick = false;
                break;
            case 3:
                this.lefrightClick.rightClick = false;
                break;
        }
    }

    focusedCells = [];
    leftRightClickCell(cell: Cell) {
        var neighbours = [ 
            [0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]
        ];
        var mines = cell.proximityMines;
        var countMine = 0;

        neighbours.forEach(pos => {
            var x = cell.row + pos[0];
            var y = cell.column + pos[1];

            if (x >= 0 && y >= 0 && x < this.config.rows && y < this.config.cols) {
                var currentCell = this.cells[x][y];

                if (currentCell.mine == false && currentCell.status == 'flag') {
                    return this.loose(currentCell);
                }

                if (currentCell.mine == true && currentCell.status == 'flag') {
                    countMine++;
                }
                else if (currentCell.status == 'close') {
                    this.focusedCells.push(currentCell);
                    currentCell.focus = true;
                }
            }
        });

        if (countMine == mines) {
            this.focusedCells.forEach(closeCell => {
                this.openCell(closeCell);
            });
        }
        else {

        }
    }

    loose(cell: Cell) : 'gameover' | null {
        cell.focus = true;
        this.revealAll();
        this.updateHeaderStatus('loose');
        
        return 'gameover';
    }

    revealAll() {
        for(var x = 0; x < this.config.rows; x++) {
            for (var y = 0;  y < this.config.cols; y++) {
                var thisCell = this.cells[x][y];

                if (thisCell.status == 'close') {
                    thisCell.status = 'open';
                }
            }
        }
    }

    randomCell(): Cell {
        const x = Math.floor(Math.random() * this.cells.length);
        const y = Math.floor(Math.random() * this.cells[x].length);
        return this.cells[x][y];
    }

    flag(cell: Cell) {
        if (cell.status == 'open') return;

        if (cell.status === 'flag') {
            cell.status = 'close';

            if (cell.mine) {
                this.correctFlag--;
            }
            this.flagService.flag$.next(-1);
        } else {
            cell.status = 'flag';
            this.flagService.flag$.next(1);

            if (cell.mine) {
                this.correctFlag++;
            }

            if (this.correctFlag == this.config.mines && this.config.remainCells == 0) {
                this.updateHeaderStatus('win');
                return 'win';
            }
        }
    }
}