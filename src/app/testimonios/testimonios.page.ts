import { Component, OnInit } from '@angular/core';

import axios from 'axios';
@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.page.html',
  styleUrls: ['./testimonios.page.scss'],
})
export class TestimoniosPage implements OnInit {
  imagenprincial ='';
  titulo='';
  body ='';
  constructor() {

    axios.get('https://uploads.bayoli.com/cmsjuntas.php?pagina=testimonios')
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
