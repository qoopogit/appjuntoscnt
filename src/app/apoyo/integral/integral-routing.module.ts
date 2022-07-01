import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegralPage } from './integral.page';

const routes: Routes = [
  {
    path: '',
    component: IntegralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegralPageRoutingModule {}
