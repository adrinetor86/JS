// const options={
//     method: "GET",
//     headers:{
//         xapi_key:"efffasdf"
//     }
// }

let botonEnviar=document.getElementById("Enviar");

botonEnviar.addEventListener("click",function () {

    let div=document.getElementById("datosPokemos");
    let inputDato = document.getElementById("Input-Dato").value;
    let titulo= document.createElement("h2")
    let id_nombre=document.createElement("h3");
    let tipo=document.createElement("h3");
    let imagenDefault=document.createElement("img");
    let imagenShiny=document.createElement("img");
    let valor;
    let url;


    div.appendChild(titulo);

    if(!isNaN(inputDato)){
        //POR ID
        url= "https://pokeapi.co/api/v2/pokemon/"+inputDato;
    }else{
        //POR NOMBRE
        url= "https://pokeapi.co/api/v2/pokemon/"+inputDato;
    }

    let miDevolucion = fetch(url);



    miDevolucion
        .then((resultado) => resultado.json())
        .then((resultado2) => {
            console.log(resultado2)
                mostrarDatos()


                function mostrarDatos() {

                    div.innerHTML=" ";
                    titulo.innerHTML="INFO POKEMONS"
                    if(resultado2.sprites.back_default !== null){
                        imagenDefault.setAttribute("src",resultado2.sprites.front_default);
                        imagenShiny.setAttribute("src",resultado2.sprites.front_shiny);
                    }else{
                        imagenDefault.setAttribute("src",resultado2.sprites.front_default);
                        imagenShiny.setAttribute("src",resultado2.sprites.front_shiny);
                    }


                    div.appendChild(titulo)
                    div.appendChild(id_nombre)
                    div.appendChild(tipo)
                    div.appendChild(imagenDefault);
                    div.appendChild(imagenShiny);
                    let arrTipos=[];


                    if(!isNaN(inputDato)){
                        console.log("NOMBRE : "+resultado2.name)

                        id_nombre.innerHTML="NOMBRE : "+resultado2.name;
                    }else{
                        console.log("ID : "+resultado2.id)
                        id_nombre.innerHTML="ID : "+resultado2.id;
                    }


                    resultado2.types.forEach(function(datos){

                        arrTipos.push(datos.type.name);

                    })
                    tipo.innerHTML="TIPO: "+arrTipos;
                console.log("TIPO: "+ arrTipos);

                   // id_nombre
                }
            // if (resultado2.next !== null) {
            //   //  console.log(resultado2.next)
            //
            // }

        })
        .catch((err)=>{
            (console.log("No existe ese pokemon"))
            div.innerHTML=" ";

            console.log(err)
            if(inputDato === "Chicote"){
                imagenDefault.setAttribute("src","easter.png");
                div.appendChild(imagenDefault);
            }else{
                titulo.innerHTML="No existe ese pokemon"
                div.appendChild(titulo);
            }

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
