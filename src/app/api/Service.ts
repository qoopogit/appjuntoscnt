import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Api } from './Api';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
//import { Storage } from '@ionic/storage';

@Injectable()
export class Service {
  token: string;
  _user: any;

  constructor(
    public api: Api,
    private http: HttpClient,
    private platform: Platform
  ) {
    console.log('Service iniciado');
  }

  getTest(dataTestReq: any, respuesta: number) {
    const opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    if (respuesta == 0) {
      return this.http
        .get(
          environment.servicios +
            'action=pregti&tid=' +
            dataTestReq.idTest +
            '&oid=' +
            dataTestReq.numeroPregunta,
          opt
        )
        .pipe(
          map(
            (res: any) => {
              return res;
            },
            (err: any) => {
              console.log('algun error...');
              console.log(err);
              return err;
            }
          )
        );
      /*
      return this.api.get('action=pregti&tid=' + dataTestReq.idTest + '&oid=' + dataTestReq.numeroPregunta, '')
        .map(resp => resp.json());
        */
    } else {
      return this.http
        .get(
          environment.servicios +
            'action=respuesta&id=' +
            dataTestReq.idTest +
            '&puntaje=' +
            dataTestReq.acumulado,
          opt
        )
        .pipe(
          map(
            (res: any) => {
              return res;
            },
            (err: any) => {
              console.log('algun error...');
              console.log(err);
              return err;
            }
          )
        );
      /*
      return this.api.get('action=respuesta&id=' + dataTestReq.idTest + '&puntaje=' + dataTestReq.acumulado, '')
      .map(resp => resp.json());
      */
    }
  }
}
