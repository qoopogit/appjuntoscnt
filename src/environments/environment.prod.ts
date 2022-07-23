//const server = 'https://appjuntos.cnt.gob.ec';
//const server = 'http://juntos-backend.cnt.gob.ec';
const server = 'http://181.113.34.230:9966';

export const environment = {
  production: true,
  servicios: server + '/app/otro.php?',
  cms: server+'/cms/index.php?view=api&tabla=',
};
