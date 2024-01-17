let botonBatalla=document.getElementById("comienzo");
let ronda=document.getElementById("round");
let ganador=document.getElementsByTagName("img");
let nombreHeroe=document.getElementById("nombreHeroe");
let nombreVillano=document.getElementById("nombreVillano");
let cargarRegistro=document.getElementById("cargarHistorico");
let parrafoRegistro=document.getElementById("registro");

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
       
              //ronda.addEventListener("click",batalla(heroes.intelecto,villanos.intelecto));
              ronda.addEventListener("click",batallaIntelecto);
             
            }
            break;

         case "fuerza":
          
            if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){
              //ronda.addEventListener("click",batalla(heroes.fuerza,villanos.fuerza));
              ronda.addEventListener("click",batallaFuerza);
            }
            break;

         default:
        alert("debes escoger fuerza o intelecto");
      }
  }
//  function batalla(golpeHeroe,golpeEnemigo,tipo){
//   puntosVidaHeroe=200;
//   puntosVidaVillano=200;
//   console.log("amai: "+golpeHeroe)
//   puñetazoHeroe= Math.floor(Math.random()*golpeHeroe);
//   puñetazoVillano= Math.floor(Math.random()*golpeEnemigo);
  
//  if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){
//   puntosVidaHeroe-=puñetazoVillano;
//   puntosVidaVillano-=puñetazoHeroe;
//  nombreHeroe.innerHTML=heroe.nombre+"<br/>VIDA"+puntosVidaHeroe+"<br/> "+tipo+": "+puñetazoHeroe;
//   nombreVillano.innerHTML=enemigo.nombre+"<br/>VIDA "+puntosVidaVillano+"<br/>"+tipo+": "+puñetazoVillano;
//  console.log("bueno "+puntosVidaHeroe);
//  console.log("malo "+puntosVidaVillano);
// }else{
//  winner();
// }
//  }
  function batallaFuerza(){
    
       puñetazoHeroe= Math.floor(Math.random()*heroe.fuerza);
       puñetazoVillano= Math.floor(Math.random()*enemigo.fuerza);

       

      puntosVidaHeroe-=puñetazoVillano;
      puntosVidaVillano-=puñetazoHeroe;
      if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){
      nombreHeroe.innerHTML=heroe.nombre+"<br/>VIDA "+puntosVidaHeroe+"<br/>fuerza: "+puñetazoHeroe;
       nombreVillano.innerHTML=enemigo.nombre+"<br/>VIDA "+puntosVidaVillano+"<br/>fuerza: "+puñetazoVillano;

     }else{
      winner();
     }
  }


   //ronda.addEventListener("click",batalla);

  function batallaIntelecto(){

        puñetazoHeroe= Math.floor(Math.random()*heroe.intelecto);
        puñetazoVillano= Math.floor(Math.random()*enemigo.intelecto);
        

      puntosVidaHeroe-=puñetazoVillano;
      puntosVidaVillano-=puñetazoHeroe;
      if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){
      nombreHeroe.innerHTML=heroe.nombre+"<br/>VIDA "+puntosVidaHeroe+"<br/>intelecto: "+puñetazoHeroe;
        nombreVillano.innerHTML=enemigo.nombre+"<br/>VIDA "+puntosVidaVillano+"<br/>intelecto: "+puñetazoVillano;
      console.log("bueno "+puntosVidaHeroe);
      console.log("malo "+puntosVidaVillano);
      
      }else{
        winner();
      }

  }

  function winner(){
    registroBatallas.numeroBatalla=intBatalla;
    registroBatallas.nombreBueno=heroe.nombre;
    registroBatallas.nombreMalo=enemigo.nombre;
    
    //ronda.style.display="none";
    if(puntosVidaHeroe<=0){
      nombreHeroe.innerHTML=heroe.nombre+"<br/>VIDA: 0";
      nombreVillano.innerHTML=enemigo.nombre+"<br/>VIDA "+puntosVidaVillano;
      registroBatallas.ganador=enemigo.nombre;
    }else{
      nombreHeroe.innerHTML=heroe.nombre+"<br/>VIDA: "+puntosVidaHeroe;
      nombreVillano.innerHTML=enemigo.nombre+"<br/>VIDA: 0";
      registroBatallas.ganador=heroe.nombre;
    
    if(puntosVidaHeroe>0){
      ganador[0].setAttribute("src","heroe.png");
      //nombreHeroe.innerHTML=heroe.nombre+"<br/>VIDA: "+puntosVidaHeroe;
    //nombreVillano.innerHTML=enemigo.nombre+"<br/>VIDA "+puntosVidaVillano;
    }else {
      ganador[0].setAttribute("src","villano.png");
    }
    
    arrayRegistro.push(registroBatallas);
    cargarRegistro.addEventListener("click",function(){
      parrafoRegistro.innerHTML=arrayRegistro[0].nombreBueno;

      registroBatallas=document.createElement("table");

      // for(intCont=0;intCont<arrayRegistro.length;intCont++){

      // }
    })
    botonBatalla.innerHTML="Nueva Batalla";


    botonBatalla.addEventListener("click",function(){
      ronda.style.display="block";
      puntosVidaHeroe=200;
      puntosVidaVillano=200;
      ganador[0].removeAttribute("src","heroe.png");
      ganador[0].removeAttribute("src","villano.png");

    });
  }
}


let intBatalla=0;
let arrayRegistro=[];
let registroBatallas={
  numeroBatalla:arrayRegistro.length+1,
  nombreBueno:"paco",
  nombreMalo:"",
  ganador:""
}