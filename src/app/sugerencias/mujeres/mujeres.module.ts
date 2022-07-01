import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MujeresPageRoutingModule } from './mujeres-routing.module';

import { MujeresPage } from './mujeres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MujeresPageRoutingModule
  ],
  declarations: [MujeresPage]
})
export class MujeresPageModule {}
