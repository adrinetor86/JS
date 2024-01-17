let valorNombre=document.getElementById("inputs-nombre");

let valorNumero=document.getElementById("inputs-numero");

let valorEmail=document.getElementById("inputs-email");

let botonComenzar=document.getElementById("Boton-Enviar");

botonComenzar.addEventListener("click",mostrar)


    function mostrar(){

        console.log(valorNombre.value);

        if(comprobarTelefono()==true){

            console.log("HOLA")

            window.location="../HTML/preguntas.html";
        }else{
            console.log("MAL")
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
