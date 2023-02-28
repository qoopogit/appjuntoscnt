import { Component, OnInit, ViewChild } from '@angular/core';
import { SmsManager } from '@byteowls/capacitor-sms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DbService } from './../api/db.service';
import { IonModal, isPlatform } from '@ionic/angular';
import { Contacts, ContactPayload } from '@capacitor-community/contacts';
import { ToastController, AlertController } from '@ionic/angular';

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
  contacts: Observable<ContactPayload[]>;
  iosOrAndroid: boolean;

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private alertCtrl: AlertController
  ) {
    this.mainForm = this.formBuilder.group({
      name: [''],
      number: [''],
      sms: [''],
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  newContact() {
    this.mainForm.reset();
    /*
    this.mainForm = this.formBuilder.group({
      name: [''],
      number: [''],
      sms: [''],
    });
    */
  }

  async getPermissions(): Promise<void> {
    /*
    if (isPlatform('android')) {
      let permission = await Contacts.checkPermissions().then((r) => {
        ////console.log('Permisos ' + JSON.stringify(permission));
        if (!(r.contacts === 'granted')) {
          this.toastMensaje('No se tiene permisos para leer los contactos.');
        }
      });
    }
    */
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
    this.toastMensaje('Cargando. Espere por favor.');
    const result = await Contacts.getContacts({
      projection: {
        // Specify which fields should be retrieved.
        name: true,
        phones: true,
        //postalAddresses: true,
      },
    });

    const phoneContacts: ContactPayload[] = result.contacts;
    this.contacts = of(phoneContacts);
    this.deviceContacts = result.contacts;

    for (const contact of result.contacts) {
      const number = contact.phones?.[0]?.number;
      const street = contact.postalAddresses?.[0]?.street;
    }
  }

  async seleccionarContacto(contact: ContactPayload) {
    ////console.log(contact);
    if (contact === null) {
      this.toastMensaje('El contacto seleccionado es nulo');
    } else {
      if (contact.phones === null || contact.phones.length === 0) {
        this.toastMensaje(
          `El contacto ${contact.name?.display} no tiene un número telefónico.`
        );
      } else {
        this.mainForm.controls['name'].setValue(contact.name?.display);
        this.mainForm.controls['number'].setValue(contact.phones?.[0]?.number);
        this.mainForm.controls['sms'].setValue('');

        /*
        this.mainForm = this.formBuilder.group({
          name: [contact.name?.display],
          number: [contact.phones?.[0]?.number],
          sms: [''],
        });
*/
        this.toastMensaje(
          'Contacto seleccionado: ' +
            contact.name?.display +
            ' ' +
            contact.phones?.[0]?.number
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
            const numbers: string[] = [numero];
            SmsManager.send({
              numbers: numbers,
              text: 'Usted ha sido agregado como contacto de emergencia por el remitente de este sms.',
            })
              .then(() => {
                // success
              })
              .catch((error) => {
                console.error(error);
                this.toastMensaje('Error al enviar el sms ' + error);
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
    // this.mainForm.reset();

    this.mainForm = this.formBuilder.group({
      name: [''],
      number: [''],
      sms: [''],
    });

    this.db.fetchContactos().subscribe((item) => {
      this.Data = item;
    });
    this.iosOrAndroid = isPlatform('android') || isPlatform('ios');
    this.getPermissions();
  }
}
