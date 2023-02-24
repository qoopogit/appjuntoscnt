import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HombresPageRoutingModule } from './hombres-routing.module';

import { HombresPage } from './hombres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HombresPageRoutingModule
  ],
  declarations: [HombresPage]
})
export class HombresPageModule {}
