import { Component, OnInit, ViewChild } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { DbService } from './../api/db.service';
import { IonModal, isPlatform } from '@ionic/angular';
import { Contacts, Contact } from '@capacitor-community/contacts';
//import { OverlayEventDetail } from '@ionic/core/components';

import {
  ToastController,
  LoadingController,
  AlertController,
} from '@ionic/angular';
import { identity } from 'rxjs';
import { ContactosPage } from '../contactos/contactos.page';
//import { Service } from '../api/Service';

@Component({
  selector: 'app-miscontactos',
  templateUrl: './miscontactos.page.html',
  styleUrls: ['./miscontactos.page.scss'],
})
export class MiscontactosPage implements OnInit {
  Data: any[] = [];
  mainForm: FormGroup;
  @ViewChild(IonModal) modal: IonModal;

  deviceContacts = [];
  contacts: Observable<Contact[]>;

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router,
    private alertCtrl: AlertController,
    private sms: SMS
  ) {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  newContact() {
    this.mainForm = this.formBuilder.group({
      name: [''],
      number: [''],
      sms: [''],
    });
  }

  async getPermissions(): Promise<void> {
    if (isPlatform('android')) {
      let permission = await Contacts.getPermissions();
      if (!permission.granted) {
        this.toastMensaje('No se tiene permisos para leer los contactos.');
        return;
      }
    }
  }

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

  private toastMensaje(mensaje: string) {
    let toast = this.toast.create({
      message: mensaje,
      duration: 2500,
    });
    toast.then((resp) => {
      resp.present();
    });
  }

  async getContacts(): Promise<void> {
    //this.getPermissions();
    if (isPlatform('android')) {
      let permission = await Contacts.getPermissions();
      if (!permission.granted) {
        this.toastMensaje('No se tiene permisos para leer los contactos.');
        return;
      }
    }

    this.toastMensaje('Cargando. Espere por favor.');

    Contacts.getContacts()
      .then((result) => {
        console.log('result is:', result);
        const phoneContacts: Contact[] = result.contacts;
        this.contacts = of(phoneContacts);
        this.deviceContacts = result.contacts;
      })
      .catch((e) => {
        console.log('Error al cargar contactos');
        console.log(e);
        this.toastMensaje('Error al cargar contactos:' + e);
      });
  }

  async seleccionarContacto(contact: Contact) {
    console.log(contact);

    if (contact === null) {
      this.toastMensaje('El contacto seleccionado es nulo');
      /*this.alertCtrl
        .create({
          header: 'Aviso',
          message: `El contacto seleccionado es nulo.`,
          buttons: ['Aceptar'],
        })
        .then((r) => {
          r.present();
        });*/
    } else {
      if (contact.phoneNumbers === null || contact.phoneNumbers.length === 0) {
        this.toastMensaje(
          `El contacto ${contact.displayName} no tiene un número telefónico.`
        );
        /*this.alertCtrl
          .create({
            header: 'Aviso',
            message: `El contacto ${contact.displayName} no tiene un número telefónico.`,
            buttons: ['Aceptar'],
          })
          .then((r) => {
            r.present();
          });*/
      } else {
        //this.mainForm.reset();
        //this.mainForm.value.name = contact.displayName;
        //this.mainForm.value.number = contact.phoneNumbers[0].number;

        this.mainForm = this.formBuilder.group({
          name: [contact.displayName],
          number: [contact.phoneNumbers[0].number],
          sms: [''],
        });

        this.toastMensaje(
          'Contacto seleccionado: ' +
            contact.displayName +
            ' ' +
            contact.phoneNumbers[0].number
        );
      }
    }
  }

  /**
   * Almacena la informacion cuando el usuario hace click en submit
   */
  async storeData() {
    if (this.Data && this.Data.length >= 4) {
      this.toastMensaje('Puede agregar un máximo de 4 contactos');
      return;
    }

    let id: string = this.mainForm.value.name + this.mainForm.value.number;
    let nombre: string = this.mainForm.value.name;
    let numero: string = this.mainForm.value.number;
    let msg: string = this.mainForm.value.sms;

    this.db.addContacto(id, nombre, numero, msg);

    let alertaCreacion = this.alertCtrl.create({
      header: 'A su nuevo contacto?',
      message:
        'Desea enviarle un mensaje informándolo que ha sido agregado como nuevo contacto?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            let options = {
              eplaceLineBreaks: true, // true to replace \n by a new line, false by default
              android: {
                intent: 'INTENT', // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
              },
            };

            this.sms
              .send(
                numero,
                'Usted ha sido agregado como contacto de emergencia por el remitente de este sms.',
                options
              )
              .then((resp) => {
                this.toastMensaje(
                  `Aviso: Mensaje enviado al contacto. ${nombre}`
                );
              })
              .catch((e) => {
                console.log('Error el enviar sms');
                this.toastMensaje('Error al enviar el sms');
              });
          },
        },
        {
          text: 'No',
          handler: () => {
            this.toastMensaje(`Contacto Registrado`);
          },
        },
      ],
    });
    alertaCreacion.then((resp) => {
      resp.present();
    });

    this.mainForm.reset();
    this.modal.dismiss(null, 'confirm');

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

    this.getPermissions();
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
