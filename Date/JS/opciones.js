console.log("hola")

let botonImpuestos=document.getElementsByClassName("impuestos")

let botonEvasion =document.getElementsByClassName("evasion");


let formulario=document.getElementsByClassName("formulario")

botonImpuestos[0].addEventListener("click",cargarImpuestos)
botonEvasion[0].addEventListener("click",cargarEvasion)




    function cargarImpuestos(){
        formulario[0].style.opacity="0%"
       document.body.style.backgroundImage ='url("../Pringado.jpg")';
        botonImpuestos[0].style.display="hidden"

       //window.location="../HTML/OpcionesImpuestos.html";

    }
    function cargarEvasion(){

    window.location="../HTML/Evasion.html";
    }

let padre=document.getElementById("padre");




console.log("adios")
