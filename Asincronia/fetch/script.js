// const options={
//     method: "GET",
//     headers:{
//         xapi_key:"efffasdf"
//     }
// }

let botonEnviar=document.getElementById("Enviar");





botonEnviar.addEventListener("click",function () {

    let div=document.getElementById("datosPokemos");
    let nombre = document.getElementById("Nombre").value;
    let id = document.getElementById("Id").value;
    let titulo= document.createElement("h2")
    let valor;



    div.appendChild(titulo);
    if(id !== ''){
        valor = id
    } else if(nombre !==''){
        valor = nombre
    }

    console.log(nombre)

    let miDevolucion = fetch("https://pokeapi.co/api/v2/pokemon/"+valor);

    div.innerHTML=" ";
    titulo.innerHTML="INFO POKEMONS"

    miDevolucion
        .then((resultado) => resultado.json())
        .then((resultado2) => {
            console.log(resultado2)
                mostrarDatos()



                function mostrarDatos() {

                    let arrTipos=[];




                    if(!isNaN(valor)){
                        console.log("NOMBRE : "+resultado2.name)
                    }else{
                        console.log("ID : "+resultado2.id)
                    }


                    resultado2.types.forEach(function(datos){

                        arrTipos.push(datos.type.name);

                    })
                console.log("TIPO: "+ arrTipos);


                }
            // if (resultado2.next !== null) {
            //   //  console.log(resultado2.next)
            //
            // }

        });
})



// let miDevolucion= fetch("https://pokeapi.co/api/v2/pokemon/" );
//
// miDevolucion
//     .then((resultado)=>resultado.json())
//     .then((resultado2)=>{
//     console.log(resultado2)
//
//
//         if(resultado2.next !== null){
//             mostrarDatos()
//         function mostrarDatos(){
//
//
//
//             resultado2.results.forEach(function(datos){
//                 console.log(datos.name)})
//
//         }
//
//
//             console.log(resultado2.next)
//
//         }
//
//     }).catch((err)=>console.log(err))
//
// console.log("hola")


// async function miFuncionAsincrona(){
//     try {
//         const misDatos = await fetch("https://pokeapi.co/api/v2/pokemon/");
//         const misDatosParseados = await misDatos.json();
//         // throw new Error("Jarl")
//         return misDatosParseados;
//     }catch{
//         console.log(e)
//     }
// }
//
// console.log(miFuncionAsincrona())
