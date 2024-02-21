let nombre =document.getElementById("nombre");
let CodigoPostal =document.getElementById("cp");
let telefono =document.getElementById("telefono");


let btnEnv=document.querySelector("#formularioUsuario button[type='submit']")
let btnRandom=document.getElementById("cargarUltimo")

let formulario=document.getElementById("formularioUsuario");

// import {Persona} from "./Persona.js";

btnEnv.addEventListener("click",comprobarCredenciales)

btnRandom.addEventListener("click",personaRandom);



//LO SIENTO POR TANTO CODIGO

comprobarStorage();


//FUNCION PARA COMPROBAR EL PATTERN DEL NOMBRE
function comprobarNombre(){

     let patternNombre=/^[A-Z][a-z]{2,9}$/;

    if(patternNombre.test(nombre.value)){

        nombre.classList.remove("incorrecto");
        nombre.classList.add("correcto");
        return true;
    }else{
        nombre.classList.remove("correcto");
        nombre.classList.add("incorrecto");
        return false;
    }

}
//FUNCION PARA COMPROBAR EL PATTERN DEL CODIGO POSTAL
function comprobarCP(){

    let patternCP=/^[0-9]{5}$/;

    if(patternCP.test(CodigoPostal.value)){


        CodigoPostal.classList.remove("incorrecto");
        CodigoPostal.classList.add("correcto");
        return true;
    }else{
        CodigoPostal.classList.remove("correcto");
        CodigoPostal.classList.add("incorrecto");
        return false;
    }

}
//FUNCION PARA COMPROBAR EL PATTERN DEL TELEFONO
function comprobarTelefono(){

    let patterntelefono=/^(\+\d{2,3}|\+\d{2,3} )?[0-9]{9}$/;
    if(patterntelefono.test(telefono.value)){

        telefono.classList.remove("incorrecto");
        telefono.classList.add("correcto");
        return true;
    }else{
        telefono.classList.remove("correcto");
        telefono.classList.add("incorrecto");
        return false;
    }

}
let arrPersonas=[];


//FUNCION PARA COMPROBAR LAS CREDENCIALES
function comprobarCredenciales(evento){

    evento.preventDefault()
    comprobarTelefono()
    comprobarCP()
    comprobarNombre()


    if(comprobarTelefono() && comprobarNombre() && comprobarCP() ){

        let persona= new Persona(nombre.value,CodigoPostal.value,telefono.value);
        comprobarTelefono()
        comprobarCP()
        comprobarNombre()
        console.log("VALOR"+nombre.value)
        persona.setNombre=(nombre.value)
        persona.setCp=(CodigoPostal.value)
        persona.setTelefono=(telefono.value)


        arrPersonas.push(persona);


        console.log(arrPersonas)


                     localStorage.setItem("nombre",nombre.value);
                     localStorage.setItem("cp",CodigoPostal.value);
                     localStorage.setItem("telefono",telefono.value);
                     localStorage.setItem("arrPersonas",arrPersonas);


        console.log("********")

        //TE HA SALIDO

        let personaRandom=Math.floor(Math.random()* arrPersonas.length)

        console.log("RANDOM"+personaRandom);

       // console.log(persona);
        console.log(arrPersonas.length);
    }

}

//FUNCION PARA SACAR UNA PERSONA RANDOM
function personaRandom(){

    let personaRandom=Math.floor(Math.random()* arrPersonas.length)

    console.log(arrPersonas[personaRandom]);

    nombre.value=arrPersonas[personaRandom].nombre;
    CodigoPostal.value=arrPersonas[personaRandom].cp;
    telefono.value=arrPersonas[personaRandom].telefono;


}

//FUNCION PARA COMPROBAR EL STORAGE
function comprobarStorage(){

let arr2=[];
    if(localStorage.getItem("nombre") && localStorage.getItem("cp") && localStorage.getItem("telefono")){
        nombre.value= localStorage.getItem("nombre");
        CodigoPostal.value=  localStorage.getItem("cp");
        telefono.value=  localStorage.getItem("telefono");
        console.log("bien")

        let personaGuardada={
            nombre:localStorage.getItem("nombre"),
            cp:localStorage.getItem("nombre"),
            tel:localStorage.getItem("nombre")
        }

        arr2.push(personaGuardada);
        console.log(arr2);

        return arr2;
    }else{

        console.log("nada hermano")
    }

}




