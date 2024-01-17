let addJugador=document.getElementsByClassName("addJugador");
let botonAñadir=document.getElementById("nuevoJugador");
let botonIniciar=document.getElementById("iniciaJuego");
let botonMusica=document.getElementById("ponMusica");
let resumen=document.getElementsByClassName("resumen");
let bloqueAñadirJugador=document.createDocumentFragment();
let botonEnviar=document.createElement("button");
let parrafo=document.createElement("p");
let ganador=document.createElement("p");
let arrJugadores=[];
let jugadorA;
let jugadorB;


class Jugador{
    nombre;
    edad;
    nivel;


    constructor(nombre,edad,nivel){
        this.nombre=nombre;
        this.edad=edad;
        this.nivel=nivel;
    }

}




//INCLUSION AUTOMATICA DE JUGADORES
let jugador=new Jugador("Adrian",19,2);
arrJugadores.push(jugador);

jugador=new Jugador("Paco",20,2);
arrJugadores.push(jugador);



botonAñadir.addEventListener("click",añadirNuevosJugadores)
botonEnviar.addEventListener("click",meterJugador);

botonIniciar.addEventListener("click",iniciarPartida)
let miCancion = new Audio(getRutaCancion());

miCancion.loop="true";
botonMusica.addEventListener("click", function(){
    
    document.body.classList.toggle("body");
   if(!miCancion.classList.contains("audio")){
    miCancion.classList.add("audio");

    miCancion.play();
    
   }else{
    miCancion.classList.remove("audio");
    miCancion.pause();
   }
   
   
})
function getRutaCancion() {
    const mapaCanciones = {
     0: 'Ave.mp3',
     1: 'xocas.mp3',
     2: 'Sera.mp3',
  
};
const numAleatorio = Math.floor(Math.random() * Object.keys(mapaCanciones).length);
  
  return mapaCanciones[numAleatorio];
}
function añadirNuevosJugadores(){

    botonIniciar.disabled=true;
    botonAñadir.style.display="none";
    addJugador[0].style.display="flex";
    addJugador[0].classList.add("divAñadir")

   //CREAMOS INPUTS PARA INCLUIR LOS DATOS Y LE ASIGNAMOS UN ID
    let nombre=document.createElement("input")
    nombre.setAttribute("id", "nombreID");

   
    let edad=document.createElement("input");
    edad.setAttribute("id", "edadID");


    let nivel=document.createElement("input");
    nivel.setAttribute("id", "nivelID");
   
    
        nombre.type='text';
        nombre.placeholder="Nombre"
    
        edad.type='number';
        edad.placeholder="Edad"
     
        nivel.type='text';
        nivel.placeholder="Nivel"

        botonEnviar.type='submit';
        botonEnviar.innerHTML="Enviar"

    //METEMOS LOS DATOS EN EL FRAGMENTO       
    for(let i=0;i<1;i++){
        if(i==0) {
        
            bloqueAñadirJugador.appendChild(nombre)
            bloqueAñadirJugador.appendChild(edad)
            bloqueAñadirJugador.appendChild(nivel)
            bloqueAñadirJugador.appendChild(botonEnviar)

            addJugador[0].replaceChildren(bloqueAñadirJugador);
        }else{
            addJugador[0].appendChild(bloqueAñadirJugador);
        }
    }

    }


    

function meterJugador(){
   
    parrafo.innerHTML="Faltan Datos";
    let valorNombre=document.getElementById("nombreID").value;
    let valorEdad= document.getElementById("edadID").value;
    let valorNivel= document.getElementById("nivelID").value;
    
   
    addJugador[0].appendChild(parrafo);

        if(valorNombre=='' || valorEdad=='' || valorNivel=='' ){

           addJugador[0].replaceChild(parrafo);

        }else{
            jugador=new Jugador(valorNombre,valorEdad,valorNivel);
            arrJugadores.push(jugador); 

                if(arrJugadores.length>=2){
                    botonIniciar.disabled=false;
                }
            //console.log(arrJugadores[arrJugadores.length-1]);

            addJugador[0].style.display="none";
            botonAñadir.style.display="block";
        }
     
}


