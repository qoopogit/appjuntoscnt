import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {
  titulo ='';
  imagenprincial ='';
  body ='';
  texto1='';
  constructor() {

    axios.get('https://uploads.bayoli.com/cmsjuntas.php?pagina=amigos')
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
