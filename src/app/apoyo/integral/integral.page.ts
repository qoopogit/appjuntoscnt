import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import axios from 'axios';
import { FolderPage } from 'src/app/folder/folder.page';
@Component({
  selector: 'app-integral',
  templateUrl: './integral.page.html',
  styleUrls: ['./integral.page.scss'],
})

export class IntegralPage implements OnInit {
  imagenprincial ='';
  titulo='';
  body = '';
  bloques = [];
  descipcion='';

  folderPage: FolderPage;

  constructor( private route: Router) {
    axios.get('https://uploads.bayoli.com/cmsjuntas.php?pagina=integral')
    .then(res => {

      this.imagenprincial= res.data.imagen_princial;
      this.titulo= res.data.titulo;
      this.body= res.data.body;
      this.descipcion= res.data.descipcion;
     // console.log(res.data.body, );
      const i =0;
      res.data.body.forEach(element => {

        this.bloques[i]=element;

       });

    })
    .catch(err => {
      console.log(err);
    });
  }
  zonas(z)
 {
  console.log('zonas', z);
  this.route.navigate(['/zona/'+z]);


 }
  ngOnInit() {
  }

}
