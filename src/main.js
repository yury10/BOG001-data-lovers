import data from './data/rickandmorty/rickandmorty.js';
import Especie from "./data.js";
import {ordenarPersonajes} from "./data.js";

let contenedorPersonaje = document.querySelector(".content-personajes")
console.log(typeof(contenedorPersonaje))
console.log(contenedorPersonaje)

const mostrarPersonajes = (dato) => {
    dato.forEach((personaje) => {
    contenedorPersonaje.innerHTML += 
   ` 	<div class="wrap">
   <div id="flip-container" class=tarjeta-wrap>  
      <div id="card1" class="tarjeta"> 
        <div class= "adelante card1">
          <img src = "${personaje.image}" alt = "${personaje.name}"
        </div>
        <div class="atras"> <ul class ="lista">
          <li> Nombre: ${personaje.name}</li>
          <li> Estado: ${personaje.status}</li>
          <li> Genero: ${personaje.gender}</li>
          <li> Especie: ${personaje.species}</li>
          </ul> 
        </div> 
      </div>
    
    </div>`;
  });
}; 
console.log(typeof(mostrarPersonajes))
console.log(mostrarPersonajes)

const selectFilter = document.getElementById("filter-input-species");

const datosgeneral = data.results;
mostrarPersonajes(datosgeneral.slice(0,12));

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


const formulario = document.querySelector("#searchIn");
const boton = document.querySelector("#boton");

const filtrar =() =>{
  contenedorPersonaje.innerHTML ="";
  const texto =formulario.value.toLowerCase();
  for (let personaje of datosgeneral){
    let nombre = personaje.name.toLowerCase();
    console.log(nombre)
    if (nombre.indexOf(texto) !== -1){
      contenedorPersonaje.innerHTML += `	<div class="wrap">
      <div id="flip-container" class=tarjeta-wrap>  
         <div id="card1" class="tarjeta"> 
           <div class= "adelante card1">
             <img src = "${personaje.image}" alt = "${personaje.name}"
           </div>
           <div class="atras"> <ul class ="lista">
             <li> Nombre: ${personaje.name}</li>
             <li> Estado: ${personaje.status}</li>
             <li> Genero: ${personaje.gender}</li>
             <li> Especie: ${personaje.species}</li>
             </ul> 
           </div> 
         </div>
       
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