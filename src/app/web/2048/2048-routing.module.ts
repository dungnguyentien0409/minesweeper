import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './index';

const game2048: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(game2048)
    ],
    exports: [
        RouterModule
    ]
})
export class Game2048RoutingModule {}