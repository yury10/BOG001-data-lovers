import data from './data/rickandmorty/rickandmorty.js';



const datosgeneral =  data.results;

function mostrarPersonajes () {
    datosgeneral.forEach(function(personaje){
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