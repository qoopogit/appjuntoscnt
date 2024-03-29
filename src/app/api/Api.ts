import { Injectable } from '@angular/core';
//import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';


@Injectable()
export class Api {

  url: string = environment.servicios;

  constructor(public http: HttpClient) {
    //console.log('Carga Api Provider');
  }

  get(endpoint: string, params?: any, options?: any) {
    if (!options) {
      options = {
        headers: new HttpHeaders()
      }
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }
    //console.log(this.url + '/' + endpoint);
    return this.http.get(this.url + '/' + endpoint, options);
  }

  post(endpoint: string, body: any, options?: any) {
    return this.http.post(this.url + '/' + endpoint, body, options);
  }

  put(endpoint: string, body: any, options?: any) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  delete(endpoint: string, body: any, options?: any) {
    return this.http.post(this.url + '/' + endpoint, body, options);
  }

  patch(endpoint: string, body: any, options?: any) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

}
