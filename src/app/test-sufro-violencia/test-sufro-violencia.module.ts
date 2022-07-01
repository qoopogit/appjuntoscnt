import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestSufroViolenciaPageRoutingModule } from './test-sufro-violencia-routing.module';

import { TestSufroViolenciaPage } from './test-sufro-violencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestSufroViolenciaPageRoutingModule
  ],
  declarations: [TestSufroViolenciaPage]
})
export class TestSufroViolenciaPageModule {}
