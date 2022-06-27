import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HacerPageRoutingModule } from './hacer-routing.module';

import { HacerPage } from './hacer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HacerPageRoutingModule
  ],
  declarations: [HacerPage]
})
export class HacerPageModule {}
