import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
//import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.page.html',
  styleUrls: ['./testimonios.page.scss'],
})
export class TestimoniosPage implements OnInit {
  imagenprincial ='';
  titulo='';
  body = [];


  text='Flamenco';
  imgurl= 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg';
  link='https://link.medium.com/JA4amAHFJ5';

  constructor(  ) {

    axios.get('https://uploads.bayoli.com/cmsjuntas.php?pagina=testimonios')
    .then(res => {
      const i =0;
      this.imagenprincial= res.data.imagen_princial;
      this.titulo= res.data.titulo;
      console.log(res.data, );

      this.body= res.data.body;

    })
    .catch(err => {
      console.log(err);
    });
   }






  ngOnInit() {
  }

}
