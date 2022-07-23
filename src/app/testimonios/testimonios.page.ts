import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';
import { ModalController } from '@ionic/angular';
import { SocialShareComponent } from  '../components/social-share/social-share.component';


@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.page.html',
  styleUrls: ['./testimonios.page.scss'],
})
export class TestimoniosPage implements OnInit   {
  imagenprincial = '';
  titulo = '';
  body = [];
 public link= '';



  constructor(public modalCtrl: ModalController ) {
    axios
      .get(environment.cms + 'testimonios')
      .then((res) => {

        this.titulo = res.data.titulo;
        this.body = res.data.body;


      })
      .catch((err) => {
        console.log(err);
      });
  }

  async  compartir()
  {


    const modal = await this.modalCtrl.create({
      component: SocialShareComponent,
      cssClass: 'backTransparent',
      backdropDismiss: true
    });
    return modal.present();

  }



  ngOnInit() {}
}
