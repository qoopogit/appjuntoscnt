import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { HacerPageRoutingModule } from './hacer-routing.module';
import { HacerPage } from './hacer.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HacerPageRoutingModule,HttpClientModule
  ],
  declarations: [HacerPage]
})




export class HacerPageModule {

  constructor( public httpClient: HttpClient) {

    //console.log('cargo');


  }


}
