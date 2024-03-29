import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SendSmsPageRoutingModule } from './send-sms-routing.module';
import { SendSmsPage } from './send-sms.page';
//import { SMS } from '@awesome-cordova-plugins/sms/ngx';
//import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendSmsPageRoutingModule,
    //SMS,
    //Geolocation,
  ],
  declarations: [SendSmsPage],
})
export class SendSmsPageModule {}
