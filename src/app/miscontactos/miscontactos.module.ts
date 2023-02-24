import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MiscontactosPageRoutingModule } from './miscontactos-routing.module';
import { MiscontactosPage } from './miscontactos.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscontactosPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [MiscontactosPage],
})
export class MiscontactosPageModule {}
