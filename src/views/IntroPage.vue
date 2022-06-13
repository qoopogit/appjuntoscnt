<template>
  <ion-page>
    <ion-content>
      
      
      <swiper @slideChange="onSlideChange" :modules="modules" :autoplay="true" :navigation="true" :keyboard="true" :pagination="true" :scrollbar="true" :zoom="true">
        <swiper-slide class="foto1"> 
            <div class="texto_verde"> junt@s <br>nos <br>accionamos</div>
        </swiper-slide>
        <swiper-slide class="foto2">  <div class="texto_verde"> ¿Sabías <br>qué? <br></div>
         <div class="texto_blanco">Si te empuja, te da cachetadas, patadas, golpes con o sin
objetos, o te arrincona e inmoviliza, es violencia física.<br>
Fuente: Nciones Unidas, 2006)</div></swiper-slide>
        <swiper-slide class="foto3">
          <div class="texto_verde"> Datos de
 <br>interés <br></div>
           <div class="texto_blanco">  6 de cada 10 mujeres en el Ecuador han vivido agún tipo de violencia durante su vida.
          <br>Fuente: (INEC, 2011) </div>

        </swiper-slide> 
             
      </swiper>    
      <div class="swiper-button2">Pedir ayuda ></div>
      <div class="logo_intro"> <img src="../assets/logotop.png" style="width:100px; "></div>
    
    </ion-content>
  </ion-page>
</template>


<script>
  import { defineComponent } from 'vue';
  import { Autoplay, Keyboard, Pagination, Navigation, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';
 

  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

 
  

  export default defineComponent({

     
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
     

      return {
        
        modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom,Navigation],
      };
    },
  });

 var items = document.getElementsByClassName("swiper-button-next");

items.innerHTML = "...";
</script>
 
<style>
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
    
    font-size: 14px;
}

.swiper-button2{
  top: 85%;
    width: 50%;
    background-color: #27BB9B;
    font-size: 14px;
    height: 30px;
    border-radius: 14px;  
     margin-left: 23vw;
    text-align: center;
    color: white;
    line-height: 14px;
    position: absolute;
    display: block;
    z-index: 100;
    padding: 10px;
}
.logo_intro{
  position: fixed;
    z-index: 1000;
    top: 20px;
    left: 20px;

}
.swiper-button-next
{
top: 80%;
    width: 50%;
    background-color: #27BB9B;
    font-size: 14px;
    height: 30px;
    border-radius: 14px;
    margin-right: 25vw;
    text-align: center;
    color: white;
    line-height: 14px;    
    z-index: 100;
}

.swiper-button-next2
{
    position: absolute;
    display: block;
top: 80%;
    width: 50%;
    background-color: #27BB9B;
    font-size: 14px;
    height: 30px;
    border-radius: 14px;
    margin-right: 25vw;
    text-align: center;
    color: white;
    line-height: 14px;
    
    z-index: 10;
}

.foto1,.foto2, .foto3
{

  width: 100vw !important;
    height: 100vh !important; 
    
    background-size: cover !important;
}
.foto1
{ 
    
    background: url(../assets/splash1.png);
        background-size: 100%, 100%;
    width: 100vw !important;
    background-position: center;
}
.foto2
{ 
    
    background: url(../assets/splash2.png);
        background-size: 100%, 100%;
    width: 100vw !important;
    background-position: center;
}
.foto3
{ 
    
    background: url(../assets/splash3.png);
        background-size: 100%, 100%;
    width: 100vw !important;
    background-position: center;
}

.texto_verde
{
  font-size: 45px;
    color: #27BB9B;
    ALIGN-ITEMS: end;
    text-align: end;
    margin-right: -20%;
    top: 58vh;
    position: absolute;
    line-height: 44px;
}
.texto_blanco{
  color: white;
    position: absolute;
    top: 70vh;
    font-size: 13px;
    width: 69%;
    text-align: right;

}
</style>