// const options={
//     method: "GET",
//     headers:{
//         xapi_key:"efffasdf"
//     }
// }

let botonEnviar=document.getElementById("Enviar");

botonEnviar.addEventListener("click",function () {

     let div=document.getElementById("datos");
    let inputDato = document.getElementById("Input-Dato").value;
    // let titulo= document.createElement("h2")
     let id_nombre=document.createElement("h3");
     let temperatura =document.createElement("h4");


    //
    // div.appendChild(titulo);
    //
    // if(!isNaN(inputDato)){
    //     //POR ID
    //     url= "https://pokeapi.co/api/v2/pokemon/"+inputDato;
    // }else{
    //     //POR NOMBRE
    //     url= "https://pokeapi.co/api/v2/pokemon/"+inputDato;
    // }

   // let miDevolucion = fetch("https://www.el-tiempo.net/api/json/v2/home");

    const url = `https://open-weather13.p.rapidapi.com/city/${inputDato}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3b0f7af825msh565bee7e3ff8158p197132jsnf2f9fafad9ba',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };


    let miDevolucion= fetch(url , options)

    miDevolucion
            .then(res => res.json())
            .then(resultado2 => {
                console.log(resultado2)

                mostrarDatos();
                function mostrarDatos() {


                    // div.appendChild(titulo)
                    div.appendChild(id_nombre)
                    div.appendChild(temperatura)


                    id_nombre.innerHTML ="Ciudad " +resultado2.name;
                    temperatura.innerHTML= "Temperatura "+resultado2.main.temp+"Fº";

                    // resultado2.types.forEach(function (datos) {
                    //
                    //     //arrTipos.push(datos.type.name);
                    //
                    // })

                }


            })
    //
    //
    // const url = 'https://meteorology.p.rapidapi.com/health';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '3b0f7af825msh565bee7e3ff8158p197132jsnf2f9fafad9ba',
    //         'X-RapidAPI-Host': 'meteorology.p.rapidapi.com'
    //     }
    // };

// let miDevolucion=fetch(url,options);
//     miDevolucion
//         //.then((resultado)=> resultado.text())
//         .then((resultado) => resultado.json())
//         .then( (resultado2) => {
             //console.log(resultado2)
            // try {
            //
            //     const result =  resultado2.text();
            //     console.log(result);
            // } catch (error) {
            //     console.error(error);
            // }


           // mostrarDatos()

            // function mostrarDatos() {
            //
            //
            //     // div.appendChild(titulo)
            //         div.appendChild(id_nombre)
            //
            //     // }
            //     temperatura= resultado2.main.temp
            //
            //    resultado2.types.forEach(function (datos) {
            //
            //         //arrTipos.push(datos.type.name);
            //
            //    })
            //
            // }



        // })
        // .catch((err)=>{
        //     (console.log("No existe ese pokemon"))
        //     div.innerHTML=" ";
        //
        //     console.log(err)
        //     if(inputDato === "Chicote"){
        //         imagenDefault.setAttribute("src","easter.png");
        //         div.appendChild(imagenDefault);
        //     }else{
        //         titulo.innerHTML="No existe ese pokemon"
        //         div.appendChild(titulo);
        //     }
        //
        // });
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
