import { Component, OnInit } from '@angular/core';
//import { SMS } from '@awesome-cordova-plugins/sms/ngx';
//import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from './../api/db.service';
import { Contacto } from './../api/contacto';
//import { AndroidPermissions } from '@ionic-native/android-permissions';

import {
  ToastController,
  LoadingController,
  AlertController,
} from '@ionic/angular';
//import { Service } from '../api/Service';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.page.html',
  styleUrls: ['./send-sms.page.scss'],
})
export class SendSmsPage implements OnInit {
  public contactos: Contacto[] = [];
  public contactoSelecionado: Contacto;
  public smsActivo = true;
  public smsMensajes = [];


  constructor(
    private db: DbService,
    //public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) //private sms: SMS
  {
    this.db.loadContactos();
    this.contactos = this.db.getData();
    console.log('contactos ' + this.contactos);
  }

  ngOnInit() {}

  sendSms() {
    // Send a text message using default options
    var numero = '0996435674';
    var mensaje = 'mensaje a enviar';

    var error = function (e) {
      alert('Something went wrong:' + e);
    };

    console.log('enviar mensaje');
    /*
    this.sms
      .hasPermission()
      .then((resp) => {
        console.log('Se tiene permiso? ' + resp);
        this.sms.send(numero, mensaje);
      })
      .catch((error) => {
        console.error('No se tiene permiso, se solicita');
        /*this.sms.requestPermission(
          function () {
            console.log('[OK] Permission accepted');
          },
          function (error) {
            console.info('[WARN] Permission not accepted');
            // Handle permission not accepted
          }
        );
        */
    //      });

    //this.sms.send('416123456', 'Hello world!');
  }

  onChangeContacto(contacto: Contacto) {
    console.log('se selecciono el contacto');
    if (contacto.sms !== null) {
      this.smsMensajes = [
        'Llamame urgente',
        'Ven a verme urgente',
        'Llama al 911 en mi nombre urgente',
        contacto.sms,
      ];
    } else {
      this.smsMensajes = [
        'Llamame urgente',
        'Ven a verme urgente',
        'Llama al 911 en mi nombre urgente',
      ];
    }
    this.smsActivo = false;
    this.contactoSelecionado = contacto;
  }

  onChangeSms(sms: string) {
    console.log('se selecciono el sms');
    this.contactoSelecionado.sms = sms;
  }
}
