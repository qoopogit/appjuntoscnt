import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { FolderPage } from 'src/app/folder/folder.page';
import { environment } from '../../../environments/environment';
declare var dataLayer: Array<any>;
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
  idzonas ='';

  folderPage: FolderPage;

  constructor( private route: Router) {
    axios
    .get(environment.cms + 'integral')
    .then(res => {

      this.imagenprincial= res.data.imagen_princial;
      this.titulo= res.data.titulo;
      this.body= res.data.body;
      this.idzonas= res.data.idZonas;
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

    dataLayer.push({
      'screenPath': 'Integral',
      'screenName': 'El Servicio de Protección Integral'
    });
    dataLayer.push({'event': 'appScreenView'});
  }

}
