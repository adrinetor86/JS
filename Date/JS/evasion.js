let botonNada=document.getElementsByClassName("nada");

let botonMitad=document.getElementsByClassName("Mitad");

let formulario=document.getElementsByClassName("formulario")

let divSugerencias =document.getElementById("Sugerencias");

let inputsSugerencia=document.getElementsByClassName("opciones_check")
divSugerencias.style.display="none"

let botonEnviar=document.getElementsByClassName("Enviar-Sugerencia");

let divSucesos=document.getElementById("sucesos");

botonNada[0].addEventListener("click",declararNada)

botonMitad[0].addEventListener("click",declararMitad)

botonEnviar[0].addEventListener("click",enviarSugerencias);



let titulo=document.querySelector("h1");
let sugerencias=document.createElement("input");

let arrSugerencias=[];

divSucesos.style.display="none";


let querySugerencias=document.querySelector("label .opciones_check");
function enviarSugerencias(){

    for(let i=0;i<=inputsSugerencia.length-1;i++){

        if(inputsSugerencia[i].checked){
            console.log(inputsSugerencia[i])

            arrSugerencias.push(inputsSugerencia[i].value);
        }

    }
   mostrarSugerenciasEscogidas()

}

function mostrarSugerenciasEscogidas(){
    divSugerencias.innerHTML="";

   if(arrSugerencias.length>0){
       divSugerencias.appendChild(document.createElement("h3")).innerHTML="Has escogido las siguientes sugerencias: "
           for(let j=0;j<arrSugerencias.length;j++){
               divSugerencias.appendChild(document.createElement("label")).innerHTML=arrSugerencias[j]+"<br>";
           }
   }else{
       divSugerencias.appendChild(document.createElement("label")).innerHTML="No has seleccionado nada."
   }

}
let cancion=new Audio("../Persecucion.mp3")

function declararNada(){


    //PLAY CANCION
    cancion.play();

    formulario[0].innerHTML=""
    let imagenPillado=document.createElement("img");
    imagenPillado.src="../Pillado2.png"
    imagenPillado.classList.add("imagen-pillado");
    formulario[0].appendChild(document.createElement("h2")).innerHTML="Te ha pillado hacienda,CORRE!!!"
    formulario[0].appendChild(imagenPillado);

    setTimeout(opcionesPersecucion,3000);

}

function opcionesPersecucion(){


    formulario[0].innerHTML=""

    formulario[0].appendChild(document.createElement("h2")).innerHTML="Rapido,Monta en el coche"
    formulario[0].appendChild(document.createElement("img")).classList.add("Img-Coche");
    formulario[0].appendChild(document.createElement("button")).classList.add("Entrar-Coche");

    formulario[0].childNodes[1].src="../CocheHuida.png";

    formulario[0].childNodes[2].textContent="Entrar"

    formulario[0].childNodes[2].addEventListener("click",preguntasPersecucion)


}

function preguntasPersecucion(){
    formulario[0].innerHTML=""


    //document.body.removeChild(titulo);
    titulo.innerHTML=""
    //document.body.childNodes(0).innerHTML="";
    formulario[0].appendChild(document.createElement("h2")).innerHTML="Hacia donde vas?"

    formulario[0].appendChild(document.createElement("img")).classList.add("Img-Coche");
    formulario[0].childNodes[1].src="../Driver.png";

    formulario[0].appendChild(document.createElement("button")).classList.add("Boton-Opcion");
    formulario[0].childNodes[2].textContent="A2 Direccion Barcelona"

    formulario[0].appendChild(document.createElement("button")).classList.add("Boton-Opcion");
    formulario[0].childNodes[3].textContent="A4 Direccion Cadiz"

    //Barcelona
    formulario[0].childNodes[2].addEventListener("click",Barcelona)
    //Cadiz
    formulario[0].childNodes[3].addEventListener("click",rickRoll)
}
let videoRick= document.createElement("video").classList.add="video-rick";

    //videoRick.style.src="../Rick.mp4";
    //videoRick.style.controls="true";
   // videoRick.style.type="video/mp4";
//videoRick.setAttribute("autoplay","true")
    function rickRoll(){
        formulario[0].innerHTML=""
        cancion.pause();

        formulario[0].appendChild(document.createElement("video")).classList.add="video-rick";

  formulario[0].childNodes[0].src="../Rick.mp4";
        formulario[0].childNodes[0].autoplay="true";

    }
    function Barcelona(){
    formulario[0].innerHTML=""
        divSucesos.style.display="block";


    formulario[0].appendChild(document.createElement("h3")).innerHTML="Nada mas llegar a Barcelona te han pasado las siguientes cosas: ";
    formulario[0].appendChild(divSucesos);
    formulario[0].appendChild(document.createElement("button")).classList.add("Boton-Pasaporte")

        formulario[0].childNodes[2].textContent="Coger Pasaporte Nuevo"

        formulario[0].childNodes[2].addEventListener("click",Datospasaporte)
    }

    let nombreNuevo=document.createElement('h3')

    function Datospasaporte(){
        formulario[0].innerHTML="";

        let arrDatos=['Juan ','Carlos','Pedro','Ruben','Nelson','Marcos'];

        let nombre= arrDatos[Math.floor(Math.random()* arrDatos.length)];

        nombreNuevo.innerHTML="Tu nuevo nombre es: "+nombre;

        formulario[0].appendChild(nombreNuevo)

        proximoDestino();
    }

   function proximoDestino(){

       formulario[0].appendChild(document.createElement("p")).innerHTML="Con tu nueva identidad podras pasar desapercibido por Europa hasta llegar a Rumania"
       formulario[0].appendChild(document.createElement("h3")).innerHTML="Como vas a viajar?";

       formulario[0].appendChild(document.createElement("button")).classList.add("Boton-Viaje")
       formulario[0].childNodes[3].textContent="En coche"
       formulario[0].childNodes[3].addEventListener("click",ganador)

       formulario[0].appendChild(document.createElement("button")).classList.add("Boton-Viaje")
       formulario[0].childNodes[4].textContent="En barco"
       formulario[0].childNodes[4].addEventListener("click",perdedor)

       formulario[0].appendChild(document.createElement("button")).classList.add("Boton-Viaje")
       formulario[0].childNodes[5].textContent="En avion"
       formulario[0].childNodes[5].addEventListener("click",perdedor)

   }

   function ganador(){

       //
       // formulario[0].innerHTML="";
       //
       // formulario[0].appendChild(document.createElement("h1")).innerHTML="Felicidades, has logrado escapar de la escoria!";

       formulario[0].innerHTML=""
       cancion.pause();

       formulario[0].appendChild(document.createElement("video")).classList.add="video-rick";

       formulario[0].childNodes[0].src="../EscoriaVideo.mp4";
       formulario[0].childNodes[0].autoplay="true";

   }
    function perdedor(){
        formulario[0].innerHTML="";

        formulario[0].appendChild(document.createElement("h1")).innerHTML="Desgraciadamente Hacienda te descubrio";
    }


function declararMitad(){

    sugerencias.style.value="hola"
    sugerencias.type="checkbox";
    divSugerencias.style.display="block"


    formulario[0].replaceChild(divSugerencias,botonNada[0])
    formulario[0].removeChild(botonMitad[0])

}


// let pasaporte=document.createElement("div");
//
// pasaporte.appendChild(document.createElement("input"))