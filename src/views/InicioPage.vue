<template>
  <ion-page>
    <ion-header class="header">     
      <ion-toolbar  style=" text-align: center;">  
        <img src="../assets/logotop.png" style="height: 35px;text-align: center;">..
         <ion-buttons slot="end">
          <ion-menu-button color="primary" slot="end"  menu-toggle="right" ></ion-menu-button>
        </ion-buttons>

      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" class="fondooscuro">
       


       <div class="fila">
           <div class="menu_50">               
                <img src="../assets/menu1.png" style="width:100%;text-align: center;">
           </div>
           <div class="menu_50">               
                <img src="../assets/menu2.png" style="width:100%;text-align: center;">
           </div>           
           <div class="menu_50">               
                <img src="../assets/menu3.png" style="width:100%;text-align: center;">
           </div>           
           <div class="menu_50">               
                <img src="../assets/menu4.png" style="width:100%;text-align: center;">
           </div>           
           <div class="menu_50">               
                <img src="../assets/menu5.png" style="width:100%;text-align: center;">
           </div>
           <div class="menu_50">               
                <img src="../assets/menu6.png" style="width:100%;text-align: center;">
           </div>

           
            <div class="menu_50">   
                          
                
           </div>
           <div class="menu_50">  
                       
                
           </div>


       </div>
    <ion-grid>
        <ion-row>
        <ion-col>
            <a href="/911">
                    <img src="../assets/911.png" style="width:100%;text-align: center;">
                    </a> 
        </ion-col>
        
        <ion-col>
            <a href="/ayuda">
                        <img src="../assets/ayuda.png" style="width:100%;text-align: center;">
                    </a>     
        </ion-col>
        </ion-row>
    </ion-grid> 
    
        <div id="container">
            <strong class="capitalize">{{ $route.params.id }}</strong> 
        </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

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
  background-color: #202020;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
  background-color: #202020;
}

#container a {
  text-decoration: none;
  background-color: #202020;
}
</style>
