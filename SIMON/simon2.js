let arrColores=["verde","rojo","amarillo","azul"];
let arrSecuencia=[];
let arrUsuario=[];
let nivel=0;
let miBoton= document.getElementById("boton");
let miBotonHard= document.getElementById("botonHardore");
let eleccion= document.getElementById("contenedor");
let puntos=document.getElementById("puntos");
let puntuacion=document.getElementById("puntuacion");
let titulo=document.getElementById("cabecera");
let botonesModo=document.getElementsByTagName("button");
let puntosHard=document.getElementById("divPuntos");
let contenedorHard=document.getElementById("contenedor2");
let rondas=20;
let start=true;

function parar(){
    location.reload();
}

let cuerpo=document.getElementsByName("body");

botonHardore.addEventListener("click",function(){
  
    if(start==true){

       document.getElementsByTagName("h1")[0].innerHTML="VIVIR O MORIR, TU DECIDES";
       let audio=new Audio("SAW.mp3");
        audio.play();

        contenedorHard.classList.add("modoHard")
        botonesModo[4].classList.add("modoHard");
        botonesModo[4].innerHTML="VIVIR"
        botonesModo[4].addEventListener("click",parar)
        botonesModo[5].classList.add("modoHard");
        botonesModo[5].innerHTML="MORIR"
        document.getElementsByTagName("body")[0].classList.add("SAW");
       start=false;
      inicio();
    }


})

miBoton.addEventListener("click",function(){

    if(start==true){
        //miBotonHard.style.display="none";
        miBotonHard.innerHTML="Parar";
        miBotonHard.addEventListener("click",parar);
       start=false;
      inicio();
    }
})

//miBoton.addEventListener("click", inicio());
    function inicio(){
        nivel = 0;
        arrUsuario = [];
        puntos.innerHTML = " nivel 0";
        titulo.innerText = "Secuencia de Colores";
        siguienteNivel();
    }

    function siguienteNivel() {

        arrSecuencia.push(generarColorAleatorio());
        console.log(arrSecuencia);
        mostrarSecuencia();
    }

    function generarSecuencia() {

        arrSecuencia.push(generarColorAleatorio());
        console.log(nivel);
        console.log(arrSecuencia);
    }

    function generarColorAleatorio() {
        // Genera un número aleatorio entre 0 y 3 y utiliza ese número como índice para obtener un color
        let color = Math.floor(Math.random() * 4);
        return arrColores[color];
    }

    function mostrarSecuencia() {
        let i = 0;

            let intervalo = setInterval(function () {
                resaltarColor(arrSecuencia[i]);
                i++;
                if (i >= arrSecuencia.length) {
                   clearInterval(intervalo);
                    permitirInputUsuario();
                }
            }, 1000); // Ajusta el tiempo según tus necesidades


    }

    function resaltarColor(color) {
        let colorElement = document.getElementById(color);
        colorElement.classList.add("add");
        setTimeout(() => {
            colorElement.classList.remove("add");

        }, 500); // Ajusta el tiempo según tus necesidades
    }
        function permitirInputUsuario() {
        eleccion.addEventListener("click", manejarInputUsuario);

    }


    function cancelaEvento(){
        miBoton.removeEventListener("click", inicio())
    }
    function manejarInputUsuario(e) {
        let colorSeleccionado = e.target.id;
        if(e.target.localName=='button'){
            resaltarColor(colorSeleccionado);

            arrUsuario.push(colorSeleccionado);
    
            if (arrUsuario.length === arrSecuencia.length) {
                validarSecuencia();
            }
        }
      

    }

    function validarSecuencia() {

        for (let i = 0; i < arrUsuario.length; i++) {
            if (arrUsuario[i] !== arrSecuencia[i]) {
                gameOver();
                return;
            }
        }
    
        if (nivel < rondas - 1) {
            nivel++;
            //puntuacion.innerText="nivel "+nivel;
            puntos.innerHTML = ("nivel "+nivel);
            arrUsuario = [];
           
            setTimeout(siguienteNivel, 200); // Ajusta el tiempo según tus necesidades
      
        } else {
            titulo.innerText = "HAS GANADO!!!";
        }
    }
    
    function gameOver() {
        titulo.innerText = "GAME OVER";
        // Puedes añadir más lógica según tus necesidades
        // Por ejemplo, reiniciar el juego, mostrar un mensaje, etc.
        // En este ejemplo, reiniciaremos el juego después de 2 segundos
        setTimeout(function () {
            nivel = 0;
            arrUsuario = [];
            arrSecuencia=[];
            puntos.innerHTML = "nivel 0";
            titulo.innerText = "Secuencia de Colores";
            siguienteNivel();
        }, 2000);
    }
