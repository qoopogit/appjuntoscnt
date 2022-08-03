// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//const server = 'https://appjuntos.cnt.gob.ec';
//const server = 'http://juntos-backend.cnt.gob.ec';
const server = 'http://181.113.34.230:9966';

export const environment = {
  production: false,
  servicios: server + '/app/otro.php?',
  cms: server + '/cms/index.php?view=api&tabla=',
  socialShareOption: [
    {
        title: 'Whatsapp',
        logo: 'assets/socialShare/whatsap.png',
        shareType: 'shareViaWhatsApp'
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
      title: 'Instagram',
      logo: 'assets/socialShare/Instagram-circle.png',
      shareType: 'shareViaInstagram',
    },
    {
      title: 'Email',
      logo: 'assets/socialShare/mail.png',
      shareType: 'viaEmail',
    },
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
