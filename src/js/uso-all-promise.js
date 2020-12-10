import { saludar } from './js/componentes.js';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi1';
const heroeId2 = 'iron';
/*
buscarHeroe(heroeId1, (err, heroe1) => {
  if (err) {
    return console.log(err);
  }

  buscarHeroe(heroeId2, (err, heroe2) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
  });
});
*/

// Enfoque basado en promesas
buscarHeroe(heroeId1).then((heroe1) => {
  console.log(`Enviando a ${heroe1.nombre} a la misión`);
  buscarHeroe(heroeId2).then((heroe2) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
  });
});

// con promise.all, para que haya exito todas deben ejecutarse correctamente
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Se termino de ejecutar la promise.all');
  });
console.log('fin de programa');
