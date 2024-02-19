


let inputBusqueda=document.getElementById("cajaBusqueda");
let buscarPiloto=document.getElementById("buscarPilotos");
let btnBuscar=document.getElementById("Buscar");

let url;

// buscarPiloto.addEventListener("click",)

btnBuscar.addEventListener("click",()=>{
    mostarDatos();
});


function comprobarCheck(){

    if(buscarPiloto.checked===true){

        url='http://10.224.34.231:3000/pilotos';
        console.log(url)

        return true;
    }else{

        url='http://10.224.34.231:3000/escuderias'
        console.log(url)

        return false;
    }
}

buscarPiloto.addEventListener("click",comprobarCheck);

    mostarDatos();
    function mostarDatos(){

            fetch(url)
            .then((res)=>{return res.json()})
            .then((resultado)=>{

                console.log(resultado)

                if(comprobarCheck()===true){
                    busquedaNombre(resultado);
                }else{
                    busquedaEscuderia(resultado)
                }

                  //  busquedaEscuderia(piloto);
                  //   // if(piloto.nombre===inputBusqueda.value) {
                  //       let resultado=document.getElementById("resultado");
                  //       let parrafo=document.createElement("p");
                    //
                    //     console.log(piloto.nombre)
                    //
                    //     //   Max Verstappen
                    //     parrafo.innerHTML = piloto.nombre;
                    //
                    //     resultado.appendChild(parrafo);
                    // }
                })


            .catch((e)=>console.log(e));
    }

    function mostrarPiloto(){

    }
function busquedaNombre(resultado){
    resultado.forEach((piloto)=> {
        if (piloto.nombre === inputBusqueda.value) {
            let resultado = document.getElementById("resultado");
            let parrafo = document.createElement("p");

            console.log(piloto.nombre)

            //   Max Verstappen
            parrafo.innerHTML = piloto.nombre;

            resultado.appendChild(parrafo);
        }
    });
}


function busquedaEscuderia(resultado){

    resultado.forEach((escuderia)=> {

        if (escuderia.nombre === inputBusqueda.value) {
            let resultado = document.getElementById("resultado");
            let parrafo = document.createElement("p");

            console.log(escuderia.nombre)

            //   Max Verstappen
            parrafo.innerHTML = escuderia.nombre;

            resultado.appendChild(parrafo);
        }
    });
}