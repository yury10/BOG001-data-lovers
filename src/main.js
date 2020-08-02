import data from "./data/rickandmorty/rickandmorty.js";
import { ordenarPersonajes } from "./data.js";

//console.log( data);

const datosgeneral = data.results;
console.log(datosgeneral);

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
