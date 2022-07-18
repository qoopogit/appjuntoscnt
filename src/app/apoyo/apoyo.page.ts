import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-apoyo',
  templateUrl: './apoyo.page.html',
  styleUrls: ['./apoyo.page.scss'],
})
export class ApoyoPage implements OnInit {
  imagenprincial = '';
  constructor() {
    axios
      .get(environment.cms + '?pagina=apoyo')
      .then((res) => {
        this.imagenprincial = res.data.imagen_princial;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {}
}
