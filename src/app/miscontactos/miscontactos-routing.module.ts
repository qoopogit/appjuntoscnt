import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscontactosPage } from './miscontactos.page';

const routes: Routes = [
  {
    path: '',
    component: MiscontactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscontactosPageRoutingModule {}
