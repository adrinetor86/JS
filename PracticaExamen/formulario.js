
let nombre=document.getElementById("nombre");
let fecha=document.getElementById("edad");
let email=document.getElementById("email");
let telefono=document.getElementById("telefono");
let inputEntrar=document.getElementById("entrar");


inputEntrar.addEventListener("click",comprobarCredenciales);



comprobrarStorage()
function comprobarCredenciales(){

    if(comprobarNombre() && comprobarEmail() && comprobarTelefono()) {

        window.location="index.html";

        return true;
    }else{
        return false;
    }
}

function comprobrarStorage(){

   if(localStorage.getItem("pokemon")){
       window.location="index.html";
   }
}


function comprobarNombre(){

    let paternNombre=/^[A-Z][a-z]+$/;

    if(paternNombre.test(nombre.value)){

        return true;
    }else{
        alert("El nombre debe ser valido")
        return false;
    }
}


function comprobarEmail(){

    let paternEmail=/^[A-z\d]+@[A-z]{2,}.[A-z]{2,}$/;

    if(paternEmail.test(email.value)){

        return true;
    }else{
        alert("El correo debe ser valido")
        return false;
    }
}


function comprobarTelefono(){

    let paternTelefono=/^(\+34|\+34-)?(\d[-]?){8}\d$/;

    if(paternTelefono.test(telefono.value)){

        return true;
    }else{
        alert("El telefono debe ser valido")
        return false;
    }
}