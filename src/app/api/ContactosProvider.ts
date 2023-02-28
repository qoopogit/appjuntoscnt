import { Injectable } from '@angular/core';
import { DbProvider } from '../db/DbProvider';
import { Contacto } from 'contacto.interface';

@Injectable()
export class ContactosProvider {

  private db:any;
  private regContatos:Contacto []=[];
  public listaDeContactos:Contacto [] =[];

  constructor(private BaseDeDatos:DbProvider ) {
    this.db = this.BaseDeDatos.db;
  }

  /**
     *
     * @param {type} id
     * @param {type} nombre
     * @param {type} numero
     * @param {type} sms
     * @returns {unresolved}
     */
  public insert (id, nombre, numero, sms) {
      return this.db.transaction(tsql =>{
      tsql.executeSql('INSERT INTO junt_contactos (cont_id,cont_nombre,cont_numero,cont_sms) ' +
              ' VALUES (?1,?2,?3,?4)', [id, nombre, numero, sms]);
          }, Terror =>{
            //console.log("Transaccion error:",Terror);
          }, () =>{
              //console.log("Inserción realizada");
          });

  };

  /**
     * Elimina contacto por id
     * @param {type} id
     * @returns {unresolved}
     */
  public async delete (id) {
      return this.db.transaction ( (tsql) =>{
       tsql.executeSql('DELETE FROM junt_contactos WHERE cont_id=?', [id]);
        }, Terror=>{ //console.log("Eliminar error", Terror);},
        () =>{
            //console.log(`El ${id} fue eliminado con exito`);
        });

  };

  /**
   *
   * @param {type} id
   * @param {type} nombre
   * @param {type} numero
   * @param {type} sms
   * @returns {unresolved}
   */
  public update (id, nombre, numero, sms) {
      return this.db.transaction ( (tsql) =>{
      tsql.executeSql('UPDATE junt_contactos SET cont_nombre=?,cont_numero=?,cont_sms=? ' +
              ' WHERE cont_id=?', [nombre, numero, sms, id]);
        }, Terror =>{ //console.log("Transaccion error", Terror);},
        () =>{
            //console.log("Actualizacion realizada");
        });
  };

  public findAll () {
   return new Promise ( (resolve, reject) =>{
    this.listaDeContactos = [];
    this.regContatos = [];
    this.db.transaction ( tsql =>{
        tsql.executeSql('SELECT cont_id as id,cont_nombre as displayName,cont_numero as phoneNumber,cont_sms as sms ' +
        ' FROM junt_contactos ' +
        ' ORDER BY cont_nombre asc',[], (tsql, resp) =>{

          for (let i =0; i <resp.rows.length; i++) {
              this.regContatos.push(resp.rows.item(i));
              this.listaDeContactos.push(resp.rows.item(i));
          }
          resolve(this.regContatos);
        });
      }, Terror =>{
        reject(Terror);
      }, () =>{
          //console.log(`Econtrado ${this.regContatos.length} contacto(s)`);
      } );

   });


};

  public getById (id) {
    return this.db.transaction ( tsql =>{
     tsql.executeSql('SELECT cont_id,cont_nombre,cont_numero,cont_sms ' +
            ' FROM junt_contactos  WHERE cont_id = ?', [id], (tsql,resp)=>{
                //console.log(resp);
            });
      });
  };
}
