import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})
export class DenunciaPage implements OnInit {
  titulo = '';
  imagenprincial = '';
  body = '';
  texto1 = '';
  constructor() {
    axios
      .get(environment.cms + 'denuncia')
      .then((res) => {
        this.imagenprincial = res.data.imagen_princial;
        this.titulo = res.data.titulo;
        this.body = res.data.body;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  ngOnInit() {
  }

}
