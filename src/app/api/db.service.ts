import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Contacto } from './contacto';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { JUNTOSDB } from '../db/model';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private storage: SQLiteObject;
  contactsList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private juntosDB = JUNTOSDB;

  editContacto: BehaviorSubject<Contacto> = new BehaviorSubject(new Contacto());

  constructor(private platform: Platform, private sqlite: SQLite) {
    //console.log('iniciando db service...');

    if (this.sqlite === null) {
      //console.log('Viene nulo el sqlite');
    }

    this.platform.ready().then(() => {
      //console.log('platform ready');
      if (this.platform.is('cordova')) {
        this.sqlite
          .create({
            name: this.juntosDB.name,
            location: 'default',
          })
          .then((db: SQLiteObject) => {
            this.storage = db;
            console.warn('Se encuentra en un movil SqlLite');
            //this.getFakeData();
            this.initDB();
            this.loadContactos();
          });
      } else {
        console.warn('Se encuentra en un pc WebSQL');
        this.storage = (<any>window).openDatabase(
          this.juntosDB.name,
          '1.0',
          'database',
          1
        );
        this.initDB();
        this.loadContactos();
      }
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchContactos(): Observable<Contacto[]> {
    return this.contactsList.asObservable();
  }

  fetchEditContact(): Observable<Contacto> {
    return this.editContacto.asObservable();
    /*
    return new Observable((observer) => {
      observer.next(this.editContacto);
      return {
        unsubscribe() {
          //console.log('unsuscrito');
        },
      };
    });
    */
  }

  /**
   * Inicia la bdd de acuerdo al modelo
   */
  initDB() {
    this.juntosDB.tables.forEach((tabla) => {
      var columns = [];
      tabla.columns.forEach((campo) => {
        columns.push(campo.name + ' ' + campo.type);
      });
     var tabla = tabla.name;
      var query =
        'CREATE TABLE IF NOT EXISTS  ? (' +
        columns.join(',') +
        ')';
      ////console.log('CREATE ::: ' + query);

      this.storage.transaction((tsql) => {
        tsql.executeSql(
          query,
          [tabla],
          (resp) => {
            //console.log(resp);
          },
          (error) => {
            //console.log(error);
          }
        );
        //console.log('Table ' + tabla.name + ' initialized');
      });
    });
  }

  /**
   * Devuelve una lista de contactos
   */
  loadContactos() {
    //console.log('Get contactos...');
    //console.log(this.storage);

    if (this.storage) {
      return this.storage.transaction((tsql) => {
        tsql.executeSql(
          'SELECT * FROM junt_contactos',
          [],
          (tsql, res) => {
            //console.log('Carga ok de contactos....');
            //console.log('res=>' + res);
            //console.log('records size=' + res.rows.length);
            let items: Contacto[] = [];
            //this.lista=[];
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                items.push({
                  id: res.rows.item(i).cont_id,
                  name: res.rows.item(i).cont_nombre,
                  number: res.rows.item(i).cont_numero,
                  sms: res.rows.item(i).cont_sms,
                });
              }
            }
            this.contactsList.next(items);
            /*//console.log('Lista=>');
            //console.log(this.lista);*/
          },
          (error) => {
            //console.log(error);
            return error;
          }
        );
      });
    }
  }

  /**
   * Agrega un nuevo contacto
   */
  public addContacto(id, nombre, numero, sms) {
    let data = [id, nombre, numero, sms];
    return this.storage.transaction((tsql) => {
      tsql.executeSql(
        'INSERT INTO junt_contactos (cont_id,cont_nombre,cont_numero,cont_sms)  VALUES (?1,?2,?3,?4)',
        data,
        (resp) => {
          //console.log(resp);
          this.loadContactos();
          return resp;
        },
        (error) => {
          //console.log(error);
          this.loadContactos();
          return error;
        }
      );
    });
  }

  // Get single object
  async getContacto(id): Promise<Contacto> {
    return this.storage.transaction((tsql) => {
      //console.log('consultado contacto con id=' + id);
      tsql.executeSql(
        'SELECT * FROM junt_contactos WHERE cont_id = ?',
        [id],
        (tsql, res) => {
          //console.log('Resultado encontrado ');
          //console.log('res=>' + res);
          //console.log('records size=' + res.rows.length);
          var returnData: Contacto = {
            id: res.rows.item(0).cont_id,
            name: res.rows.item(0).cont_nombre,
            number: res.rows.item(0).cont_numero,
            sms: res.rows.item(0).cont_sms,
          };
          this.editContacto.next(returnData);
          return returnData;
        },
        (error) => {
          //console.log('Error al conseguir contacto:' + error);
          this.loadContactos();
          return error;
        }
      );
    });
  }
  // Update
  updateContacto(id, item: Contacto) {
    let data = [item.name, item.number, item.sms, id];

    return this.storage.transaction((tsql) => {
      tsql.executeSql(
        'UPDATE junt_contactos SET cont_nombre = ?, cont_numero = ?, cont_sms = ? WHERE cont_id = ?',
        data,
        (var1, resp) => {
          //console.log(resp);
          this.loadContactos();
          return resp;
        },
        (error) => {
          //console.log(error);
          this.loadContactos();
          return error;
        }
      );
    });
  }

  // Delete
  deleteContacto(id) {
    //console.log('Eliminando registro ' + id);
    return this.storage.transaction((tsql) => {
      tsql.executeSql(
        'DELETE FROM junt_contactos WHERE cont_id = ?',
        [id],
        (resp) => {
          //console.log('Eliminado registro ' + resp);
          this.loadContactos();
          return resp;
        },
        (error) => {
          let dataResponse = JSON.parse(JSON.stringify(error));
          //console.log('Error stringfy ' + dataResponse.json);
          //console.log('Error al eliminar ' + error);
          this.loadContactos();
          return error;
        }
      );
    });
  }
}