let formularioProducto=document.getElementById("formularioProducto");

let producto=document.getElementById("producto")
let id=document.getElementById("IDProducto")


let btnBuscar=document.querySelector("#formularioProducto button[type='submit']")


btnBuscar.addEventListener("click",mostrarDatos);



//FUNCION PARA MOSTRAR DATOS DEL JSON
function mostrarDatos(evento){
    evento.preventDefault();
    let url;




    let contenedorProductos =document.getElementById("contenedorProductos");

    fetch("http://192.168.56.108:3000/productos/")
        .then((res)=>{return res.json()})
        .then((resultado)=>{console.log(resultado)

            contenedorProductos.innerHTML=" "



            let nombreProducto=document.createElement("p")
            let marcaProducto=document.createElement("p")
            let precioProducto=document.createElement("p")


            if(id.value!=="" && producto.value ==="") {

                resultado.forEach(evento => {

                    if (id.value === evento.id) {
                        console.log(evento)

                        nombreProducto.innerHTML = "Nombre Producto:" + evento.nombre;
                        marcaProducto.innerHTML = "Marca Producto:" + evento.marca;
                        precioProducto.innerHTML = "Precio Producto:" + evento.precio;
                        contenedorProductos.appendChild(nombreProducto)
                        contenedorProductos.appendChild(marcaProducto)
                        contenedorProductos.appendChild(precioProducto)

                    } else {
                        contenedorProductos.appendChild(nombreProducto)
                        nombreProducto.innerHTML = "El producto no existe";
                    }

                })
            }else if(id.value==="" && producto.value !==""){
                resultado.forEach(evento=>{

                    if(producto.value===evento.nombre){
                        console.log(evento)
                        nombreProducto.innerHTML="Nombre Producto:"+evento.nombre;
                        marcaProducto.innerHTML="Marca Producto:"+evento.marca;
                        precioProducto.innerHTML="Precio Producto:"+evento.precio;
                        contenedorProductos.appendChild(nombreProducto)
                        contenedorProductos.appendChild(marcaProducto)
                        contenedorProductos.appendChild(precioProducto)
                    }else{
                        contenedorProductos.appendChild(nombreProducto)
                        nombreProducto.innerHTML="El producto no existe";
                    }

                })
            }else{
                alert("no puedes buscar 2 a la vez")
            }

        })

}


let btnContacto=document.getElementById("contacto");


btnContacto.addEventListener("click",mostrarDatosEmpresa);
function mostrarDatosEmpresa() {

    let ciudad=document.createElement("p")
    let ubicacion=document.createElement("p")
    let tel=document.createElement("p")

    fetch("http://192.168.56.108:3000/ubicacion/")
        .then((res) => {
            return res.json()
        })
        .then((resultado) => {
            console.log(resultado)

            contenedorProductos.innerHTML=" "
            ciudad.innerHTML="Ciudad: "+resultado.ciudad
            ubicacion.innerHTML="Ubicacion: "+resultado.direccion
            tel.innerHTML="Telefono: "+resultado.telefono

            contenedorProductos.appendChild(ciudad)
            contenedorProductos.appendChild(ubicacion)
            contenedorProductos.appendChild(tel)
        })
}
class Persona{

    nombre;
    cp;
    telefono


    constructor(nombre, cp, telefono) {
        this.nombre = nombre;
        this.cp = cp;
        this.telefono = telefono;
    }


    get getNombre() {
        return this.nombre;
    }

    set setNombre(value) {
        this.nombre = value;
    }

    get getCp() {
        return this.cp;
    }

    set setCp(value) {
        this.cp = value;
    }

    get getTelefono() {
        return this.telefono;
    }

    set setTelefono(value) {
        this.telefono = value;
    }
}


