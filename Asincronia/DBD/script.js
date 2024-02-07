// const options={
//     method: "GET",
//     headers:{
//         xapi_key:"efffasdf"
//     }
// }

let botonEnviar=document.getElementById("Enviar");

botonEnviar.addEventListener("click",function () {

    // let div=document.getElementById("datosPokemos");
    // let inputDato = document.getElementById("Input-Dato").value;
    // let titulo= document.createElement("h2")
    // let id_nombre=document.createElement("h3");
    // let tipo=document.createElement("h3");
    // let imagenDefault=document.createElement("img");
    // let imagenShiny=document.createElement("img");
    // let valor;
    // let url;



    // if(!isNaN(inputDato)){
    //     //POR ID
    //     url= "https://pokeapi.co/api/v2/pokemon/"+inputDato;
    // }else{
    //     //POR NOMBRE
    //     url= "https://pokeapi.co/api/v2/pokemon/"+inputDato;
    // }
    let option={
        method:'GET',
        mode:'no-cors',
        // headers:{
        //     'Access-Control-Allow-Origin':'ok',
        // }
    }


    let miDevolucion = fetch("https://dbd.tricky.lol/api/perkinfo?perk=Adrenaline",option);



    miDevolucion
        .then((resultado) =>  console.log(resultado))
        .then((resultado2) =>  console.log(resultado2) )
        .catch(error => console.log(error));

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
