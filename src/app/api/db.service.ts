import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Contacto } from './contacto';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
//import { JUNTOSDB } from '../db/model';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private storage: SQLiteObject;
  contactsList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  //private juntosDB = JUNTOSDB;

  editContacto: BehaviorSubject<Contacto> = new BehaviorSubject(new Contacto());

  constructor(private platform: Platform, private sqlite: SQLite) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.sqlite
          .create({
            //name: this.juntosDB.name,
            name: 'juntos.db',
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
          //this.juntosDB.name,
          'juntos.db',
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
  }

  /**
   * Inicia la bdd de acuerdo al modelo
   */
  initDB() {
    this.storage.transaction((tsql) =>
      tsql.executeSql(
        'CREATE TABLE IF NOT EXISTS junt_contactos (cont_id text not null primary key,cont_nombre text,cont_numero text not null,cont_sms text)'
      )
    );
    this.storage.transaction((tsql) =>
      tsql.executeSql(
        'CREATE TABLE IF NOT EXISTS junt_test (test_id numeric(11) not null primary key,nombre_test text(100) not null)'
      )
    );
    this.storage.transaction((tsql) =>
      tsql.executeSql(
        'CREATE TABLE IF NOT EXISTS junt_opcion (opci_id numeric(11) not null unique primary key,opci_numero numeric(11) not null,opci_opciones text(80) not null,opci_puntajes text(20) not null)'
      )
    );
    this.storage.transaction((tsql) =>
      tsql.executeSql(
        'CREATE TABLE IF NOT EXISTS junt_grupo (grup_id numeric(11) not null primary key,grup_nombre text(100) not null,test_id numeric,grup_calculo text,opci_id numeric)'
      )
    );
    this.storage.transaction((tsql) =>
      tsql.executeSql(
        'CREATE TABLE IF NOT EXISTS junt_pregunta (preg_id numeric(11) not null primary key,preg_orden integer not null,preg_pregunta text(250) not null,grup_id numeric(11) not null,test_id numeric(11) not null,preg_testorde integer not null)'
      )
    );
    this.storage.transaction((tsql) =>
      tsql.executeSql(
        'CREATE TABLE IF NOT EXISTS junt_puntuacion (resp_id numeric(11) not null primary key,punt_rangini numeric(10,1) not null,punt_rangfin numeric(10,1) not null,punt_mensaje text(500) not null,grup_id numeric(11) not null,test_id numeric not null)'
      )
    );
    this.storage.transaction((tsql) =>
      tsql.executeSql(
        'CREATE TABLE IF NOT EXISTS junt_varios (vari_id numeric not null primary key,vari_nombre text,vari_descripcion text,vari_img text)'
      )
    );
    this.storage.transaction((tsql) =>
      tsql.executeSql(
        'CREATE TABLE IF NOT EXISTS junt_parametros (para_id text not null primary key,para_name text(100),para_valor text)'
      )
    );

    /*
    this.juntosDB.tables.forEach((tabla) => {
      var columns = [];
      tabla.columns.forEach((campo) => {
        columns.push(campo.name + ' ' + campo.type);
      });
      var query: string =
        'CREATE TABLE IF NOT EXISTS table_name (columns_names)';
      query = query.replace('table_name', tabla.name);
      query = query.replace('columns_names', columns.join(','));
      console.log('Query = ' + query);
      this.storage.transaction((tsql) => {
        tsql.executeSql(query);
      });
    });
    */
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
