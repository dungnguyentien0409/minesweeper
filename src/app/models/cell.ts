export class Cell {
  status: 'open' | 'close' | 'flag' = 'close';
  mine = false;
  proximityMines = 0;
  focus: true | false = false;

  constructor(public row: number, public column: number) {
  }
}
