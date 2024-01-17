let miBoton= document.getElementById("Max");
//Semaforo, 200px X 200px,  border solid 2px black,
//display in line,3 botones, y otro boton Max, rojo blanco azul,
// play musica max, y boton reset
let miBotonRojo= document.getElementById("Rojo");
let miBotonNaranja= document.getElementById("Ojo");
let miBotonVerde= document.getElementById("Pasa");
let miBotonResetear=document.getElementById("Resetear");

miBotonRojo.addEventListener("click",function(){
    let miCuadro1=document.getElementById("Cuadro1");
    miCuadro1.classList.add("rojo");

     miCuadro2=document.getElementById("Cuadro2");
        miCuadro2.classList.remove("blanco");
        miCuadro2.classList.remove("naranja");

     miCuadro3=document.getElementById("Cuadro3");
    miCuadro3.classList.remove("azul");
    miCuadro3.classList.remove("verde");
    stopMyAudio();
});

miBotonNaranja.addEventListener("click",function(){
    let miCuadro1=document.getElementById("Cuadro1");
    miCuadro1.classList.remove("rojo");

    let miCuadro2=document.getElementById("Cuadro2");
    miCuadro2.classList.add("naranja");
    
    miCuadro3=document.getElementById("Cuadro3");
    miCuadro3.classList.remove("azul");
    miCuadro3.classList.remove("verde");
    stopMyAudio() 
});

miBotonVerde.addEventListener("click",function(){
    let miCuadro3=document.getElementById("Cuadro3");
    miCuadro3.classList.remove("azul");
    miCuadro3.classList.add("verde");

    let miCuadro1=document.getElementById("Cuadro1");
    miCuadro1.classList.remove("rojo");

    let miCuadro2=document.getElementById("Cuadro2");
    miCuadro2.classList.remove("naranja");
    stopMyAudio()
});

miBotonResetear.addEventListener("click",function(){
    let miCuadro3=document.getElementById("Cuadro3");
    miCuadro3.classList.remove("azul");
    miCuadro3.classList.remove("verde");

    let miCuadro1=document.getElementById("Cuadro1");
    miCuadro1.classList.remove("rojo");

    let miCuadro2=document.getElementById("Cuadro2");
    miCuadro2.classList.remove("naranja");
    stopMyAudio();
})


miBoton.addEventListener("click",function(){
    
    let miCuadro1=document.getElementById("Cuadro1");
    miCuadro1.classList.add("rojo");

    

    let miCuadro3=document.getElementById("Cuadro3");
    miCuadro3.classList.add("azul");

    playMyAudio();
    
});

function playMyAudio(){
    document.getElementById("miAudio").play();
}
function stopMyAudio(){
    
    let audio=document.getElementById("miAudio");
    audio.pause();
}