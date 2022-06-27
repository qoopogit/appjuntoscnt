import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HacerPage } from './hacer.page';

const routes: Routes = [
  {
    path: '',
    component: HacerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HacerPageRoutingModule {}
