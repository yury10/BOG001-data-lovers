import data from './data/rickandmorty/rickandmorty.js';
export const ordenarPersonajes = (data, option) => {
  const orderAZ = data.sort(function (prev, next) {
    if (prev.name > next.name) {
      return 1;
    }
    if (prev.name < next.name) {
      return -1;
    }
  });

  if (option == "A-Z") {
    return orderAZ;
  }
  if (option == "Z-A") {
    return orderAZ.reverse();
  }
};
const Especie = {
  filtrandoByEspecie :(word) => {
    let Dato = data.results.filter(Especie => Especie.species.includes(word))
    return Dato
}
}
export default Especie;
