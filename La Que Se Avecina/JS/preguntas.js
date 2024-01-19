import preguntas from './JSONpreguntas.js';

let formulario=document.getElementById("formulario");

let numPregunta=0;

let divRespuestas=document.createElement("div");

let imgLogo=document.createElement("img");
imgLogo.src="../IMG/LQSA.png"
imgLogo.classList.add("logo");

divRespuestas.setAttribute("id","divRespuesta")

    mostrarPregunta(numPregunta);
    function mostrarPregunta(Pregunta){

        formulario.appendChild(imgLogo)

        formulario.appendChild(document.createElement("h2")).innerHTML=preguntas[Pregunta].pregunta;

       preguntas[Pregunta].respuestas.forEach(function(element){


           let nuevoBoton=document.createElement("button")
           nuevoBoton.innerHTML=element.respuesta;
           nuevoBoton.value=element.personaje;

           divRespuestas.appendChild(nuevoBoton)

           nuevoBoton.addEventListener("click",()=>verRespuestas(nuevoBoton.value,element.puntos));

        });
        formulario.appendChild(divRespuestas);
      }



numPregunta=0;
    function verRespuestas(personaje,puntos){

        console.log("MI PERSONAJE: "+personaje)

          persona[personaje]+=puntos;

      console.log("PRUEBA PERSONAJE "+persona[personaje])

        if(numPregunta<preguntas.length-1){
            numPregunta++;
            formulario.innerHTML=""
            divRespuestas.innerHTML=""
            mostrarPregunta(numPregunta);
        }else{

            formulario.innerHTML=""
            divRespuestas.innerHTML=""
            formulario.appendChild(document.createElement("h3")).innerHTML="CARGANDO PERSONAJE..."
            formulario.appendChild(document.createElement("div")).setAttribute("class","loader")

            setTimeout(mostrarPersonaje,4000)

        }

    }

    function mostrarPersonaje(){

    let puntosMax=0;
    let personajeElegido='';
        for (const atributo in persona) {

            if(persona[atributo] > puntosMax ){
                personajeElegido=atributo;
                puntosMax=persona[atributo]
            }
        }
        localStorage.setItem("tuPersonaje",personajeElegido);
        window.location="./resultado.html"

    }
//OBJETO
let persona= {

    COKE: 0,
    RECIO: 0,
    AMADOR: 0,
    FERMIN : 0,

}


let prueba1=[];



