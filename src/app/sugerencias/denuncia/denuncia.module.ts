import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DenunciaPageRoutingModule } from './denuncia-routing.module';

import { DenunciaPage } from './denuncia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DenunciaPageRoutingModule
  ],
  declarations: [DenunciaPage]
})
export class DenunciaPageModule {}
