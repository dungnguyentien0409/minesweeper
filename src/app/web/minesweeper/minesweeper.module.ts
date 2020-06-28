import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import {  
    DashboardComponent,
    BoardComponent,
    CellComponent,
    HeaderComponent,
    FireworksComponent
} from './index';
import {
    MinesweeperRoutingModule
} from './minesweeper-routing.module';
import {
    SharedService, 
    ConfigService, 
    FlagService, 
    LoaderService
} from 'src/app/services';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MinesweeperRoutingModule,
        FormsModule,
        MaterialModule
    ],
    exports: [

    ],
    declarations: [
        DashboardComponent,
        BoardComponent,
        CellComponent,
        HeaderComponent,
        FireworksComponent
    ],
    providers: [
        SharedService, 
        ConfigService, 
        FlagService, 
        LoaderService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MinesweeperModule {

}