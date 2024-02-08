

let divBuscar=document.getElementById("buscador");
let btnBuscar=document.getElementById("btnBuscar");

let datos=document.getElementById("datos");

btnBuscar.addEventListener("click",()=> mostrarDatos())


let divContenedor=document.getElementById("contenedor");

let imagen=document.createElement("img");
imagen.setAttribute("id","imagenValor");

let imagenTiempo=   document.createElement("img");
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

            datos.appendChild(imagen);
            //contenedor.removeChild(buscar);
            console.log("err")
            imagenTiempo.removeAttribute("src");
        }else{
            divBuscar.innerHTML=""
            let divDatos1=document.createElement("div")
            let divDatos2=document.createElement("div")


            arrDatos=["tiempo","temp","humedad","viento","presion"];

            arrApi=[response.weather[0].main,response.main.temp+"ºC",response.main.humidity+"%",response.wind.speed+" Km/h",response.main.pressure+" hPa"]


            // '/' + tiempo + '/' + clima + '.png'

            let tiempo;
           tiempo=response.weather[0].icon;

            if(tiempo[2]=="d"){
                tiempo="dia";
            }else{
                tiempo="noche"
            }


            let imagenes={
                Clouds:"img/"+tiempo+"/cloud.png",
                Clear:"img/"+tiempo+"/clear.png",
                Mist:"img/"+tiempo+"/mist.png",
                Drizzle:"img/"+tiempo+"/drizzle.png",
                Rain:"img/"+tiempo+"/rain.png",
                Snow:"img/"+tiempo+"/snow.png",
                Thunderstorm:"img/"+tiempo+"/thunderstorm.png",
            }


            imagenTiempo.setAttribute("src",imagenes[response.weather[0].main])

            divBuscar.appendChild(imagenTiempo);
            let div_lupa=document.getElementById("div_lupa");

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

                h5.innerHTML=arrDatos[i].toUpperCase()+" : "+arrApi[i];
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




