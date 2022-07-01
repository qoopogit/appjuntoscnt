import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  AlertController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { Service } from '../api/Service';

@Component({
  selector: 'app-test-soy-violento',
  templateUrl: './test-soy-violento.page.html',
  styleUrls: ['./test-soy-violento.page.scss'],
})
export class TestSoyViolentoPage implements OnInit {

  testTile:string="¿SOY VIOLENTO?";

  _preguntas: any[] = [];
  s_opciones: any[] = [];
  pregunta = '';
  btnAccion = '';
  estadoRespuesta = true;
  qnumber: string = '0';
  qorden: string = '1';
  qsuma: string = '0';
  dchange: string = '0';
  idx: number = 0;
  bandResp: number = 0;
  mensaje: string = '';

  test: {
    idTest: string;
    numeroPregunta: number;
    acumulado: number;
  } = {
    idTest: '2',
    numeroPregunta: 1,
    acumulado: 0,
  };

  constructor(
    public service: Service,
    private route: Router,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {
    console.log('Entro a ngOnInit Estoy sufriendo Mobbing');
    //this.getPregunta();
  }

  ionViewDidEnter() {
    console.log('Entro a ionViewDidEnter Estoy sufriendo Mobbing');
    this.getPregunta();
  }

  async getPregunta() {
    if (this.estadoRespuesta) {
      this.mensaje = '';
      this.idx = parseInt(this.qnumber) + 1;
      console.log('pregunta id=' + this.idx);
      this.qsuma = (parseInt(this.qsuma) + parseInt(this.dchange)).toString();
      var i, j;

      let loader = await this.loadingCtrl.create({
        spinner: 'circles',
        message: 'Cargando el test, espere por favor ......',
      });

      loader.present();

      this.test.numeroPregunta = this.idx;
      this.test.acumulado = parseInt(this.qsuma);
      if (this.idx > parseInt(this.qorden)) {
        this.bandResp = 1;
      }

      this.service.getTest(this.test, this.bandResp).subscribe(
        (data) => {
          let dataResponse = JSON.parse(JSON.stringify(data));
          console.log('response  ' + dataResponse.json);
          console.log(JSON.stringify(data));
          this.estadoRespuesta = false;
          var result = data;
          for (i in result) {
            if (this.idx <= parseInt(this.qorden)) {
              var opciones = result[i].opci_opciones.split('|');
              var puntuaciones = result[i].opci_puntajes.split('|');
              this.pregunta =
                result[i].preg_testorde + '.- ' + result[i].preg_pregunta;
              var botones = [];
              this.s_opciones = [];
              var cont = 0;
              for (j in opciones) {
                var obj = {
                  id: 'q' + cont,
                  valor: puntuaciones[cont],
                  opcion: opciones[j],
                };
                botones.push(obj);
                cont++;
              }
              this.qnumber = result[i].preg_testorde;
              this.qsuma = this.qsuma;
              this.qorden = result[i].contador;
              this.btnAccion = 'SIGUIENTE';
              this.s_opciones = botones;
            } else {
              /*Fin del test*/
              this.pregunta =
                'Ha finalizado el test, su puntuación es de ' +
                this.qsuma +
                ' puntos, como conclusión usted:';
              console.log('punt mensaje=' + result[i].punt_mensaje);
              this.mensaje = result[i].punt_mensaje;
              this.btnAccion = 'FINALIZAR';
              this.estadoRespuesta = true;
              this.qnumber = '0';
              this.qsuma = '0';
              this.qorden = '1';
              this.s_opciones = [];
              this.idx = 0;
              this.bandResp = 0;
            }
          }
          loader.dismiss();
        },
        (err) => {
          console.log('Traer data test ERROR:' + err.toString());
          console.log(JSON.stringify(err));
          loader.dismiss();
        }
      );
    } else {
      console.log('Respuesta no contestada');
      let alert = await this.alertCtrl.create({
        header: 'Notificación',
        message: 'Debe seleccionar una respuesta para continuar.',
        buttons: ['OK'],
      });
      alert.present();
    }
  }

  guardarRespuesta(qrespuesta) {
    console.log('qrespuesta: ' + qrespuesta);
    this.dchange = qrespuesta;
    this.estadoRespuesta = true;
  }

  async showAlertComoUsar() {
    const alert = await this.alertCtrl.create({
      header: 'Cómo usar',
      message:
        'Seleccione la opción que corresponda a su situación. Presionando sobre el botón SIGUIENTE continue hasta finalizar, una vez concluido su test podrá ver su resultado.',
      buttons: [
        {
          text: 'Aceptar',
        },
      ],
    });
    alert.present();
  }
}
