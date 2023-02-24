import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestSufroMobbingPage } from './test-sufro-mobbing.page';

const routes: Routes = [
  {
    path: '',
    component: TestSufroMobbingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestSufroMobbingPageRoutingModule {}
