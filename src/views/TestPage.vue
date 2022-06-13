<template>
  <ion-page  class="acerca_fondo">
    <ion-header :translucent="true"> 
      <ion-toolbar style=" text-align: center;">  
        <img src="../assets/logotop.png" style="height: 35px;text-align: center;">
         <ion-buttons slot="end">
          <ion-menu-button color="primary" slot="end"  menu-toggle="right" ></ion-menu-button>
        </ion-buttons>

      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true"> 
    <div id="container">  
  
</div>
    <div class="actions">
 <div class="botn"><a href="/911/"><img src="../assets/911.png" style="height: 35px;text-align: center;"></a></div>
  <div class="botn"><a href="/911/"><img src="../assets/ayuda.png" style="height: 35px;text-align: center;"></a></div>
    </div>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage,  IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage, 
    IonToolbar
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.header{
  background-color:#2C2C2C;
}
.filabanner{
    
}

ion-content{
    --background: #fff url('../assets/acerca.png') no-repeat center center / cover;
}
.titulo{
  color: #fff;
   font-family: 'RobotoCondensed-BoldItalic'; 
   font-size: xx-large;
}
.filabootom{
       color: white;
    align-items: stretch;
    padding: 8vw; 
    align-content: start;
    padding-top: 0vh;
}
.texto{
  color: #fff;
  font-family: 'Uni_Sans';
  font-size: 13px;
}
.filatop{
  height: 50vh;
    text-align: right;
    color: white;
    align-items: stretch;
    padding: 8vw;
    display: grid;
    align-content: end;
    padding-bottom: 10vh;

}
#container strong {
  font-size: 20px;
  line-height: 26px;
}
.acerca_fondo
{ 
    
    background: url(../assets/acerca.png);
        background-size: 100%, 100%;
    width: 100vw !important;
    background-position: center;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
