import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FlagService {
    flag$ = new Subject<number>();
    
    constructor() {}
}