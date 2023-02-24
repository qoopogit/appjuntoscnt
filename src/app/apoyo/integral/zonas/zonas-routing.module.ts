import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonasPage } from './zonas.page';

const routes: Routes = [
  {
    path: '',
    component: ZonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonasPageRoutingModule {}
