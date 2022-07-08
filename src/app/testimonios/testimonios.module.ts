import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestimoniosPageRoutingModule } from './testimonios-routing.module';

import { TestimoniosPage } from './testimonios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestimoniosPageRoutingModule
  ],
  declarations: [TestimoniosPage]
})
export class TestimoniosPageModule {}
