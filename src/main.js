let contenedorPersonaje = document.getElementById("content-personajes");
const mostrarPersonajes = (dato) => {
    dato.forEach((personaje) => {
    contenedorPersonaje.innerHTML += `<div class= "tarjeta">
    <img src = "${personaje.image}" alt = "${personaje.name}"</div>
    <ul>
    <li> Nombre: ${personaje.name}</li>
    <li> Estado: ${personaje.status}</li>
    <li> Genero: ${personaje.gender}</li>
    <li> Especie: ${personaje.species}</li>
    </ul>
    </div>`;
  });
}; 

let contenedor2= document.getElementById("content-personajes")
const mostrar2 = (datosgeneral) => {
    datosgeneral.forEach((personaje) => {
    contenedor2.innerHTML += `<div class= "tarjeta">
    <img src = "${personaje.image}" alt = "${personaje.name}"</div>
    <ul>
    <li> Nombre: ${personaje.name}</li>
    <li> Estado: ${personaje.status}</li>
    <li> Genero: ${personaje.gender}</li>
    <li> Especie: ${personaje.species}</li>
    </ul>
    </div>`;
  });
};

import data from './data/rickandmorty/rickandmorty.js';
import Especie from "./data.js";
import {ordenarPersonajes} from "./data.js";

const selectFilter = document.getElementById("filter-input-species");

const datosgeneral = data.results.slice(0,10);
mostrarPersonajes(datosgeneral);


let ordenAlfabetico = document.querySelector("filter-input-order");



const obtenerOrden = (q) => {
  const btnOrden = q.target.textContent;
  console.log(btnOrden);
  mostrarPersonajes(ordenarPersonajes(datosgeneral, btnOrden));
};

/*ordenAlfabetico.addEventListener("click", obtenerOrden);*/

function deleted() {
    contenedor2.innerHTML = "";
  } 
selectFilter.addEventListener("change", () => {
  
    let valueFilter = selectFilter.value;
    let datosfilter = Especie.filtrandoByEspecie(valueFilter);
    console.log("pueba")
    console.log(valueFilter)
    console.log(datosfilter)
    deleted();
    mostrar2(datosfilter);
})  
