import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestCyberAcosoPageRoutingModule } from './test-cyber-acoso-routing.module';

import { TestCyberAcosoPage } from './test-cyber-acoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCyberAcosoPageRoutingModule
  ],
  declarations: [TestCyberAcosoPage]
})
export class TestCyberAcosoPageModule {}
