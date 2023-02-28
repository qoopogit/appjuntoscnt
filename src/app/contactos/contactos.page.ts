import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  imagenprincial = '';
  titulo = '';
  body = '';

  constructor(private route: Router) {
    axios
      .get(environment.cms + 'contactos')
      .then((res) => {
        this.titulo = res.data.titulo;
        this.body = res.data.body;
        //console.log(res.data.body);
      })
      .catch((err) => {
        //console.log(err);
      });
  }

  misContactos() {
    this.route.navigate(['/miscontactos']);
  }
  ngOnInit() {}
}
