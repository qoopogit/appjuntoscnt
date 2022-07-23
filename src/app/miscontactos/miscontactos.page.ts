import { Component, OnInit } from '@angular/core';
//import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from './../api/db.service';

import {
  ToastController,
  LoadingController,
  AlertController,
} from '@ionic/angular';
//import { Service } from '../api/Service';

@Component({
  selector: 'app-miscontactos',
  templateUrl: './miscontactos.page.html',
  styleUrls: ['./miscontactos.page.scss'],
})
export class MiscontactosPage implements OnInit {
  Data: any[] = [];
  mainForm: FormGroup;
  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) {}

  /**
   * Elimina un registro
   */
  async deleteContacto(id) {
    this.db.deleteContacto(id);

    let toast = await this.toast.create({
      message: 'Eliminado',
      duration: 2500,
    });
    toast.present();
  }

  /**
   * Almacena la informacion cuando el usuario hace click en submit
   */
  async storeData() {
    this.db.addContacto(
      this.mainForm.value.name+this.mainForm.value.number,
      this.mainForm.value.name,
      this.mainForm.value.number,
      this.mainForm.value.sms
    );
    this.mainForm.reset();
    let toast = await this.toast.create({
      message: 'Guardado',
      duration: 2500,
    });
    toast.present();
  }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      name: [''],
      number: [''],
      sms: [''],
    });

    this.db.fetchContactos().subscribe((item) => {
      console.log('Ejecutando el fetch que actualiza la data...');
      this.Data = item;
    });
    /*
      this.db.dbState().subscribe((res) => {
        if (res) {
          this.db.fetchContactos().subscribe((item) => {
            console.log('contactos, obteniendo data ' + item);
            this.Data = item;
          });
        }
      });
  */
  }
}
