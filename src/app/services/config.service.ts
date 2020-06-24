import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Config } from 'src/app/models/config';

@Injectable()
export class ConfigService {
    config$ = new Subject<Config>();
    
    constructor() {}
}