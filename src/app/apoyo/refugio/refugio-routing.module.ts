import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefugioPage } from './refugio.page';

const routes: Routes = [
  {
    path: '',
    component: RefugioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefugioPageRoutingModule {}
