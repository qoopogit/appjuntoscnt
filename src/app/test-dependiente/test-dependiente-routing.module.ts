import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCyberAcosoPage } from './test-dependiente.page';

const routes: Routes = [
  {
    path: '',
    component: TestCyberAcosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCyberAcosoPageRoutingModule {}
