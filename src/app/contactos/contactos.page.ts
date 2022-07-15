import { Component, OnInit } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DbService } from './../api/db.service';
import { Router } from '@angular/router';
import axios from 'axios';

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
  imagenprincial ='';
  titulo='';
  body = '';

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) {

    axios.get('https://uploads.bayoli.com/cmsjuntas.php?pagina=contactos')
    .then(res => {

      this.imagenprincial= res.data.imagen_princial;
      this.titulo= res.data.titulo;
      this.body= res.data.body;
      console.log(res.data.body, );

    })
    .catch(err => {
      console.log(err);
    });

  }

  /**
   * Elimina un registro
   */
  deleteContacto(id) {
    this.db.deleteContacto(id)

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
  storeData() {
    console.log(
      'al guardar=>' +
        this.db.addContacto(
          this.mainForm.value.name,
          this.mainForm.value.name,
          this.mainForm.value.number,
          this.mainForm.value.sms
        )
    );
    /*
      .then((res) => {
        this.mainForm.reset();
      });*/
  }

  refrescarData() {
    console.log('Cargando registros..');
    this.db.loadContactos();
    this.Data = this.db.getData();
  }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      name: [''],
      number: [''],
      sms: [''],
    });

    this.refrescarData();

    this.db.dbState().subscribe((res) => {
      if (res) {
        this.db.fetchContactos().subscribe((item) => {
          console.log('contactos, obteniendo data ' + item);
          this.Data = item;
        });
      }
    });
  }
}
