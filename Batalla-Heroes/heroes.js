/*

// Array de villanos
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

*/

export function hello() {
  return "Hello";
}

// let botonBatalla=document.getElementById("comienzo");
// let ronda=document.getElementById("round");
// let ganador=document.getElementsByTagName("img");
// let nombreHeroe=document.getElementById("nombreHeroe");
// let nombreVillano=document.getElementById("nombreVillano");



// const heroes = [
//     { nombre: "Superman", fuerza: 100, intelecto: 90 },
//     { nombre: "Spider-Man", fuerza: 70, intelecto: 80 },
//     { nombre: "Wonder Woman", fuerza: 95, intelecto: 85 },
//     { nombre: "Batman", fuerza: 60, intelecto: 100 },
//     { nombre: "Captain America", fuerza: 80, intelecto: 75 },
//     { nombre: "The Flash", fuerza: 75, intelecto: 80 },
//     { nombre: "Black Widow", fuerza: 70, intelecto: 90 },
//     { nombre: "Green Lantern", fuerza: 85, intelecto: 80 },
//     { nombre: "Thor", fuerza: 90, intelecto: 70 },
//     { nombre: "Aquaman", fuerza: 85, intelecto: 75 }
//   ];

//   // Array de villanos
//   const villanos = [
//     { nombre: "Joker", fuerza: 50, intelecto: 95 },
//     { nombre: "Lex Luthor", fuerza: 60, intelecto: 98 },
//     { nombre: "Magneto", fuerza: 80, intelecto: 85 },
//     { nombre: "Thanos", fuerza: 90, intelecto: 75 },
//     { nombre: "Loki", fuerza: 75, intelecto: 90 },
//     { nombre: "Doctor Octopus", fuerza: 70, intelecto: 80 },
//     { nombre: "Green Goblin", fuerza: 65, intelecto: 85 },
//     { nombre: "Venom", fuerza: 75, intelecto: 70 },
//     { nombre: "Red Skull", fuerza: 70, intelecto: 75 },
//     { nombre: "Harley Quinn", fuerza: 55, intelecto: 80 }
//   ];


//   let puntosVidaHeroe=200;
//   let puntosVidaVillano=200;
//   let heroe;
//   let enemigo;
//   let modoJuego;
//   let puñetazoHeroe;
//   let puñetazoVillano;
//   function PersonajesRandom(){

//     heroe= heroes[Math.floor(Math.random()*10)];
//     enemigo= villanos[Math.floor(Math.random()*10)];

//     nombreHeroe.innerHTML=heroe.nombre;
//     nombreVillano.innerHTML=enemigo.nombre;

//   }
  
//   botonBatalla.addEventListener("click",function(){
    
//     PersonajesRandom();
//     modo();
//   });
 

//   function modo(){
//     let modoBatalla='';
//     modoBatalla=prompt("que modo quieres? INTELECTO O FUERZA")

//     switch(modoBatalla){
//          case "intelecto":
           
//               console.log("intelecto "+heroe.intelecto);//prueba
//             if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){
              

//               ronda.addEventListener("click",batallaIntelecto);
             
//             }
//             break;

//          case "fuerza":
           
//             console.log("fuerza "+heroe.fuerza);//prueba
//             if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){
//               ronda.addEventListener("click",batallaFuerza);
//             }
//             break;

//          default:
//         alert("debes escoger fuerza o intelecto");
//       }
//   }

//   function batallaFuerza(){
    
//        puñetazoHeroe= Math.floor(Math.random()*heroe.fuerza);
//        puñetazoVillano= Math.floor(Math.random()*enemigo.fuerza);

       

//       puntosVidaHeroe-=puñetazoVillano;
//       puntosVidaVillano-=puñetazoHeroe;
//       if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){
//       nombreHeroe.innerHTML=heroe.nombre+"<br/>VIDA "+puntosVidaHeroe+"<br/>fuerza: "+puñetazoHeroe;
//        nombreVillano.innerHTML=enemigo.nombre+"<br/>VIDA "+puntosVidaVillano+"<br/>fuerza: "+puñetazoVillano;
//       console.log("bueno "+puntosVidaHeroe);
//       console.log("malo "+puntosVidaVillano);
//      }else{
//       winner();
//      }
//   }


//   ronda.addEventListener("click",batallaIntelecto);

//   function batallaIntelecto(){

     
//         puñetazoHeroe= Math.floor(Math.random()*heroe.intelecto);
//         puñetazoVillano= Math.floor(Math.random()*enemigo.intelecto);
        

//       puntosVidaHeroe-=puñetazoVillano;
//       puntosVidaVillano-=puñetazoHeroe;
//       if(puntosVidaHeroe>=0 && puntosVidaVillano>=0){
//       nombreHeroe.innerHTML=heroe.nombre+"<br/>VIDA "+puntosVidaHeroe+"<br/>intelecto: "+puñetazoHeroe;
//         nombreVillano.innerHTML=enemigo.nombre+"<br/>VIDA "+puntosVidaVillano+"<br/>intelecto: "+puñetazoVillano;
//       console.log("bueno "+puntosVidaHeroe);
//       console.log("malo "+puntosVidaVillano);
      
//       }else{
//         winner();
//       }

//   }

//   function winner(){
//     nombreHeroe.innerHTML=heroe.nombre+"<br/>VIDA "+puntosVidaHeroe;
//     nombreVillano.innerHTML=enemigo.nombre+"<br/>VIDA "+puntosVidaVillano;
//     if(puntosVidaHeroe>0){
//       ganador[0].setAttribute("src","heroe.png");

//     }else{
//       ganador[0].setAttribute("src","villano.png");
//     }

//     botonBatalla.innerHTML="Nueva Batalla";

//     botonBatalla.addEventListener("click",function(){
//       puntosVidaHeroe=200;
//       puntosVidaVillano=200;
//       ganador[0].removeAttribute("src","heroe.png");
//       ganador[0].removeAttribute("src","villano.png");

//     });
//   }
  