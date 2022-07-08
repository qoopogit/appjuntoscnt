import { Component, OnInit } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';

import {
  ToastController,
  LoadingController,
  AlertController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { Service } from '../api/Service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  public ordenando: false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public pContactos: ContactosProvider,
    private sms: SMS,
    private platform: Platform,
    public toastCtrl: ToastController,
    private androidPermissions: AndroidPermissions,
    private alertCtrl: AlertController

  ) {}

  ngOnInit() {}

  ingresarContacto() {
    let modal = this.modalCtrl.create('modalRegistrarContacto');
    modal.onDidDismiss((contactoReg) => {
      if (contactoReg) {
        this.pContactos.listaDeContactos.push(contactoReg);

        if (this.platform.is('cordova')) {
          this.androidPermissions
            .checkPermission(this.androidPermissions.PERMISSION.SEND_SMS)
            .then(
              (result) => {
                console.log('Permiso de sms?', result.hasPermission);
                if (result.hasPermission) {
                  let alertaCreacion = this.alertCtrl.create({
                    title: 'A su nuevo contacto?',
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
                              contactoReg.phoneNumber,
                              'Usted ha sido agregado como contacto de emergencia por el remitente de este sms.',
                              options
                            )
                            .then((resp) => {
                              if (resp == 'OK') {
                                this.toastMensaje(
                                  `Aviso: Mensaje enviado al contacto. ${contactoReg.displayName}`
                                );
                              } else {
                                this.toastMensaje(`Fallo: ${resp}`);
                              }
                            })
                            .catch((e) => {
                              console.log('Error al enviar el SMS:', e);
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
                  alertaCreacion.present();
                } else {
                  console.log('permisos sms:', result.hasPermission);
                  this.toastMensaje(`Contacto Registrado`);
                  this.androidPermissions.requestPermissions([
                    this.androidPermissions.PERMISSION.READ_SMS,
                  ]);
                  this.androidPermissions.requestPermissions([
                    this.androidPermissions.PERMISSION.SEND_SMS,
                  ]);
                }
              },
              (err) => {
                console.log('Request Permission SEND_SMS');
                this.androidPermissions.requestPermissions([
                  this.androidPermissions.PERMISSION.READ_SMS,
                ]);
                this.androidPermissions.requestPermissions([
                  this.androidPermissions.PERMISSION.SEND_SMS,
                ]);
              }
            );
        } else {
          this.toastMensaje(
            `Aviso: Contacto ${contactoReg.displayName} registrado`
          );
        }
      }
    });
    modal.present();
  }

  public cargarContactos() {
    this.cargarContactos = null;
    this.pContactos.findAll().then((contactosDB) => {
      console.log(contactosDB);
    });
  }

  eliminar(idx: number, id: string) {
    this.pContactos.listaDeContactos.splice(idx, 1);
    this.pContactos.delete(id).then((eliminado) => {
      return true;
    });
  }

  reordenar_contactos(indices: any) {
    this.pContactos.listaDeContactos = reorderArray(
      this.pContactos.listaDeContactos,
      indices
    );
  }

  private toastMensaje(mensaje: string) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3500,
    });
    toast.present();
  }
}
