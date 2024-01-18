

//LOCAL SE GUARDA EN NAVEGADOR, AUNQUE CIERRE PAGINA EXISTE
//SESION PERMANECE SOLAMENTE MIENTRAS ESTE ABIERTO EL NAVEGADOR
let miLocal =document.getElementById("local")
localStorage.setItem("nombre", "ElRalf");
miLocal.innerText=localStorage.getItem("nombre");


let miSesion=document.getElementById("sesion");




if(sessionStorage.segundoNombre == null){
    sessionStorage.segundoNombre="El Jacket";
    alert("Buenas gente")
    miSesion.innerText = sessionStorage.segundoNombre;
}else{
    sessionStorage.removeItem("segundoNombre");
    alert("Adios")
}
