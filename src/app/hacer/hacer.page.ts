import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CmsService } from './../cms.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hacer',
  templateUrl: './hacer.page.html',
  styleUrls: ['./hacer.page.scss'],
})
export class HacerPage implements OnInit {
  results: Observable<any>;
  titulo = '';
  imagenprincial = '';
  body = '';

  constructor(private cmsservice: CmsService, private http: HttpClient) {
    axios
      .get(environment.cms + 'hacer')
      .then((res) => {
        this.imagenprincial = res.data.imagen_princial;
        this.titulo = res.data.titulo;
        this.body = res.data.body;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {}
}
