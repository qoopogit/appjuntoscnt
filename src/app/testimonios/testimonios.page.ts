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
  sharingText ='';
 public link= '';



  constructor(public modalCtrl: ModalController , ) {
    axios
      .get(environment.cms + 'testimonios')
      .then((res) => {

        this.titulo = res.data.titulo;
        this.body = res.data.body;
        this.link = res.data.link;

      })
      .catch((err) => {
        console.log(err);
      });
  }


  public geturl(){
    axios
    .get(environment.cms + 'testimonios')
    .then((res) => {

      this.titulo = res.data.titulo;
      this.body = res.data.body;
      this.link = res.data.link;

    })
    .catch((err) => {
      console.log(err);
    });

    return this.link  ;
  }
  public getText(){
    axios
    .get(environment.cms + 'testimonios')
    .then((res) => {

      this.sharingText = res.data.titulo;

    })
    .catch((err) => {
      console.log(err);
    });

    return this.link  ;
  }


  async  compartir()
  {

  //  this.socialShareComponent.sharingUrl='dimater.com';

    const modal = await this.modalCtrl.create({
      component: SocialShareComponent,
      cssClass: 'backTransparent',
      backdropDismiss: true
    });
    return modal.present();

  }



  ngOnInit() {}
}
