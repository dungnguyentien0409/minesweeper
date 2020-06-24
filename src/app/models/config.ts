import { LevelConstants } from '../shared/constants';

export class Config {
    status: 'play' | 'loose' | 'win' = 'play';
    rows: number;
    cols: number;
    mines: number;
    level: string;
    width: number;
    remainCells: number;

    constructor(boardInfo: any) {
        this.level = boardInfo.level;
        this.rows = boardInfo.rows;
        this.cols = boardInfo.cols;
        this.mines = boardInfo.mines;
        this.width = boardInfo.width;
        this.remainCells = this.rows * this.cols;
    }
}
  