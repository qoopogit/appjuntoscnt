import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestSoyViolentoPageRoutingModule } from './test-soy-violento-routing.module';

import { TestSoyViolentoPage } from './test-soy-violento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestSoyViolentoPageRoutingModule
  ],
  declarations: [TestSoyViolentoPage]
})
export class TestSoyViolentoPageModule {}
