let nombre=document.getElementById("nombre");

let fecha=document.getElementById("fecha");

let telefono=document.getElementById("telefono");

let aceptar=document.getElementById("aceptar");
let botonEntrar=document.getElementById("boton-entrar");


    botonEntrar.addEventListener("click",comprobarFormulario)

    aceptar.addEventListener("click",comprobarCheck)


    //Funcion que comprueba el si se ha marcado la casilla check
    function comprobarCheck(){

       if (aceptar.checked===true){

           botonEntrar.removeAttribute('disabled')
       }else if(aceptar.checked===false){
           botonEntrar.setAttribute('disabled', "true");
       }

    }

    //Comprueba si todos los campos tienen el formato correcto
    function comprobarFormulario() {
        if (comprobarTelefono() && comprobarEdad() && comprobarNombre()) {

            localStorage.setItem("Valornombre",nombre.value)

            paginaNueva();
            console.log("TA BUENO MANIN")
        } else {
            console.log("TA MAL MANIN")
        }
    }

// parametro que pilla el valor del local storage en caso de que exista
let usuario=localStorage.getItem("Valornombre");

    //Si existe, te redirige a la pantalla del personaje
if(usuario!==null && usuario!==undefined){

    window.location="./Opcion1.html"
}


//Funcion que se encarga de comprobar si la edad es de 18 años o mas
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
//Funcion que se encarga de comprobar el formato del nombre
    function comprobarNombre(){

    if(nombre.value!==' '){
        return true;
    }else{
        alert("Debes poner tu nombre")
        return false;
    }

    }
//Funcion que se encarga de comprobar el formato del telefono
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


//Funcion que redirige a una nueva pagina html
    function paginaNueva(){

        window.location ="../HTML/Opcion1.html";

    }


