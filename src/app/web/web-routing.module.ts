import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'minesweeper',
                loadChildren: './minesweeper/minesweeper.module#MinesweeperModule'
            },
            {
                path: '2048',
                loadChildren: './2048/2048.module#Game2048Module'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class WebRoutingModule {}