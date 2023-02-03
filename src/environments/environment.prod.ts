//const server = 'https://appjuntos.cnt.gob.ec';
const server = 'https://juntas-backend.cnt.gob.ec';
//const server = 'http://181.113.34.230:9966';
//const server = 'https://190.152.75.32';
//const server2 = 'https://juntas1.dimater.com/index.php';

export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: 'AIzaSyCFvfHFFos8bvNQiG4SXGsKTmO4Ikecm7I',
    authDomain: 'juntas-a836b.firebaseapp.com',
    projectId: 'juntas-a836b',
    storageBucket: 'juntas-a836b.appspot.com',
    messagingSenderId: '670364233295',
    appId: '1:670364233295:web:8d552be99fd3d118ae843a',
    measurementId: 'G-8PP4XCG0CV'
  },
  socialShareOption: [
    {
      title: 'Whatsapp',
      logo: 'assets/socialShare/whatsap.png',
      shareType: 'shareViaWhatsApp',
    },
    {
      title: 'Facebook',
      logo: 'assets/socialShare/meta.png',
      shareType: 'shareViaFacebook',
    },
    {
      title: 'Twitter',
      logo: 'assets/socialShare/twitter.png',
      shareType: 'shareViaTwitter',
    },
    {
      title: 'Email',
      logo: 'assets/socialShare/mail.png',
      shareType: 'viaEmail',
    },
  ],
  servicios: server + '/app/otro.php?',
  cms: server + '/cms/index.php?view=api&tabla=',
 //cms: server2 + '?view=api&tabla=',
};
