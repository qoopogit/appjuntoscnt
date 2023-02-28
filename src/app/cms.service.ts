import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//mport { Http, RequestOptions, URLSearchParams } from '@angular/http';
import axios from 'axios';
// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  var = 'var',
  data = 'data',
}

@Injectable({
  providedIn: 'root'
})
export class CmsService   {
  totalAngularPackages;
  url = 'https://uploads.bayoli.com/cmsjuntas.php';
  apiKey = '';
  titulo ='';
  imagenprincial ='';
  body ='';
  results=  Observable<any>;

  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
    constructor(private http: HttpClient) { }

  /**
  * Get data from the OmdbApi
  * map the result to return only the results that we need
  *
  * @param {string} title Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */



   searchData ( )  {


      axios.get('https://uploads.bayoli.com/cmsjuntas.php')
    .then(res => {

      this.imagenprincial= res.data.imagen_princial;
      this.titulo= res.data.titulo;
      this.body= res.data.body;
      //console.log(res.data, );
      return   res.data.body ;
      //console.log( this.body );
    })
    .catch(err => {
      //console.log(err);
    });



  }
  /**
  * Get the detailed information for an ID using the "i" parameter
  *
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }


}
