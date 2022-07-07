import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import axios from 'axios';
import { ApoyoPage } from '../apoyo.page';
@Component({
  selector: 'app-refugio',
  templateUrl: './refugio.page.html',
  styleUrls: ['./refugio.page.scss'],
})
export class RefugioPage implements OnInit {
  imagenprincial ='';
  titulo='';
  body = '';
  bloques = [];

  constructor(private router: Router  ) {

    axios.get('https://uploads.bayoli.com/cmsjuntas.php?pagina=refugio')
    .then(res => {

      this.imagenprincial= res.data.imagen_princial;
      this.titulo= res.data.titulo;
      this.body= res.data.body;
      console.log(res.data.body, );
      const i =0;
      res.data.body.forEach(element => {

        this.bloques[i]=element;

       });

    })
    .catch(err => {
      console.log(err);
    });

   }

   async getCasa(i) {




   }

  ngOnInit() {
  }

}
