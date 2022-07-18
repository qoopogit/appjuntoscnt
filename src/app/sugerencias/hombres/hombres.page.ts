import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';

@Component({
  selector: 'app-hombres',
  templateUrl: './hombres.page.html',
  styleUrls: ['./hombres.page.scss'],
})
export class HombresPage implements OnInit {
  titulo = '';
  imagenprincial = '';
  body = '';
  texto1 = '';
  constructor() {
    axios
      .get(environment.cms + '?pagina=hombres')
      .then((res) => {
        this.imagenprincial = res.data.imagen_princial;
        this.titulo = res.data.titulo;
        this.body = res.data.body;
        this.texto1 = res.data.texto1;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  ngOnInit() {}
}
