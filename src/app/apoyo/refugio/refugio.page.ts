import { Component, OnInit } from '@angular/core';

import axios from 'axios';
@Component({
  selector: 'app-refugio',
  templateUrl: './refugio.page.html',
  styleUrls: ['./refugio.page.scss'],
})
export class RefugioPage implements OnInit {
  imagenprincial ='';
  titulo='';
  body = '';
  constructor() {

    axios.get('https://uploads.bayoli.com/cmsjuntas.php?pagina=refugio')
    .then(res => {

      this.imagenprincial= res.data.imagen_princial;
      this.titulo= res.data.titulo;
      this.body= res.data.body;
      console.log(res.data, );
    })
    .catch(err => {
      console.log(err);
    });

   }

  ngOnInit() {
  }

}
