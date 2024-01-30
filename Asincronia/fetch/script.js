// const options={
//     method: "GET",
//     headers:{
//         xapi_key:"efffasdf"
//     }
// }

let miDevolucion= fetch("https://pokeapi.co/api/v2/pokemon/" );

miDevolucion
    .then((resultado)=>resultado.json())
    .then((resultado)=>{
        console.log(resultado)
        resultado.results.forEach(function(datos){
            console.log(datos.name)})
         })


