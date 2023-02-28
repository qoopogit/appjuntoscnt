import { Component, OnInit } from '@angular/core';
import { SmsManager } from '@byteowls/capacitor-sms';
import { Router } from '@angular/router';
import { DbService } from './../api/db.service';
import { Contacto } from './../api/contacto';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
//import { Geolocation } from '@capacitor/geolocation';

import {
  ToastController,
  LoadingController,
  AlertController,
} from '@ionic/angular';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.page.html',
  styleUrls: ['./send-sms.page.scss'],
})
export class SendSmsPage implements OnInit {
  Data: any[] = [];
  public contactoSelecionado: Contacto;
  public smsSeleccionado: string;
  public smsActivo = true;
  public smsContacto = true;
  public smsMensajes = [];
  latitud: string;
  longitud: string;
  public enviarOpcion = 1;

  constructor(
    private db: DbService,
    private toast: ToastController,
    private router: Router,
    //private sms: SMS,
    private geolocation: Geolocation
  ) {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitud = resp.coords.latitude.toString();
        this.longitud = resp.coords.longitude.toString();
      })
      .catch((error) => {
        //console.log('Error getting location', error);
      });
    this.enviarOpcion = 1;
  }

  ngOnInit() {
    this.db.fetchContactos().subscribe((item) => {
      //console.log('Ejecutando el fetch que actualiza la data...');
      this.Data = item;
    });
    this.onChangeContacto(null);
  }

  selectSendOption(opcion) {
    //console.log('opcion send: ' + opcion);
    this.smsContacto = opcion === 1;
    this.onChangeContacto(null);
  }

  private toastMensaje(mensaje: string) {
    let toast = this.toast.create({
      message: mensaje,
      duration: 2500,
    });
    toast.then((resp) => {
      resp.present();
    });
  }

  /**
   * Envia un sms a un numero especificado
   * @param numero
   * @param mensaje
   */
  sendIndividualSms(numero, mensaje) {
    //console.log('sendind sms ' + mensaje + '  to ' + numero);
    var error = function (e) {
      alert('Something went wrong:' + e);
    };

    const numbers: string[] = [numero];
    SmsManager.send({
      numbers: numbers,
      text: mensaje,
    })
      .then(() => {
        // success
      })
      .catch((error) => {
        console.error(error);
        this.toastMensaje('Error al enviar el sms ' + error);
      });
  }

  async sendSms() {
    // Send a text message using default options
    ////console.log('send sms global ? ' + this.smsContacto);
    ////console.log('send sms mensaje ' + this.smsSeleccionado);
    ////console.log(
    //  'contacto seleccionado ' + JSON.stringify(this.contactoSelecionado)
    //);
    if (this.smsSeleccionado === null) {
      this.smsSeleccionado = '';
    }
    var mensaje = this.smsSeleccionado.trim().toString();
    mensaje = `${this.smsSeleccionado.toString()}, Mi ubicación actual es: https://www.google.com/maps/dir/?api=1&destination=${
      this.latitud
    },${this.longitud}&zoom=20`;

    if (!this.smsContacto) {
      var numero = this.contactoSelecionado.number;
      this.sendIndividualSms(numero, mensaje);
    } else {
      for (var contact of this.Data) {
        this.sendIndividualSms(contact.number, mensaje);
      }
    }
  }

  onChangeContacto(contacto: Contacto) {
    if (this.contactoSelecionado && this.contactoSelecionado.sms !== null) {
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
    //this.contactoSelecionado.sms = this.smsSeleccionado;
  }
}
