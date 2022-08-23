import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import Swiper, { Navigation, Pagination  } from 'swiper';
import {
  ToastController,
  LoadingController,
  AlertController,
} from '@ionic/angular';
import axios from 'axios';
import { SwiperComponent } from 'swiper/angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})


export class IntroPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  splash1 = '';
  splash2 = '';
  splash3 = '';
  splash4 = '';
  splash5 = '';
  splash6 = '';
  splash7 = '';
  splash8 = '';
  alerta = '';
  constructor(
    public alertCtrl: AlertController) {
    axios
      .get(environment.cms + 'intro')
      .then((res) => {
        this.splash1 = res.data.splash1;
        this.splash2 = res.data.splash2;
        this.splash3 = res.data.splash3;
        this.splash4 = res.data.splash4;
        this.splash5 = res.data.splash5;
        this.splash6 = res.data.splash6;
        this.splash7 = res.data.splash7;
        this.splash8 = res.data.splash8;
        this.alerta = res.data.alerta;
        console.log(res.data.splash1);
      })
      .catch((err) => {
        console.log(err);
      });

      this.showAlertComoUsar();

  }

  proximo([swiper])
  {

    console.log('proximo',swiper);
  }
  ngOnInit() {


  }

  onRobotClick() {
    console.log('next');
    this.swiper.swiperRef.slideNext(1200);
    }

    async showAlertComoUsar() {
      const alert = await this.alertCtrl.create({
        header: 'Información',
        message:
        this.alerta,
        buttons: [
          {
            text: 'Aceptar',
          },
        ],
      });
      alert.present();
    }
  }





