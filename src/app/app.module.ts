import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
//import { WaitUtil } from './api/WaitUtil';
import { Service } from './api/Service';
import { Api } from './api/Api';
import { DbService } from './api/db.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyhtmlPipe } from './myhtml.pipe';
import { SQLite } from '@ionic-native/sqlite/ngx';

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
    SQLite,
    Api,
    DbService,
    //WaitUtil,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
