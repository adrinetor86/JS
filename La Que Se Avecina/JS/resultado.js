

let formulario=document.getElementById("formulario");


let imagenesPersonajes={

    KOKE:"../IMG/COKE.png",
    AMADOR:"../IMG/AMADOR.png",
    RECIO:"../IMG/RECIO.png",
    FERMIN:"../IMG/FERMIN.png",
}

let personajeEscogido=document.createElement("h1")
let botonVolver=document.createElement("button");
// let imagenPersonaje=document.createElement("img");

botonVolver.innerHTML="Volver a realizar cuestionario ";
botonVolver.addEventListener("click",borrarStorage);


personajeEscogido.innerHTML="ERES "+localStorage.getItem("tuPersonaje");

personajeEscogido.classList.add("personajeEscogido");

formulario.appendChild(personajeEscogido);

formulario.appendChild(document.createElement("img")).src=imagenesPersonajes[localStorage.getItem("tuPersonaje")];

formulario.appendChild(botonVolver);


function borrarStorage(){

    localStorage.clear("tuPersonaje");
    window.location="./index.html"
}