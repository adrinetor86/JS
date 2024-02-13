

let divBuscar=document.getElementById("buscador");
let btnBuscar=document.getElementById("btnBuscar");
let tiempo;
let datos=document.getElementById("datos");
let div_lupa=document.getElementById("div_lupa");

let arrDatos=["tiempo","temp","sensacion","humedad","viento","presion"];

let arrDiccionario= {
    "Clouds":"Nublado",
    "Clear":"Despejado",
    "Mist":"Niebla",
    "Drizzle":"Llovizna",
    "Rain":"Lluvia",
    "Snow":"Nieve",
    "Thunderstorm":"Tormenta"

};
let divContenedor=document.getElementById("contenedor");

let imagen=document.createElement("img");
imagen.setAttribute("id","imagenValor");

let imagenTiempo=   document.createElement("img");

btnBuscar.addEventListener("click",()=> {mostrarDatos()
    divContenedor.style.transition="0.5s";
    divContenedor.style.height= "60vh" ;

})



function mostrarDatos(ubicacion){

    let APIKey='fab39eb2123e1f1999354d978289ff8c';


    let url;

    if(ubicacion){
        url=`https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&units=metric&appid=${APIKey}`;
    }else{
        let ciudad=document.getElementById("inputCiudad")
        ciudad=ciudad.value;
        url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${APIKey}`;
    }


    fetch(url)
    .then(response => response.json())
    .then(response => {

        console.log(response);
        console.log(response.cod);

        datos.innerHTML="";
        if (response.cod === '404' || response.cod === '400' ) {

            imagen.setAttribute("src","img/404.png")
            datos.style.height="200px";
            imagen.style.width="250px";
            imagen.style.height="210px";
            imagen.style.marginTop="15%";
            datos.appendChild(imagen);
            //contenedor.removeChild(buscar);
            console.log("err")
            imagenTiempo.removeAttribute("src");
        }else{
            divBuscar.innerHTML=""
            let divDatos1=document.createElement("div")
            let divDatos2=document.createElement("div")


            //Array que contiene los datos que saco de la api
            arrApi=[
                response.weather[0].main,
                response.main.temp+"ºC",
                response.main.feels_like+"ºC",
                response.main.humidity+"%",
                response.wind.speed+" Km/h",
                response.main.pressure+" hPa"
            ]

            tiempo=response.weather[0].icon;
                //FUNCION QUE SE ENCARGARA DE DECIDIR SI EL TIEMPO ES DE DIA O DE NOCHE
            tiempo=comprobarTiempo(tiempo);

            let imagenes={
                Clouds:"img/"+tiempo+"/cloud.png",
                Clear:"img/"+tiempo+"/clear.png",
                Mist:"img/"+tiempo+"/mist.png",
                Drizzle:"img/"+tiempo+"/drizzle.png",
                Rain:"img/"+tiempo+"/rain.png",
                Snow:"img/snow.png",
                Thunderstorm:"img/"+tiempo+"/thunderstorm.png",
            }

            imagenTiempo.setAttribute("src",imagenes[response.weather[0].main])

            divBuscar.appendChild(imagenTiempo);

            if(!div_lupa){
                 div_lupa=document.createElement("div");
                 div_lupa.id="div_lupa";

                let divBuscadorNuevo=document.createElement("button");
                divBuscadorNuevo.id="divBuscadorNuevo";

                div_lupa.appendChild(divBuscadorNuevo);
                let inputbq=document.createElement("input");


                inputbq.style.type="text";
                inputbq.classList.add("input");
                inputbq.placeholder="Buscar...";

                div_lupa.appendChild(inputbq);
                divContenedor.insertBefore(div_lupa,divBuscar);

                divBuscadorNuevo.addEventListener("click",()=>{

                    mostrarDatos(inputbq.value)

                });
            }

            for(let i =0;i<arrDatos.length;i++){
                let h5=document.createElement("h5")

                        //separo el primer hijo que le meto para que use el diccionario
                if(i === 0){
                    h5.innerHTML=arrDatos[i].toUpperCase()+" : "+arrDiccionario[arrApi[i]];
                }else{
                    h5.innerHTML=arrDatos[i].toUpperCase()+" : "+arrApi[i];
                }

                h5.id="h5-"+arrDatos[i];
                if (i < 3){
                    divDatos1.appendChild(h5)

                }else{
                    divDatos2.appendChild(h5)
                }
            }

            datos.appendChild(divDatos1);
            datos.appendChild(divDatos2);

        }

    })
    .catch((err)=> console.log(err))
}




function comprobarTiempo(tiempo){

    if(tiempo[2]==="d"){
        tiempo="dia";
    }else{
        tiempo="noche"
    }

    return tiempo;
}