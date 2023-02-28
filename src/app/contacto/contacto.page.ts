import { Component, OnInit } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DbService } from './../api/db.service';
import { ActivatedRoute, Router } from '@angular/router';

import {
  ToastController,
  LoadingController,
  AlertController,
} from '@ionic/angular';
import { Service } from '../api/Service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  editForm: FormGroup;
  id: any;
  constructor(
    private db: DbService,
    private router: Router,
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private toast: ToastController
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      number: [''],
      sms: [''],
    });

    this.id = this.actRoute.snapshot.paramMap.get('id');
    //console.log('id=' + this.id);
    this.db.getContacto(this.id);

    //.then((res) => {
    /*
      this.editForm = this.formBuilder.group({
        name: [res['name']],
        number: [res['number']],
        sms: [res['sms']],
      });
      */
    /*
      this.editForm.setValue({
        name: res['name'],
        number: res['number'],
        sms: res['sms'],
      });*/
    //});
  }
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: [''],
      number: [''],
      sms: [''],
    });

    this.db.fetchEditContact().subscribe((item) => {
      //console.log('Ejecutando el fetch que consulta el contacto...');
      this.editForm = this.formBuilder.group({
        name: [item['name']],
        number: [item['number']],
        sms: [item['sms']],
      });
    });
  }
  async saveForm() {
    this.db.updateContacto(this.id, this.editForm.value);
    let toast = await this.toast.create({
      message: 'Guardado',
      duration: 2500,
    });
    toast.present();
    this.router.navigate(['/miscontactos']);
  }
}
