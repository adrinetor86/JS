import preguntas from './JSONpreguntas.js';

let formulario=document.getElementById("formulario");
console.log(preguntas[0].respuestas[0].respuesta);

mostrarRespuestas();

function mostrarRespuestas(){
    let puntos

    for(let i=0;i<preguntas.length-1;i++){

        let nuevoBoton = document.createElement("button");
        nuevoBoton.innerHTML = preguntas[i].respuestas[i].respuesta;
         puntos=preguntas[i].respuestas[i].puntos


        console.log("PUNTOS: "+puntos);
        nuevoBoton.value = preguntas[i].respuestas[i].personaje;

        formulario.appendChild(nuevoBoton);
        nuevoBoton.classList.add("respuestas");

         console.log(nuevoBoton.value)


        nuevoBoton.addEventListener("click",()=>verRespuestas(nuevoBoton.value),preguntas[i].respuestas[i].puntos)
    }


}


//PUNTOS DA FALLO
function verRespuestas(personaje,puntos){

    console.log("MI PERSONAJE: "+personaje)



        let personajes= {

            COKE: 0,
            RECIO: 0,
            AMADOR: 0,
            FERMIN : 0,

      }

      personajes[personaje]++;

  console.log("PRUEBA PERSONAJE "+personajes[personaje])

}


function personajes(){

    let personajes=[



    ]

}
function mostrarPreguntas(){

    for(let i=0;i<preguntas.length;i++) {

    formulario.appendChild(document.createElement("h2")).textContent = preguntas[i].pregunta;



            formulario.appendChild(document.createElement("h4")).textContent = preguntas[i].respuestas[i].respuesta
            // formulario[0].childNodes[1].addEventListener("click", ()=>  mostrarRespuestas(i));
            //   mostrarRespuestas(i)

    }
}

