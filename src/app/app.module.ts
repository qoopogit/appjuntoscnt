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
import { MyhtmlPipe } from './myhtml.pipe';

@NgModule({
  declarations: [AppComponent, MyhtmlPipe],

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

  bootstrap: [AppComponent],
})
export class AppModule { }
