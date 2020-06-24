import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Config } from 'src/app/models/config';
import { ConfigService, FlagService } from 'src/app/services/index';
import { LevelConstants } from 'src/app/shared/constants';

@Component({
    selector: 'header-component',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    config: Config;
    boom: number;

    constructor(private configService: ConfigService,
                private flagService: FlagService) {
        
    }

    ngOnInit() {
        this.config = new Config(LevelConstants.Easy);
        this.boom = this.config.mines;
        this.configService.config$.next(this.config);
        
        this.configService.config$.subscribe(res => {
            this.config = res;
        });

        this.flagService.flag$.subscribe(res => {
            this.boom -= res;
        })
    }

    onClickReset(stt: string) {
        this.selectLevel(this.config.level);
    }

    selectLevel(level: any) {
        switch(level) {
            case 'Easy':
                this.config = new Config(LevelConstants.Easy);
                break;
            case 'Medium':
                this.config = new Config(LevelConstants.Medium);
                break;
            case 'Hard':
                this.config = new Config(LevelConstants.Hard);
                break;
            default:
                this.config = new Config(LevelConstants.Easy);
                break;
        }

        this.config.status = 'play';
        this.boom = this.config.mines;
        this.configService.config$.next(this.config);
    }
}