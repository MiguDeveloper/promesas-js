import './styles.css';

import {
  promesaLenta,
  promesaMedia,
  promesaRapida,
  buscarHeroe,
  buscarHeroeAsync,
} from './promesas';

promesaLenta.then(console.log);
promesaMedia.then(console.log);
promesaRapida.then(console.log);

// Promise.race : nos permite ejecutar todas las promesas en conjunto y
// obtener el rpta de la promesa que se ejecuta mas rapido, y si esa promesa
// retorna un error tambien saldra su error independiente de las otras
// ya que fue la que se resolvio antes
Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log);

buscarHeroe('capi2').then(console.log).catch(console.error);
buscarHeroeAsync('iron2').then(console.log).catch(console.error);
