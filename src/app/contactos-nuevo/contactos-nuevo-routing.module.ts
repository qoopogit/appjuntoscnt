import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactosNuevoPage } from './contactos-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: ContactosNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactosNuevoPageRoutingModule {}
