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
    private actRoute: ActivatedRoute
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.db.getContacto(this.id).then((res) => {
      this.editForm.setValue({
        name: res['name'],
        number: res['number'],
        sms: res['sms'],
      });
    });
  }
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: [''],
      number: [''],
      sms: [''],
    });
  }
  saveForm() {
    this.db.updateContacto(this.id, this.editForm.value).then((res) => {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }
}
