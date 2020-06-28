import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './index';

const minesweeperRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(minesweeperRoutes),
    ],
    exports: [
        RouterModule,
    ],
    providers: []
})
export class MinesweeperRoutingModule {}