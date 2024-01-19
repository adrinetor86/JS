let nombre=document.getElementById("nombre");

let fecha=document.getElementById("fecha");

let telefono=document.getElementById("telefono");

let aceptar=document.getElementById("aceptar");
let botonEntrar=document.getElementById("boton-entrar");


    botonEntrar.addEventListener("click",comprobarFormulario)

    aceptar.addEventListener("click",comprobarCheck)

    function comprobarCheck(){

       if (aceptar.checked===true){

           botonEntrar.removeAttribute('disabled')
       }else if(aceptar.checked===false){
           botonEntrar.setAttribute('disabled', "true");
       }

    }



    function comprobarFormulario() {
        if (comprobarTelefono() && comprobarEdad() && comprobarNombre()) {



            localStorage.setItem("Valornombre",nombre.value)

            paginaNueva();
            console.log("TA BUENO MANIN")
        } else {
            console.log("TA MAL MANIN")
        }
    }


let usuario=localStorage.getItem("Valornombre");

if(usuario!==null && usuario!==undefined){
    console.log("holasdwwd")
    window.location="./Opcion1.html"
}

function comprobarEdad(){
    let fechaActual=new Date().getTime();
    let nacimiento=new Date(fecha.value)
    const edadMinima =568025136000;
    console.log(fechaActual)

    if( fechaActual-nacimiento>=edadMinima){

        return true
    }else{
        alert("Vete al chikipark chaval")
        return false

    }

}

    function comprobarNombre(){

    if(nombre.value!==' '){
        return true;
    }else{
        alert("Debes poner tu nombre")
        return false;
    }

    }

    function comprobarTelefono(){
    let strPatern=/^(\+34)?\d{9}$/

    if( strPatern.test(telefono.value)){
        console.log("Esta bien")
        return true
    }else{
        alert("Debes meter un telefono valido")
        return false
    }

    }


    function paginaNueva(){
     //   let fondo= "background-image: url('Fraude.png')";
        window.location ="../HTML/Opcion1.html";
       // window.open("../HTML/Opcion1.html","_self")
    }


function reproducirMusica(){
  let cancion= new Audio(getRutaCancion())
    cancion.play("")

}


function getRutaCancion() {
    const mapaCanciones = {
        0: 'Birds.mp3',
        1: 'Himno.mp3',

    };
    const numAleatorio = Math.floor(Math.random() * Object.keys(mapaCanciones).length);

    return mapaCanciones[numAleatorio];
}