function iniciarPartida(){
    botonIniciar.disabled=true;
    botonAñadir.disabled=true;
    tiempoTotal=10;
    if(resumen[0].hasChildNodes(ganador)){
       ganador.innerHTML="";
    }

        jugadorA=arrJugadores[Math.floor(Math.random()*arrJugadores.length)];
     do{
        jugadorB=arrJugadores[Math.floor(Math.random()*arrJugadores.length)];

     }while( jugadorA == jugadorB )

    pulsarTecla();
    ponerNombresJugadores();
    aciertosTecla();
}

                                //FUNCION PARA PONER LOS NOMBRES EN EL HTML
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ponerNombresJugadores(){

    //JUGADOR A
    document.querySelector("#jugador1 p:nth-child(2)").innerHTML = "<strong>Nombre: </strong>"+jugadorA.nombre+"</p>";
    document.querySelector("#jugador1 p:nth-child(3)").innerHTML = "<strong>Edad: </strong>"+jugadorA.edad+"</p>";
    document.querySelector("#jugador1 p:nth-child(4)").innerHTML = "<strong>Nivel: </strong>"+jugadorA.nivel+"</p>";


    //JUGADOR B
    document.querySelector("#jugador2 p:nth-child(2)").innerHTML = "<strong>Nombre: </strong>"+jugadorB.nombre+"</p>";
    document.querySelector("#jugador2 p:nth-child(3)").innerHTML = "<strong>Edad: </strong>"+jugadorB.edad+"</p>";
    document.querySelector("#jugador2 p:nth-child(4)").innerHTML = "<strong>Nivel: </strong>"+jugadorB.nivel+"</p>";

}

let aciertosJugadorA=0;
let aciertosJugadorB=0;
let tiempoTotal=10;

let fragmentoContador=document.createDocumentFragment();
let contador1=document.getElementById("contador1");
let contador2=document.getElementById("contador2");
let parrafo2=document.createElement("p");
let divJugadores=document.getElementsByClassName("jugadores");
 
    
    function aciertosTecla(){
        contador1.innerText=aciertosJugadorA;
        contador2.innerText=aciertosJugadorB;

        window.onload = aciertosTecla;
        fragmentoContador.appendChild(parrafo2);
        resumen[0].appendChild(fragmentoContador)
     
        parrafo2.classList.add("tiempo");
        
        parrafo2.innerText="00:"+tiempoTotal
        if(tiempoTotal<10){
            parrafo2.innerText="00:0"+tiempoTotal
        }

        if(tiempoTotal==0){
            parrafo2.classList.remove("tiempo");
            parrafo2.innerText="";
            mostrarGanador();
            document.removeEventListener("keyup",EventoTeclaJugadorA);
            document.removeEventListener("keyup",EventoTeclaJugadorB);
            
            botonIniciar.disabled=false;
            botonAñadir.disabled=false;
            
           
        }else{
            console.log(tiempoTotal)
            tiempoTotal-=1;
            setTimeout(aciertosTecla,1000);
            
        }
    
    
    }

//Cuando termina una vez hay q borrar el evento
function pulsarTecla(){
    if(tiempoTotal==10)
        teclaRandom();
        
    document.addEventListener("keyup",EventoTeclaJugadorA)
    document.addEventListener("keyup",EventoTeclaJugadorB)
    
}
                    //EVENTOS TECLADO//
/////////////////////////////////////////////////////////////
function EventoTeclaJugadorA(e){

    contador1.innerText=aciertosJugadorA;
            if(e.keyCode==valorTecladoA){
    
                console.log("bien")
                aciertosJugadorA+=1;
                console.log(aciertosJugadorA)
            }else{
               console.log("mal")
            }
            
        }

function EventoTeclaJugadorB(e){
     contador2.innerText=aciertosJugadorB;

            if(e.keyCode==valorTecladoB)
                aciertosJugadorB+=1;
            
                    
        }
//////////////////////////////////////////////////////////////

let area1 =document.getElementsByClassName("area1");
let area2 =document.getElementsByClassName("area2");

let valorLetraA;
let valorLetraB;

let valorTecladoA;
let valorTecladoB;

 
function mostrarGanador(){

    if(aciertosJugadorA>aciertosJugadorB){
        
        ganador.innerHTML="Ha ganado "+jugadorA.nombre+" con "+aciertosJugadorA+" aciertos";
        resumen[0].appendChild(ganador);
    }else if(aciertosJugadorA<aciertosJugadorB){
        ganador.innerHTML="Ha ganado "+jugadorB.nombre+  " con "+aciertosJugadorB+" aciertos";
        resumen[0].appendChild(ganador);
     }
     else if(aciertosJugadorA == aciertosJugadorB){
        ganador.innerHTML="EMPATE";
        resumen[0].appendChild(ganador);
    }

    aciertosJugadorA=0;
    aciertosJugadorB=0;
}

                            //FUNCION PARA GENERAR UNA LETRA ALEATORIA PARA CADA JUGADOR
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function teclaRandom(){
    
    valorTecladoA=Math.floor(Math.random()* (90-65+1))+ 65;
        valorLetraA = String.fromCharCode(valorTecladoA) 
do{
        valorTecladoB=Math.floor(Math.random()* (90-65+1))+ 65;
        valorLetraB = String.fromCharCode(valorTecladoB) 

}while(valorLetraA == valorTecladoB)

      area1[0].innerText=valorLetraA;
      area2[0].innerText=valorLetraB;
  
}
