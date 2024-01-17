let botonBatalla=document.getElementById("comienzo");
let ronda=document.getElementById("round");
let ganador=document.getElementsByTagName("img");
let nombreHeroe=document.getElementById("nombreHeroe");
let nombreVillano=document.getElementById("nombreVillano");
let mostrarRegistro=document.getElementById("cargarHistorico");
let video=document.getElementsByTagName("video");
let arrRegistro=[];


const heroes = [
    { nombre: "Superman", fuerza: 100, intelecto: 90 },
    { nombre: "Spider-Man", fuerza: 70, intelecto: 80 },
    { nombre: "Wonder Woman", fuerza: 95, intelecto: 85 },
    { nombre: "Batman", fuerza: 60, intelecto: 100 },
    { nombre: "Captain America", fuerza: 80, intelecto: 75 },
    { nombre: "The Flash", fuerza: 75, intelecto: 80 },
    { nombre: "Black Widow", fuerza: 70, intelecto: 90 },
    { nombre: "Green Lantern", fuerza: 85, intelecto: 80 },
    { nombre: "Thor", fuerza: 90, intelecto: 70 },
    { nombre: "Aquaman", fuerza: 85, intelecto: 75 }
  ];

  // Array de villanos
  const villanos = [
    { nombre: "Joker", fuerza: 50, intelecto: 95 },
    { nombre: "Lex Luthor", fuerza: 60, intelecto: 98 },
    { nombre: "Magneto", fuerza: 80, intelecto: 85 },
    { nombre: "Thanos", fuerza: 90, intelecto: 75 },
    { nombre: "Loki", fuerza: 75, intelecto: 90 },
    { nombre: "Doctor Octopus", fuerza: 70, intelecto: 80 },
    { nombre: "Green Goblin", fuerza: 65, intelecto: 85 },
    { nombre: "Venom", fuerza: 75, intelecto: 70 },
    { nombre: "Red Skull", fuerza: 70, intelecto: 75 },
    { nombre: "Harley Quinn", fuerza: 55, intelecto: 80 }
  ];


  let puntosVidaHeroe=200;
  let puntosVidaVillano=200;
  let heroe;
  let enemigo;
  let modoJuego;
  let puñetazoHeroe;
  let puñetazoVillano;
  let vencedor="";
  function PersonajesRandom(){

    heroe= heroes[Math.floor(Math.random()*10)];
    enemigo= villanos[Math.floor(Math.random()*10)];

    nombreHeroe.innerHTML=heroe.nombre;
    nombreVillano.innerHTML=enemigo.nombre;

  }

  botonBatalla.addEventListener("click",function(){

    PersonajesRandom();
    modo();
  });


  function modo(){
    let modoBatalla='';
    modoBatalla=prompt("que modo quieres? INTELECTO O FUERZA")

    switch(modoBatalla){
         case "intelecto":

            if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){
              ronda.addEventListener("click",batallaIntelecto);
            }
            break;

         case "fuerza":

            if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){
              ronda.addEventListener("click",batallaFuerza);
            }
            break;

         default:
        alert("debes escoger fuerza o intelecto");
      }
  }

  function batallaFuerza(){
    if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){
       puñetazoHeroe= Math.floor(Math.random()*heroe.fuerza);
       puñetazoVillano= Math.floor(Math.random()*enemigo.fuerza);

      puntosVidaHeroe-=puñetazoVillano;
      puntosVidaVillano-=puñetazoHeroe;
      console.log("bueno "+puntosVidaHeroe);
      console.log("malo "+puntosVidaVillano);
     }else{
      winner();
     }
  }


  ronda.addEventListener("click",batallaIntelecto);

  function batallaIntelecto(){

    puñetazoHeroe= Math.floor(Math.random()*heroe.intelecto);
    puñetazoVillano= Math.floor(Math.random()*enemigo.intelecto);

    nombreHeroe.innerHTML=heroe.nombre+" <br> Vida: "+puntosVidaHeroe+"<br> Golpe: "+puñetazoHeroe;
    nombreVillano.innerHTML=enemigo.nombre+" <br> Vida: "+puntosVidaVillano+"<br> Golpe: "+puñetazoVillano;

      if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){

      puntosVidaHeroe-=puñetazoVillano;
      puntosVidaVillano-=puñetazoHeroe;

      console.log("bueno "+puntosVidaHeroe);
      console.log("malo "+puntosVidaVillano);
      }else{
        winner();
      }

  }

  function winner(){
    ronda.style.display="none";

    if(puntosVidaHeroe>0){
      nombreHeroe.innerHTML=heroe.nombre+" <br> Vida: "+puntosVidaHeroe;
      nombreVillano.innerHTML=enemigo.nombre+" <br> Vida: 0";
      ganador[0].setAttribute("src","heroe.png");
      vencedor=nombreHeroe;
    }else{
      nombreHeroe.innerHTML=heroe.nombre+" <br> Vida: 0";
      nombreVillano.innerHTML=enemigo.nombre+" <br> Vida: "+puntosVidaVillano;
      //ganador[0].setAttribute("src","villano.png");
      video[0].setAttribute("src","Thanos.mp4");
      vencedor=nombreVillano;
    }




    arrRegistro.push({
      ronda: arrRegistro.length + 1,
      bueno: heroe.nombre,
      malo: enemigo.nombre,
      ganador:vencedor.textContent,
    });


    botonBatalla.innerHTML="Nueva Batalla";

    botonBatalla.addEventListener("click",function(){
      ronda.style.display="block";
      puntosVidaHeroe=200;
      puntosVidaVillano=200;
      ganador[0].removeAttribute("src","heroe.png");
      ganador[0].removeAttribute("src","villano.png");
      video[0].removeAttribute("src","Thanos.mp4");

    });

  }


  function historialBatallas(){
    let divHistorico=document.getElementById("divHistorico");
    let table=document.createElement("table");

      if(divHistorico.classList.contains('activo')){
        borrarTabla(divHistorico);

      }else{
        divHistorico.classList.add('activo');

        for(let i=0;i<arrRegistro.length+1;i++){
          let fila=document.createElement("tr");

          if(i==0){
            fila.appendChild(document.createElement("th")).textContent="Combate";
            fila.appendChild(document.createElement("th")).textContent="Heroe";
            fila.appendChild(document.createElement("th")).textContent="Enemigo";
            fila.appendChild(document.createElement("th")).textContent="Ganador";
          }else{
            fila.appendChild(document.createElement("td")).innerText=arrRegistro[i-1].ronda;
            fila.appendChild(document.createElement("td")).innerText=arrRegistro[i-1].bueno;
            fila.appendChild(document.createElement("td")).innerText=arrRegistro[i-1].malo;
            fila.appendChild(document.createElement("td")).innerText=arrRegistro[i-1].ganador;
          }
          document.getElementById("divHistorico").appendChild(table.appendChild(fila));
        }
      }
    };
  function borrarTabla(divHistorico){
    divHistorico.innerHTML="a";
    divHistorico.classList.remove('activo');
  }

  mostrarRegistro.addEventListener("click", function (){
    historialBatallas();
      })

       
 
