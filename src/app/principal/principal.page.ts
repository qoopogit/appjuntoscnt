import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  AlertController,
} from '@ionic/angular';


declare var dataLayer: Array<any>;
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(
    public alertCtrl: AlertController) { }

  ngOnInit() {
    dataLayer.push({
      'screenPath': 'Principal',
      'screenName': 'Menu Principal'
    });
    dataLayer.push({'event': 'appScreenView'});
    this.showintrotext();
  }


  async showintrotext()
  {


  }

}
