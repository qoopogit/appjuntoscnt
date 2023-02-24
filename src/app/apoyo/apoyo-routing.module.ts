import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApoyoPage } from './apoyo.page';

const routes: Routes = [
  {
    path: '',
    component: ApoyoPage
  },
  {
    path: 'refugio',
    loadChildren: () => import('./refugio/refugio.module').then( m => m.RefugioPageModule)
  },
  {
    path: 'integral',
    loadChildren: () => import('./integral/integral.module').then( m => m.IntegralPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApoyoPageRoutingModule {}
