

let inputNombre =document.getElementById("inputs-nombre");


let inputTelefono =document.getElementById("inputs-numero");

let inputEmail =document.getElementById("inputs-email");

let botonEnviar =document.getElementById("Boton-Enviar");

let check =document.getElementById("check");
botonEnviar.setAttribute("disabled","true")

botonEnviar.addEventListener("click",comprobarNombre)

check.addEventListener("click",comprobarCheck)





function comprobarCheck(){

    if(check.checked){

        botonEnviar.removeAttribute("disabled")


    }else{
        botonEnviar.setAttribute("disabled","true")

    }
}

function comprobarNombre(){

    let patronNombre= /[A-Z][a-z]+/;

//alert(inputNombre.value)

    if(patronNombre.test(inputNombre.value)===true){


        alert("Nombre correcto");
        return true
    }else{
        alert("Nombre incorrecto");
        return false;
    }

}

function comprobarTelefono(){

    let patronTelefono= /^(\+34|\+34-)?(\d[-]?){8}\d$/;


    if(patronTelefono.test(inputTelefono.value)===true){


        alert("Telefono correcto");
        return true
    }else{
        alert("Telefono incorrecto");
        return false;
    }

}

    function comprobarEmail(){

        let patroninputEmail= /^((\w|[#%$?¿=^´()!ªº/]|)+@(gmail.com|yahoo.es|interia.pl))$/;

        if(patroninputEmail.test(inputEmail.value)===true){

            alert("Email correcto");
            return true
        }else{
            alert("Email incorrecto");
            return false;
        }

    }

