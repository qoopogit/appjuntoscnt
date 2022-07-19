import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {
  titulo = '';
  titulo1 = '';
  titulo2 = '';
  texto1 = '';
  texto2 = '';
  texto3 = '';
  imagenprincial = '';
  body = '';
  constructor() {
    axios
      .get(environment.cms + 'acerca')
      .then((res) => {
        this.titulo1 = res.data.titulo1;
        this.titulo2 = res.data.titulo2;
        this.texto1 = res.data.texto1;
        this.texto2 = res.data.texto2;
        this.texto3 = res.data.texto3;

        this.titulo = res.data.titulo;
        this.body = res.data.body;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {}
}
