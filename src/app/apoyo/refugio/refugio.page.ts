import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

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
    axios
    .get(environment.cms + 'refugio')
    .then(res => {

      this.imagenprincial= res.data.imagen_princial;
      this.titulo= res.data.titulo;
      this.body= res.data.body;
    })
    .catch(err => {
      console.log(err);
    });

   }



  ngOnInit() {
  }

}
