import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefugioPageRoutingModule } from './refugio-routing.module';

import { RefugioPage } from './refugio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefugioPageRoutingModule
  ],
  declarations: [RefugioPage]
})
export class RefugioPageModule {}
