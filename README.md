#APP JUNT@S
 npm install swiper


#Compilar para Android

Agregar en el archivo AndroidManifest.xml la siguiente etiqueta en el tag de applicacion

 android:usesCleartextTraffic="true"

En el mismo archivo agregar los siguientes permisos:

  <uses-permission android:name="android.permission.SEND_SMS" />


En el archivo capacitor.config.json agregar:

 "server": {
    "allowNavigation": [
      "http://181.113.34.230:9966/*"
    ]
  }


... donde se especifican las urls a las que debe tener permiso la app


Modificacion
