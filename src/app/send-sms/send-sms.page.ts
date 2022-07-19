import { Component, OnInit } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
//import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from './../api/db.service';
import { Contacto } from './../api/contacto';
//import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

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
  public smsSeleccionado: string;
  public smsActivo = true;
  public smsMensajes = [];
  latitud: number;
  longitud: number;

  constructor(
    private db: DbService,
    //public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router,
    private sms: SMS,
    private geolocation: Geolocation
  ) {
    this.db.loadContactos();
    this.contactos = this.db.getData();
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log(
          'Coordenadas obtenidas (' +
            resp.coords.latitude +
            ' , ' +
            resp.coords.longitude
        );
        this.latitud = resp.coords.latitude;
        this.longitud = resp.coords.longitude;
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  ngOnInit() {}

  async sendSms() {
    // Send a text message using default options
    var numero = this.contactoSelecionado.number;
    var mensaje = this.contactoSelecionado.sms.trim().toString();
    mensaje = `${this.contactoSelecionado.sms.toString()}, Mi ubicación actual es: https://www.google.com/maps/dir/?api=1&destination=${this.latitud.toString()},${this.longitud.toString()}&zoom=20`;

    var error = function (e) {
      alert('Something went wrong:' + e);
    };

    console.log('mensaje enviado ' + mensaje);
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

    this.sms.send(numero, mensaje);
    let toast = await this.toast.create({
      message: 'Mensaje enviado',
      duration: 2500,
    });
    toast.present();
  }

  onChangeContacto(contacto: Contacto) {
    console.log('se selecciono el contacto:' + contacto.name);
    console.log('sms:' + contacto.sms);

    console.log(
      '(2) se selecciono el contacto:' + this.contactoSelecionado.name
    );
    console.log('(2) sms:' + this.contactoSelecionado.sms);

    if (this.contactoSelecionado.sms !== null) {
      this.smsMensajes = [
        'Llamame urgente',
        'Ven a verme urgente',
        'Llama al 911 en mi nombre urgente',
        this.contactoSelecionado.sms,
      ];
    } else {
      this.smsMensajes = [
        'Llamame urgente',
        'Ven a verme urgente',
        'Llama al 911 en mi nombre urgente',
      ];
    }
    this.smsActivo = false;
    //this.contactoSelecionado = contacto;
  }

  onChangeSms(sms: string) {
    console.log('se selecciono el sms: ' + this.smsSeleccionado);
    this.contactoSelecionado.sms = this.smsSeleccionado;
  }
}
