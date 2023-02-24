import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MujeresPage } from './mujeres.page';

const routes: Routes = [
  {
    path: '',
    component: MujeresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MujeresPageRoutingModule {}
