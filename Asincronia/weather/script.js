
let btnBuscar=document.getElementById("btnBuscar");



let datos=document.getElementById("datos");

datos.style.display="none";

btnBuscar.addEventListener("click",mostrarDatos)



//
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
//     .then(response => response.json())
//     .then(response => {
//
//         console.log(response);
//         console.log(response.cod);
//         if (response.cod === '404') {
//             console.log("err")
//         }})
// .catch((err)=> console.log(err))

let imagen=document.createElement("img");
imagen.setAttribute("id","imagenValor");
let divContenedor=document.getElementById("contenedor");
function mostrarDatos(){

    let APIKey='fab39eb2123e1f1999354d978289ff8c';
    let ciudad=document.getElementById("inputCiudad").value


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(response => {

        console.log(response);
        console.log(response.cod);


        if (response.cod === '404') {

            imagen.setAttribute("src","img/404.png")

            if(divContenedor.hasChildNodes(datos)){
                divContenedor.replaceChild(imagen,datos)
                console.log("ayuda")
                datos.style.display="none";
            }else{
                divContenedor.appendChild(imagen)
            }


            console.log("err")

        }else{
            datos.style.display="grid";
            let valorTiempo=document.getElementById("Tiempo")
            let valorTemperatura=document.getElementById("Temperatura")
            let valorHumeda=document.getElementById("Humedad")
            let valorViento=document.getElementById("Viento")
            let valorPresion=document.getElementById("Presion")

            if(divContenedor.hasChildNodes(imagen)){
               divContenedor.removeChild(imagen)
          //divContenedor.replaceChild(imagen,datos)

            }else{
               // let valor=document.getElementsByClassName("valoresDatos")[0];

                valorTiempo.innerText="fef"

           // let humedad=document.createElement("h")
            }


        }

    })
    .catch((err)=> console.log(err))
}






