import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedService, ConfigService, FlagService } from './services/index';
import { AppComponent } from './app.component';
import { CellComponent, BoardComponent, HeaderComponent, FireworksComponent } from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BoardComponent,
    HeaderComponent,
    FireworksComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService, ConfigService, FlagService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
