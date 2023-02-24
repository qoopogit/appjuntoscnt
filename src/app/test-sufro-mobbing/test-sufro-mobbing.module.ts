import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestSufroMobbingPageRoutingModule } from './test-sufro-mobbing-routing.module';

import { TestSufroMobbingPage } from './test-sufro-mobbing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestSufroMobbingPageRoutingModule
  ],
  declarations: [TestSufroMobbingPage]
})
export class TestSufroMobbingPageModule {}
