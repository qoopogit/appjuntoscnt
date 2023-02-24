import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HombresPage } from './hombres.page';

const routes: Routes = [
  {
    path: '',
    component: HombresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HombresPageRoutingModule {}
