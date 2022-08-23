import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  AlertController,
} from '@ionic/angular';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(
    public alertCtrl: AlertController) { }

  ngOnInit() {

    this.showintrotext();
  }


  async showintrotext()
  {


  }

}
