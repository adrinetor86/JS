let miAnclaje=document.getElementById("miPrueba");

//miAnclaje.innerHTML="---"


let miParrafo=document.createElement("p");
miParrafo.id="nuevoElemento";
miParrafo.innerText="Visca Barça";

miAnclaje.appendChild(miParrafo);

let noEsta=document.querySelector("#nuevoElemento")
// console.log(noEsta);

//miAnclaje.removeChild(miParrafo);


let Meencuentra=document.querySelector("#nuevoElemento");
console.log(Meencuentra);

//FRAGMENTO

let miSegundoParrafo=document.createElement("p");
miSegundoParrafo.innerHTML="Viva er Betih";


let miCaja=document.createDocumentFragment();

miCaja.appendChild(miParrafo);
miCaja.appendChild(miSegundoParrafo);

miAnclaje.appendChild(miCaja);

