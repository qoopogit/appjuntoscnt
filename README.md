# APP JUNT@S
 npm install swiper


# Compilar para Android

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



## Contactos
Para agregar la funcionaldiad de los contactos, despues de compilar el proyecto android, en la calse MainaCtivity

agregar el siguiente codigo en el metodo onCreate

<code>
// Initializes the Bridge
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  // Additional plugins you've installed go here
  // Ex: add(TotallyAwesomePlugin.class);
  add(Contacts.class);
}});
</code>

importar correctamente
<code>
import ch.byrds.capacitor.contacts.Contacts;
</code>



<code>
package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import ch.byrds.capacitor.contacts.Contacts;

public class MainActivity extends BridgeActivity {

  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(ch.byrds.capacitor.contacts.Contacts.class);
    }});
  }
}

</code>
