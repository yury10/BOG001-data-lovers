import data from './data/rickandmorty/rickandmorty.js';
import Especie from "./data.js";
import {ordenarPersonajes} from "./data.js";

let contenedorPersonaje = document.querySelector(".content-personajes")

const mostrarPersonajes = (dato) => {
    dato.forEach((personaje) => {
    contenedorPersonaje.innerHTML += `<div class= "tarjeta">
    <img src = "${personaje.image}" alt = "${personaje.name}"</div>
    <ul class ="lista">
    <li> Nombre: ${personaje.name}</li>
    <li> Estado: ${personaje.status}</li>
    <li> Genero: ${personaje.gender}</li>
    <li> Especie: ${personaje.species}</li>
    </ul>
    </div>`;
  });
}; 

const selectFilter = document.getElementById("filter-input-species");

const datosgeneral = data.results;
mostrarPersonajes(datosgeneral.slice(0,10));

let ordenAlfabetico = document.querySelector(".filter-input-order")

const obtenerOrden = (q) => {
  const btnOrden = q.target.value;
  deleted();
  mostrarPersonajes(ordenarPersonajes(datosgeneral, btnOrden));
};

ordenAlfabetico.addEventListener("click", obtenerOrden);

function deleted() {
    contenedorPersonaje.innerHTML = "";
  } 
selectFilter.addEventListener("change", () => {
  
    let valueFilter = selectFilter.value;
    let datosfilter = Especie.filtrandoByEspecie(valueFilter);
    console.log("pueba")
    console.log(valueFilter)
    console.log(datosfilter)
    deleted();
    mostrarPersonajes(datosfilter);
})  
/*menu
function myFunction() {
  var x = document.getElementById("navegador");
  if (x.className === "menuNav") {
    x.className += " responsive";
  } else {
    x.className = "menuNav";
  }
}*/

const formulario = document.querySelector("#searchIn");
const boton = document.querySelector("#boton");

const filtrar =() =>{
  contenedorPersonaje.innerHTML ="";
  const texto =formulario.value.toLowerCase();
  for (let personaje of datosgeneral){
    let nombre = personaje.name.toLowerCase();
    console.log(nombre)
    if (nombre.indexOf(texto) !== -1){
      contenedorPersonaje.innerHTML += `<div class= "tarjeta">
    <img src = "${personaje.image}" alt = "${personaje.name}"</div>
    <ul class ="lista">
    <li> Nombre: ${personaje.name}</li>
    <li> Estado: ${personaje.status}</li>
    <li> Genero: ${personaje.gender}</li>
    <li> Especie: ${personaje.species}</li>
    </ul>
    </div>`;

    }
  }
  if (contenedorPersonaje.innerHTML ===''){
    contenedorPersonaje.innerHTML +=`
    <ul class ="lista">

    <li> Personaje no encontrado</li>
    </ul>`
  } 
}
boton.addEventListener("click", filtrar)
formulario.addEventListener('keyup',filtrar)