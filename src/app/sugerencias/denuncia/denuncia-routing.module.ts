import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DenunciaPage } from './denuncia.page';

const routes: Routes = [
  {
    path: '',
    component: DenunciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DenunciaPageRoutingModule {}
