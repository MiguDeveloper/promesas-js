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

export const buscarHeroe = (id, callback) => {
  const heroe = heroes[id]; // notacion de corchete
  if (heroe) {
    callback(null, heroe);
  } else {
    callback(`El Id: ${id} de heroe no existe`);
  }
};
