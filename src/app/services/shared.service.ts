import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cell } from '../models/index';

@Injectable()
export class SharedService {
    flag$ = new Subject<number>();
    
    constructor() {}
}