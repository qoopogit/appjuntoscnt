import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.page.html',
  styleUrls: ['./zonas.page.scss'],
})
export class ZonasPage implements OnInit {
  imagenprincial ='';
  titulo='';
  body = '';
  zona = '';
  descipcion='';
  id='';
  public listId: number;
  public currentList: any = {};

  constructor(private  route: ActivatedRoute) {

      this.listId =  + parseFloat(this.route.snapshot.paramMap.get('id'))   ;
      console.log( this.listId);

        axios
        .get(environment.cms + 'zona&id='+this.listId)
        .then(res => {

          this.zona= res.data.zona;
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
