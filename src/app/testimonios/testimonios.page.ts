import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
//import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { SocialSharing} from '@ionic-native/social-sharing/ngx';

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

  constructor(private socialSharing: SocialSharing  ) {

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


   // eslint-disable-next-line @typescript-eslint/naming-convention
   ShareGeneric(parameter){
    const url = this.link;
    const text = parameter+'\n';
    this.socialSharing.share(text, 'MEDIUM', null, url);
  }


// eslint-disable-next-line @typescript-eslint/naming-convention
  ShareFacebook(){

    // Check if sharing via email is supported
this.socialSharing.canShareViaEmail().then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});

// Share via email
this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
  // Success!
}).catch(() => {
  // Error!
});


    this.socialSharing.shareViaFacebookWithPasteMessageHint(this.text, this.imgurl, null /* url */, 'Copia Pega!');
  }


  ngOnInit() {
  }

}
