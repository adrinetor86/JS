import {ciudades} from "./ciudades.js";

let botonPrecio=document.getElementById("botonPrecio");
let botonDias=document.getElementById("botonDias");
let botonEscalas=document.getElementById("botonEscala");
let inputPregunta=document.createElement("input")
let enviar=document.createElement("input")
let label=document.createElement("label");
let seleccion;

inputPregunta.type="number";
inputPregunta.setAttribute('id','inputPregunta')

enviar.type="submit";
enviar.setAttribute('id','enviar');




    botonPrecio.addEventListener("click",mostrarFormularioPrecio);
    botonDias.addEventListener("click",mostrarFormularioDias);
    botonEscalas.addEventListener("click",mostrarFormularioEscala);
    function mostrarFormularioPrecio(){
        borrarResultado()
        contenedor_formularios.classList.add("Clase-formulario");
        contenedor_formularios.style.display="grid";

        contenedor_formularios.appendChild(label).innerHTML="Cual es tu presupuesto?";
        contenedor_formularios.appendChild(inputPregunta);
        contenedor_formularios.appendChild(enviar);

        seleccion="Precio";

    }
    function mostrarFormularioDias(){
        borrarResultado();
        contenedor_formularios.classList.add("Clase-formulario");
        contenedor_formularios.style.display="grid";
        contenedor_formularios.appendChild(label).innerHTML="Cuantos dias quieres estar?";
        contenedor_formularios.appendChild(inputPregunta);
        contenedor_formularios.appendChild(enviar);
        seleccion="Dias";
    }
    function mostrarFormularioEscala(){
        borrarResultado()
        contenedor_formularios.classList.add("Clase-formulario");
        contenedor_formularios.style.display="grid";
        contenedor_formularios.appendChild(label).innerHTML="Cuantos escalas quieres?";
        contenedor_formularios.appendChild(inputPregunta);
        contenedor_formularios.appendChild(enviar);
        seleccion="Escala";
    }
    function borrarHijos(){
        contenedor_formularios.removeChild(label);
        contenedor_formularios.removeChild(inputPregunta);
        contenedor_formularios.removeChild(enviar);
    }

   // enviar.addEventListener("click",);
    enviar.addEventListener("click",function(){

        contenedor_formularios.style.display="none";
        let valor=document.getElementById('inputPregunta').value;

        if(contenedor.hasChildNodes(paisesDisponibles)){

        if(seleccion==="Precio"){
            mostrarPaisesPorPrecio(valor);
        }else if(seleccion==="Dias"){
            mostrarPaisesPorDias(valor)
        }else{
            mostrarPaisesPorEscalas(valor)
        }
        }
        borrarHijos();
        return valor;
    })


    function mostrarPaisesPorPrecio(valor){

        for(const vuelo of ciudades){

            if(vuelo.details.budget <=valor){
                //generarBotones(vuelo);
                console.log(vuelo.details.budget)
               crearSelect(vuelo);

            }
        };

    }
/* let divDestinos=document.createElement("div");
function crearDiv(vuelo){
 contenedor.appendChild(document.createElement("div")).innerHTML=vuelo.name
// comprobarBusquedas();
}*/
    function crearSelect(vuelo){
            paisesDisponibles.appendChild(document.createElement("option")).innerHTML=vuelo.name;
            comprobarBusquedas();
    }

    let paisesDisponibles=document.createElement("select");
    function mostrarPaisesPorDias(valor) {

        for (const vuelo of ciudades) {

            if (vuelo.details.days == valor) {

                console.log(vuelo.details.days)
                crearSelect(vuelo)
            }
        }
    }
function mostrarPaisesPorEscalas(valor) {

    for (const vuelo of ciudades) {

        if (vuelo.details.stops.length == valor) {

            console.log(vuelo.details.days)
            crearSelect(vuelo)
        }
    }
}
    function borrarResultado(){

        if (paisesDisponibles.hasChildNodes()) {

            while (paisesDisponibles.hasChildNodes()){
                paisesDisponibles.removeChild(paisesDisponibles.firstChild)
            }
            contenedor.removeChild(paisesDisponibles);
        }
    }
    function comprobarBusquedas(){

        if (paisesDisponibles.hasChildNodes()) {
            contenedor.appendChild(paisesDisponibles);

        } else {
          alert("No hay vuelos")
        }
    }

let contenedor=document.getElementById("contenedor-viajes");
let contenedor_formularios=document.getElementById("contenedor-formularios");
function generarBotones(ciudad){
     //contenedor.appendChild(document.createElement("button")).innerHTML=ciudad.name;
    //contenedor.appendChild(document.createElement("button")).innerHTML=ciudad.name;

}
//contenedor.appendChild();

