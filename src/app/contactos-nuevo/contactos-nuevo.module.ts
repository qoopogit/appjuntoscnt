import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactosNuevoPageRoutingModule } from './contactos-nuevo-routing.module';

import { ContactosNuevoPage } from './contactos-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactosNuevoPageRoutingModule
  ],
  declarations: [ContactosNuevoPage]
})
export class ContactosNuevoPageModule {}
