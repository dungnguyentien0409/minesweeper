import { NgModule } from '@angular/core';
import { Game2048RoutingModule } from './2048-routing.module';

import { DashboardComponent } from './index';

@NgModule({
    imports: [
        Game2048RoutingModule
    ],
    exports: [],
    declarations: [
        DashboardComponent
    ]
})
export class Game2048Module {}