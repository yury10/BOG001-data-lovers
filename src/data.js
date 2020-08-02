 import data from './data/rickandmorty/rickandmorty.js';


 const Especie = {
   filtrandoByEspecie :(word) => {
     let Dato = data.results.filter(Especie => Especie.species.includes(word))
     return Dato
 }
}
export default Especie;


// estas funciones son de ejemplo

//export const example = () => {
  //return 'example';
//};

//export const anotherExample = () => {
  //return 'OMG';