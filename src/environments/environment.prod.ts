//const server = 'https://appjuntos.cnt.gob.ec';
//const server = 'http://juntos-backend.cnt.gob.ec';
//const server = 'http://181.113.34.230:9966';
const server = 'https://190.152.75.32';

export const environment = {
  production: true,
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
};
