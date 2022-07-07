import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-hombres',
  templateUrl: './hombres.page.html',
  styleUrls: ['./hombres.page.scss'],
})
export class HombresPage implements OnInit {

  titulo ='';
  imagenprincial ='';
  body ='';
  texto1='';
  constructor() {

    axios.get('https://uploads.bayoli.com/cmsjuntas.php?pagina=hombres')
    .then(res => {

      this.imagenprincial= res.data.imagen_princial;
      this.titulo= res.data.titulo;
      this.body= res.data.body;
      this.texto1= res.data.texto1;
      console.log(res.data, );
    })
    .catch(err => {
      console.log(err);
    });

   }
  ngOnInit() {
  }

}
