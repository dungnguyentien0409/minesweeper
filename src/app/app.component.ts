import { Component } from '@angular/core';
import { Config } from 'src/app/models/index';
import { ConfigService } from 'src/app/services/index';
import { LevelConstants } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config: Config;

  constructor(private configService: ConfigService) {
      this.config = new Config(LevelConstants.Easy);
      configService.config$.subscribe(res => {
        this.config = res;
      });
  }
}
