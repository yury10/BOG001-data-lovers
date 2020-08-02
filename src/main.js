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

import data from './data/rickandmorty/rickandmorty.js';
import Especie from "./data.js";
import {ordenarPersonajes} from "./data.js";

var valueFilter ="h"
let searcher = document.querySelector(".select");
/*searcher.addEventListener("change", (event) => {
    valueFilter = `${event.target.value}`;
    console.log(valueFilter);
    PersonajesEspecie(valueFilter);
    });*/
    
   
/*const getFilter = (e) => {
    const btnStatus = e.target.value;
    PersonajesEspecie(btnStatus);
    console.log(btnStatus)
}
searcher.addEventListener("click", getFilter)*/

console.log(valueFilter)

;
const selectFilter = document.getElementById("buscar");


let btn2 = document.querySelector(".aa")
/*searcher.addEventListener("change",loadFilter)*/
/*function loadFilter(event) {
    
    PersonajesEspecie( event.target.value);
}*/
function PersonajesEspecie () {
    let valueFilter = selectFilter.value;
    let datosfilter = Especie.filtrandoByEspecie(valueFilter);
    console.log("pueba")
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


/*btn2.addEventListener('click',pp)*/


const datosgeneral = data.results.slice(0,10);

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
/*const verMas = document.getElementById("btnmás");
verMas.addEventListener("click", more):*/


/*PersonajesEspecie(valueFilter)*/
let contenedorPersonaje = document.getElementById("container");
let ordenAlfabetico = document.querySelector(".menuOrdenar");



const obtenerOrden = (q) => {
  const btnOrden = q.target.textContent;
  console.log(btnOrden);
  mostrarPersonajes(ordenarPersonajes(datosgeneral, btnOrden));
};

ordenAlfabetico.addEventListener("click", obtenerOrden);

mostrarPersonajes(datosgeneral);


selectFilter.addEventListener("change", () => {
  
        let valueFilter = selectFilter.value;
        let datosfilter = Especie.filtrandoByEspecie(valueFilter);
        console.log("pueba")
        return datosfilter.forEach(function(personaje){
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
    
  });
})  