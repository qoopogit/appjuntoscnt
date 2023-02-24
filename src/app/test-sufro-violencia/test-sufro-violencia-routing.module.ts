import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestSufroViolenciaPage } from './test-sufro-violencia.page';

const routes: Routes = [
  {
    path: '',
    component: TestSufroViolenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestSufroViolenciaPageRoutingModule {}
