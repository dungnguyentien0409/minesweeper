import { Component, Input } from '@angular/core';
import { Cell } from '../../models/index';

@Component({
    selector: 'cell-component',
    styleUrls: ['./cell.component.scss'],
    templateUrl: './cell.component.html'
})
export class CellComponent {
    @Input() cell: Cell;

    constructor() {
    }
}