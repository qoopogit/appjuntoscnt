import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';

@Component({
  selector: 'app-mujeres',
  templateUrl: './mujeres.page.html',
  styleUrls: ['./mujeres.page.scss'],
})
export class MujeresPage implements OnInit {
  titulo = '';
  imagenprincial = '';
  body = '';
  constructor() {
    axios
      .get(environment.cms + 'mujeres')
      .then((res) => {
        this.imagenprincial = res.data.imagen_princial;
        this.titulo = res.data.titulo;
        this.body = res.data.body;
        //console.log(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }

  ngOnInit() {}
}
