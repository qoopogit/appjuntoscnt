import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
//import { WaitUtil } from './api/WaitUtil';
import { Service } from './api/Service';
import { Api } from './api/Api';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
<<<<<<< HEAD
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Service,
    Api,
    //WaitUtil,
  ],
=======
  imports: [BrowserModule,
    HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
>>>>>>> 20e8a374d23ec4313a57a33b4d81f118374af0c8
  bootstrap: [AppComponent],
})
export class AppModule {}
