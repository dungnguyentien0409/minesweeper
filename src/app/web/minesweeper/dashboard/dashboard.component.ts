import { Component } from '@angular/core';
import { Config } from 'src/app/models/index';
import { ConfigService, LoaderService } from 'src/app/services/index';
import { LevelConstants } from 'src/app/shared/constants';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  config: Config;
  loaderId = 'global';
  
  constructor(private configService: ConfigService,
              private loaderService: LoaderService) {
      this.loaderService.showLoader();
      
      this.config = new Config(LevelConstants.Easy);
      configService.config$.subscribe(res => {
        this.config = res;
      });
  }
}
