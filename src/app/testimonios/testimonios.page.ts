import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
} from 'swiper';
import { IonicSlides } from '@ionic/angular';
//import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.page.html',
  styleUrls: ['./testimonios.page.scss'],
})
export class TestimoniosPage implements OnInit {
  imagenprincial = '';
  titulo = '';
  body = [];



  constructor() {
    axios
      .get(environment.cms + 'testimonios')
      .then((res) => {

        this.titulo = res.data.titulo;
        console.log(res.data);

        this.body = res.data.body;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {}
}
