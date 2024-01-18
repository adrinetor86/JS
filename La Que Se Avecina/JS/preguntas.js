import preguntas from './JSONpreguntas.js';

let formulario=document.getElementById("formulario");
console.log(preguntas[0].respuestas[0].respuesta);

mostrarRespuestas();

function mostrarRespuestas(){

    for(let i=0;i<preguntas.length-1;i++){

        let nuevoBoton = document.createElement("button");
        nuevoBoton.innerHTML = preguntas[i].respuestas[i].respuesta;
        nuevoBoton.value = preguntas[i].respuestas[i].respuesta;
        formulario.appendChild(nuevoBoton);
        nuevoBoton.classList.add("respuestas");


    }


}

function verRespuestas(number){

}
function mostrarPreguntas(){

    for(let i=0;i<preguntas.length;i++) {

    formulario.appendChild(document.createElement("h2")).textContent = preguntas[i].pregunta;



            formulario.appendChild(document.createElement("h4")).textContent = preguntas[i].respuestas[i].respuesta
            // formulario[0].childNodes[1].addEventListener("click", ()=>  mostrarRespuestas(i));
            //   mostrarRespuestas(i)

    }
}

