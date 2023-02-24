import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestSoyViolentoPage } from './test-soy-violento.page';

const routes: Routes = [
  {
    path: '',
    component: TestSoyViolentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestSoyViolentoPageRoutingModule {}
