let valorNombre=document.getElementById("inputs-nombre");

let valorNumero=document.getElementById("inputs-numero");

let valorEmail=document.getElementById("inputs-email");

let botonComenzar=document.getElementById("Boton-Enviar");

botonComenzar.addEventListener("click",mostrar)

comprobarStorage();

function comprobarStorage(){

    let personaje=localStorage.getItem("tuPersonaje");

    if(personaje!==null && personaje!==undefined){
        window.location="./resultado.html"
    }

}

    function mostrar(){

        console.log(valorNombre.value);

        if(comprobarTelefono() && comprobarCorreo() && comprobarNombre()) {

            console.log("HOLA")

            window.location="../HTML/preguntas.html";
        }else{
            console.log("MAL")
        }



    }
    function comprobarNombre(){
        let strNombre=/^([A-Z]|[a-z])[a-z]+$/

        if(strNombre.test(valorNombre.value)){
            return true;

        }else{
            alert("Debes meter un nombre valido")
            return false;
        }
    }

    function comprobarCorreo(){
    let strCorre=/^(\w+)\@(gmail\.com|hotmail\.com)$/

        if(strCorre.test(valorEmail.value)){
            return true;

        }else{
            alert("Debes meter un correo valido")
            return false;
        }
  }

    function comprobarTelefono(){

    let strPattern= /^(\+34)?(\d{9}|\d{3}-\d{3}-\d{3})$/

            if (strPattern.test(valorNumero.value)){
                return true;
            }else{
                alert("Debes meter un telefono valido")
                return false;
            }

    }
