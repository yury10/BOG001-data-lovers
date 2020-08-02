import data from './data/rickandmorty/rickandmorty.js';
import Especie from "./data.js";
import {ordenarPersonajes} from "./data.js";

const searcher = document.getElementById("buscar especie");
searcher.addEventListener("click", PersonajesEspecie);

//console.log( data);

const datosgeneral = data.results;
console.log(datosgeneral);


//Prender y apagar vistas del HTML//
document.querySelector("#Especie").style.display = 'none';

let cambioP = document.querySelector('#vista2');
cambioP.addEventListener("click", SelectCap);
 
function SelectCap () {
    document.querySelector("#container").style.display = 'none';
    document.querySelector("#Especie").style.display = 'block';
}
document.querySelector("#container").style.display = 'block';

let cambioP1 = document.querySelector('#vista1');
cambioP1.addEventListener("click",returnInit );
 
function returnInit() {
    document.querySelector("#container").style.display = 'block';
    document.querySelector("#Especie").style.display = 'none';
}

//Imprimir datos en pantalla
const datosGeneral =  data.results.slice(0,30);

/* function mostrarPersonajes () {
    datosGeneral.forEach(function(personaje){
    let contenedorPersonaje = document.getElementById("container");
 contenedorPersonaje.innerHTML +=
 `<div class="tarjeta">
 <img src="${personaje.image}" alt="${personaje.name}"> 
 <ul>
 <li> Nombre: ${personaje.name}</li> 
 <li> Estado: ${personaje.status} </li> 
 <li> Genero: ${personaje.gender}</li> 
 <li> Especie: ${personaje.species} </li> 
 <li> Locacion: ${personaje.location.name} </li>  
 </ul> 
 </div>`
})
}
mostrarPersonajes();

const verMas = document.getElementById("btnmás");
verMas.addEventListener("click", more):*/

function PersonajesEspecie () {
    let valueFilter = searcher.value;
    let datosfilter = Especie.filtrandoByEspecie(valueFilter);
    datosfilter.forEach(function(personaje){
    let contenedorPersonaje = document.getElementById("Especie");
 contenedorPersonaje.innerHTML +=
 `<div class="tarjeta">
 <img src="${personaje.image}" alt="${personaje.name}"> 
 <ul>
 <li> Nombre: ${personaje.name}</li> 
 <li> Estado: ${personaje.status} </li> 
 <li> Genero: ${personaje.gender}</li> 
 <li> Especie: ${personaje.species} </li> 
 <li> Locacion: ${personaje.location.name} </li>  
 </ul> 
</div>`
})
}
let contenedorPersonaje = document.getElementById("container");
let ordenAlfabetico = document.querySelector(".menuOrdenar");

const mostrarPersonajes = (datosgeneral) => {
  datosgeneral.forEach((personaje) => {
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

const obtenerOrden = (q) => {
  const btnOrden = q.target.textContent;
  console.log(btnOrden);
  mostrarPersonajes(ordenarPersonajes(datosgeneral, btnOrden));
};

ordenAlfabetico.addEventListener("click", obtenerOrden);

mostrarPersonajes(datosgeneral);
