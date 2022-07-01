import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegralPageRoutingModule } from './integral-routing.module';

import { IntegralPage } from './integral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegralPageRoutingModule
  ],
  declarations: [IntegralPage]
})
export class IntegralPageModule {}
