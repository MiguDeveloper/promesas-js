import {
  heroesCiclo,
  heroesIfAwait,
  obtenerHeroeAwait,
  obtenerHeroesArr,
  obtenerHeroesArrTimeout,
} from './js/await';

obtenerHeroesArr().then(console.table);
console.time('await');
obtenerHeroesArrTimeout().then((heroes) => {
  console.table(heroes);
  console.timeEnd('await');
});

console.time('error-await');
obtenerHeroeAwait('capi2')
  .then((heroe) => {
    console.log(heroe);
    console.timeEnd('error-await');
  })
  .catch(console.warn);

heroesCiclo();

heroesIfAwait('iron');
