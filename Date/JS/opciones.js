

let botonImpuestos=document.getElementsByClassName("impuestos")

let botonEvasion =document.getElementsByClassName("evasion");

let botonBorrar=document.createElement("button")


botonBorrar.setAttribute("id","botonBorrar");

botonBorrar.style.display="none";

botonBorrar.innerHTML="Volver a rellenar el formulario";

let padre =document.getElementById("padre");

let titulo=document.getElementById("Titulo-inicio")

titulo.innerHTML="Buenas "+localStorage.getItem("Valornombre")+". Escoge una opcion"


let formulario=document.getElementsByClassName("formulario")

botonImpuestos[0].addEventListener("click",cargarImpuestos)
botonEvasion[0].addEventListener("click",cargarEvasion)


botonBorrar.addEventListener("click",borrarStrorage)

function borrarStrorage(){

    localStorage.clear();

    window.location="./index.html"
}

    function cargarImpuestos(){
       // formulario[0].childNodes(0).style.display="none"
    let imagenPringado=document.createElement("img");

        imagenPringado.setAttribute("src","../Pringado.jpg");

        botonImpuestos[0].style.display="none"
        botonEvasion[0].style.display="none"
        titulo.innerHTML=""
       // formulario[0].style.opacity="0%"
      // document.body.style.backgroundImage ='url("../Pringado.jpg")';

        botonImpuestos[0].style.display="hidden"
        formulario[0].appendChild(imagenPringado);
        padre.appendChild(botonBorrar);
        botonBorrar.style.display="block"

       //window.location="../HTML/OpcionesImpuestos.html";

    }
    function cargarEvasion(){

    window.location="../HTML/Evasion.html";
    }

console.log("adios")
