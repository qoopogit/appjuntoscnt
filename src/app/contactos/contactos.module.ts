import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContactosPageRoutingModule } from './contactos-routing.module';
import { ContactosPage } from './contactos.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ContactosPageRoutingModule],
  declarations: [ContactosPage],
})
export class ContactosPageModule {}
