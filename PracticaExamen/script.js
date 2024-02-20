import {Pokemon} from "./Pokemon.js";

let btnVolver=document.getElementById("volver");
btnVolver.setAttribute("disabled",true)

let datoBuscado=document.getElementById("nombreInput");
let checkBusqueda=document.getElementById("checkBusqueda");

let btnBuscar=document.getElementById("inputBuscar");
let arrTipos=[];
let url;


btnBuscar.addEventListener("click",mostrarDatos);
btnVolver.addEventListener("click",borrarStorage);

comprobrarStorage()
    function borrarStorage() {
    localStorage.removeItem("pokemon");
    window.location="formulario.html";
    }
    function comprobarID(){

        if(!isNaN(datoBuscado.value)){

            url="https://pokeapi.co/api/v2/pokemon/"+datoBuscado.value;
                return url;
        }else{
            alert("no puedes buscar por nombre");

            return null;
        }
    }

    function comprobarNombrePokemon(){
        if(isNaN(datoBuscado.value)){
            url="https://pokeapi.co/api/v2/pokemon/"+datoBuscado.value;
            return url;
        }else{
            alert("no puedes buscar por ID");
            return null;
        }
    }

        function mostrarDatos(){
            if(checkBusqueda.checked){
                console.log("checked")

                url= comprobarID()

            }else{
                console.log("NO checked")
                url= comprobarNombrePokemon();
                console.log(url)
            }

            if(url){
                sacarDatosApi()
            }

        }

        function sacarDatosApi(){


            fetch(url)
                .then((res)=>{return res.json()})
                .then((resultado)=>{
                    let divResultado=document.getElementById("resultados");
                    let parrafo=document.createElement("h4");


                    resetearDatos(divResultado);
                    resultado.types.forEach(function(datos){

                        console.log(datos.type.name);
                        arrTipos.push(datos.type.name);
                    })
                        console.log(arrTipos);

                        //CREAMOS UN OBJETO POKEMON Y LE PASAMOS LOS VALORES
                    let pokemon=new Pokemon()

                    pokemon.setNombre(resultado.name);
                    pokemon.setType=arrTipos;

                    divResultado.appendChild(document.createElement("h4")).innerHTML=pokemon.getName;

                    parrafo.innerHTML=pokemon.getType;

                    divResultado.appendChild(parrafo)

                    localStorage.setItem("pokemon",pokemon.getType);
                    comprobrarStorage();

                })

        }


        function resetearDatos(divResultado){
            divResultado.innerHTML=" ";
            arrTipos=[];
        }


    function comprobrarStorage(){

        if(localStorage.getItem("pokemon")){
            console.log(localStorage.getItem("pokemon"));

            btnVolver.removeAttribute("disabled");
        }else{
            console.log("nada mi rey");
            btnVolver.setAttribute("disabled","true");
        }
    }




