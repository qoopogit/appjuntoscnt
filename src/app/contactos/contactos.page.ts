import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

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
      .get('https://uploads.bayoli.com/cmsjuntas.php?pagina=contactos')
      .then((res) => {
        this.imagenprincial = res.data.imagen_princial;
        this.titulo = res.data.titulo;
        this.body = res.data.body;
        console.log(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  misContactos() {
    this.route.navigate(['/miscontactos']);
  }
  ngOnInit() {}
}
