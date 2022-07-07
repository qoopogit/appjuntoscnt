import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-apoyo',
  templateUrl: './apoyo.page.html',
  styleUrls: ['./apoyo.page.scss'],
})
export class ApoyoPage implements OnInit {

  imagenprincial ='';
  constructor(  ) {

    axios.get('https://uploads.bayoli.com/cmsjuntas.php?pagina=apoyo')
    .then(res => {

      this.imagenprincial= res.data.imagen_princial;
      console.log(res.data, );
    })
    .catch(err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
