import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout';
import { PageNotFoundComponent } from './web/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'web',
    component: LayoutComponent,
    loadChildren: './web/web.module#WebModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
