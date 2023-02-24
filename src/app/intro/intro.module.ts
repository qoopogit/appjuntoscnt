import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroPageRoutingModule } from './intro-routing.module';
import { SwiperModule } from 'swiper/angular';
import { Component } from '@angular/core';
import { IntroPage } from './intro.page';
import SwiperCore, { Autoplay, Keyboard, Pagination,Navigation, Scrollbar, Zoom, Swiper } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar,   Zoom, Navigation]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroPageRoutingModule,
    SwiperModule
  ],
  declarations: [IntroPage]
})


export class IntroPageModule {}
