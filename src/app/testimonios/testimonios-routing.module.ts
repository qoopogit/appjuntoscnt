import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimoniosPage } from './testimonios.page';

const routes: Routes = [
  {
    path: '',
    component: TestimoniosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimoniosPageRoutingModule {}
