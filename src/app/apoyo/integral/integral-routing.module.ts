import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegralPage } from './integral.page';

const routes: Routes = [
  {
    path: '',
    component: IntegralPage
  },  {
    path: 'zonas',
    loadChildren: () => import('./zonas/zonas.module').then( m => m.ZonasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegralPageRoutingModule {}
