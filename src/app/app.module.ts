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
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { SocialShareComponent } from './components/social-share/social-share.component';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing';
import { TestimoniosPage } from './testimonios/testimonios.page';


@NgModule({
  declarations: [AppComponent, MyhtmlPipe, SocialShareComponent],
  entryComponents: [SocialShareComponent],
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
    SMS,
    Geolocation,
    TestimoniosPage,

    //WaitUtil,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
