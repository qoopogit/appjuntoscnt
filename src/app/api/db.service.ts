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
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.sqlite
          .create({
            name: this.juntosDB.name,
            location: 'default',
          })
          .then((db: SQLiteObject) => {
            this.storage = db;
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
      var query =
        //'CREATE TABLE IF NOT EXISTS  ? (' +
        'CREATE TABLE IF NOT EXISTS  '+ tabla.name+' (' +
        columns.join(',') +
        ')';

      this.storage.transaction((tsql) => {
        tsql.executeSql(
          query,
          //[tabla.name],
          [],
          (resp) => {

          },
          (error) => {
            
          }
        );        
      });
    });
  }

  /**
   * Devuelve una lista de contactos
   */
  loadContactos() {
    if (this.storage) {
      return this.storage.transaction((tsql) => {
        tsql.executeSql(
          'SELECT * FROM junt_contactos',
          [],
          (tsql, res) => {
            let items: Contacto[] = [];

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
          },
          (error) => {
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
          this.loadContactos();
          return resp;
        },
        (error) => {
          this.loadContactos();
          return error;
        }
      );
    });
  }

  // Get single object
  async getContacto(id): Promise<Contacto> {
    return this.storage.transaction((tsql) => {
      tsql.executeSql(
        'SELECT * FROM junt_contactos WHERE cont_id = ?',
        [id],
        (tsql, res) => {
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
          this.loadContactos();
          return resp;
        },
        (error) => {
          this.loadContactos();
          return error;
        }
      );
    });
  }

  // Delete
  deleteContacto(id) {
    return this.storage.transaction((tsql) => {
      tsql.executeSql(
        'DELETE FROM junt_contactos WHERE cont_id = ?',
        [id],
        (resp) => {
          this.loadContactos();
          return resp;
        },
        (error) => {
          let dataResponse = JSON.parse(JSON.stringify(error));
          this.loadContactos();
          return error;
        }
      );
    });
  }
}
