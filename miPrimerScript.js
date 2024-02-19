//let miImagen= document.getElementsByTagName("img");

//miImagen[0].setAttribute("src","fockingCruasan.png");

//let boton=document.getElementById("miBoton");

//boton.addEventListener();


/*
pedir 3 menus
dar las gracias a traves de innerText,


let miComida1=prompt("Lentejas o Cocido");
let miComida2=prompt("Ternera o Cerdo");
let miComida3=prompt("Tarta o Tiramisu");
*/
let fotoComida=document.getElementsByTagName("img");
let miComida1= prompt("Lentejas o Cocido").toLowerCase();

if(miComida1==="lentejas"){
    fotoComida[0].setAttribute("src","fotos/lentejas.jpg")
    fotoComida[0].classList.add("imagen");
}else{
    fotoComida[0].setAttribute("src","fotos/cocido.jpg")
    fotoComida[0].classList.add("imagen");
}

let miComida2=prompt("Ternera o Cerdo").toLowerCase();

if(miComida1==="ternera"){
    fotoComida[1].setAttribute("src","fotos/ternera.jpg")
    fotoComida[1].classList.add("imagen");
}else{
    fotoComida[1].setAttribute("src","fotos/cerdo.jpg")
    fotoComida[1].classList.add("imagen");
}

let miComida3=prompt("Tarta o Tiramisu").toLowerCase();
if(miComida1=="tarta"){
    fotoComida[2].setAttribute("src","fotos/tarta.jpg")
    fotoComida[2].classList.add("imagen");
}else{
    fotoComida[2].setAttribute("src","fotos/tiramisu.jpg")
    fotoComida[2].classList.add("imagen");
}

fotoComida.classList.add("imagen");
let miTexto=document.getElementById("gracias");
miTexto.innerText="Gracias por darnos tu dinero y confiar en nuestra comida.Provecho";

