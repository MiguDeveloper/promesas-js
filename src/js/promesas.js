const heroes = {
  capi: {
    nombre: 'Capitán América',
    poder: 'aguantar inyecciones sin morir',
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero',
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'Reacción correcta a la picadura de araña',
  },
};

// Sin Async
export const buscarHeroe = (id) => {
  const heroe = heroes[id];
  return new Promise((resolve, reject) => {
    heroe ? resolve(heroe) : reject(`No existe un héroe con id ${id}`);
  });
};

export const buscarHeroeTimeout = (id) => {
  const heroe = heroes[id];
  return new Promise((resolve, reject) => {
    if (heroe) {
      setTimeout(() => {
        resolve(heroe);
      }, 1000);
    } else {
      reject(`No existe un héroe con id ${id}`);
    }
  });
};

// Usando Async
export const buscarHeroeAsync = async (id) => {
  const heroe = heroes[id];

  if (heroe) {
    return heroe;
  } else {
    throw `No existe un héroe con id ${id}`;
  }
};

const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promesa lenta');
  }, 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promesa Media');
  }, 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promesa Rapida');
  }, 1000);
});

export { promesaLenta, promesaMedia, promesaRapida };
