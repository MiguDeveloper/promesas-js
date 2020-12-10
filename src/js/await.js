import { buscarHeroeAsync, buscarHeroeTimeout } from './promesas';

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(buscarHeroeAsync);

export const obtenerHeroesArr = async () => {
  const heroesArr = [];
  for (const id of heroesIds) {
    const heroe = await buscarHeroeAsync(id);
    heroesArr.push(heroe);
  }

  return heroesArr;
};

/* Para casos donde tengamos un for donde se ejecute y retornan promesas
 * es mejor asignarlas de frente al arreglo y luego ejecutar un Promise.all
 */
export const obtenerHeroesArrTimeout = async () => {
  const heroesArr = [];
  for (const id of heroesIds) {
    heroesArr.push(buscarHeroeTimeout(id));
  }

  return await Promise.all(heroesArr);
  // metodo mas corto
  // return await Promise.all(heroesIds.map(buscarHeroeTimeout));
};

// MAnejo de errores cuando usamos 'await'
export const obtenerHeroeAwait = async (id) => {
  try {
    const heroe = await buscarHeroeAsync(id);
    return heroe;
  } catch (error) {
    console.error('CATCH', error);
    // como queremos que no se rompa la aplicacion entonces le mandamos un objeto
    return {
      nombre: 'Sin nombre',
      poder: 'sin poder',
    };
    // throw error; podemos enviar un error cosa que salta el 'catch' de la funcion q lo llama
  }
};

export const heroesCiclo = async () => {
  console.time('ciclo');

  for await (const heroe of heroesPromesas) {
    console.log(heroe);
  }

  /*
  const heroes = await Promise.all(heroesPromesas);
  heroes.forEach((heroe) => console.log(heroe));
  */
  console.log(heroes);
  console.timeEnd('ciclo');
};

export const heroesIfAwait = async (id) => {
  if ((await buscarHeroeAsync(id)).nombre === 'Ironman') {
    console.log('Es el mejor de todos');
  } else {
    console.log('Nada');
  }
};
