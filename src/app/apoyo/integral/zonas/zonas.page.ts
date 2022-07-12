import { Component, OnInit } from '@angular/core';

import axios from 'axios';
@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.page.html',
  styleUrls: ['./zonas.page.scss'],
})
export class ZonasPage implements OnInit {
  imagenprincial ='';
  titulo='';
  body = '';
  bloques = [];
  descipcion='';
  constructor() {

        axios.get('https://uploads.bayoli.com/cmsjuntas.php?pagina=zona')
        .then(res => {

          this.imagenprincial= res.data.imagen_princial;
          this.titulo= res.data.titulo;
          this.body= res.data.body;
          this.descipcion= res.data.descipcion;
        })
        .catch(err => {
          console.log(err);
        });
   }

  ngOnInit() {
  }

}
