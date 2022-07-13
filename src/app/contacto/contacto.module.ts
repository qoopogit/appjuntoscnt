import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContactoPageRoutingModule } from './contacto-routing.module';
import { ContactoPage } from './contacto.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [ContactoPage],
})
export class ContactoPageModule {}
