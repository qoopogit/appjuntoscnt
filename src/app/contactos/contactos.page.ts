import { Component, OnInit } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DbService } from './../api/db.service';
import { Router } from '@angular/router';

import {
  ToastController,
  LoadingController,
  AlertController,
} from '@ionic/angular';
import { Service } from '../api/Service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  mainForm: FormGroup;
  Data: any[] = [];

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

    /*;
    .then(async (res) => {
      let toast = await this.toast.create({
        message: 'Song deleted',
        duration: 2500,
      });
      toast.present();
    });
    */
  }

  /**
   * Almacena la informacion cuando el usuario hace click en submit
   */
  async storeData() {
    console.log(
      'al guardar=>' +
        this.db.addContacto(
          this.mainForm.value.name,
          this.mainForm.value.name,
          this.mainForm.value.number,
          this.mainForm.value.sms
        )
    );
    this.mainForm.reset();
    let toast = await this.toast.create({
      message: 'Guardado',
      duration: 2500,
    });
    toast.present();
    /*
      .then((res) => {
        this.mainForm.reset();
      });*/
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
