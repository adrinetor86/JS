let eleccion=document.getElementById("contenedor");
let miBoton=document.getElementById("boton");
let arrRespuesta=[];
let arrSimon=[];
let rondaActual = 1;
let rondaFinal = 20;
let isGameOver = false;
let arrColores=["Rojo","Azul","Verde","Amarillo"];


// document.addEventListener("keypress",function(event){
//     if(event.key=='Enter' && start==true){
//         document.getElementsByTagName("h1")[0].innerHTML="VAMOH A JUGAR";
//         start=false;
//         almacenar();
//     }
// })

// miBoton.addEventListener("click",function(e){
//     rondaActual = 1;
//     almacenar();
//     console.log(arrSimon)
//     game();
//     //iniciaJuego();

//  });
//  function almacenar(){
//     let choose=Math.floor(Math.random()*4);
//     arrSimon.push(arrColores[choose]);

// }

//     var i=0;
// function game(){
//     if(document.activeElement.id==arrSimon[i] ){
//         if(i==arrSimon.length-1){
//             alert("Correcto");
//             almacenar();
//             i=0;
//         }else{
//             i++;
//         }
//     }else{
//         alert("WRONG");
//         Window.location.reload();
//     }
//     return;
// }

// function iniciaJuego() {
    // arrSimon[0]="rojo";
    // llamaEvento();
    // if(arrRespuesta[0]===arrSimon[1]){
    //     console.log("maquina");
    // }else{
    //     console.log("mal")
    // }
    //addNuevoColor();
    //addToUserSequence();
    // addNuevoColor();
    // llamaEvento()

  
   // console.log(arrSimon)
//     do {
//         playSequence()
//         addNuevoColor();
//         console.log(arrSimon)
//         llamaEvento();
    
//         if(arrSimon[arrSimon.length]===arrRespuesta[arrRespuesta.length-1]){
//             rondaActual++;
//             console.log("bien")
//         }else{
//             isGameOver==true;
//             console.log("hola");
            
//         }
//      } while(rondaActual < rondaFinal && isGameOver === true);
// }

// function addNuevoColor() {
//     let numeroAleatorio = arrColores[numeroRandom()];
//     arrSimon.push((numeroAleatorio));
//     console.log(numeroAleatorio);
  
// }

// function numeroRandom(){
//     return (Math.floor(Math.random()*4));
// }

// function playSequence() {
//     let i = 0;
//     const intervalId = setInterval(function() {
    
//       i++;
//       if (i >= arrSimon.length) {
//         clearInterval(intervalId);
//       }
//     }, 1000);
//   }


// eleccion.addEventListener("click",function(e){
    
//     arrRespuesta.push(e.target.id);
//     console.log(arrRespuesta);
    
// })


// function llamaEvento(){
//     eleccion.addEventListener("click",function(e){
//         let color=arrColores[e.target.id]
//         arrRespuesta.push(color);
//         console.log(arrRespuesta);

//     })
// }

// function addToUserSequence() {
// eleccion.addEventListener("click",function(e){
//     let color=arrColores[e.target.id]
//     arrRespuesta.push(color);
//     checkUserInput();

//   })}

//   function checkUserInput() {
//     for (let i = 0; i < arrRespuesta.length; i++) {
//       if (arrRespuesta[i] !== arrSimon[i]) {
//         alert('Wrong sequence! Try again.');

//         return;
//       }
//     }
//     if (arrRespuesta.length === arrSimon.length) {
//         if (level === 5) {
//           alert('Congratulations! You won!');
//           resetGame();
//         } else {
//           level++;
//           arrRespuesta = [];
//           playSequence();
//         }
//       }
//     }



// arrSimon.push(Math.floor(Math.random()*4));
// console.log(arrSimon)

// for(i=0;i<arrSimon.length;i++){
//     llamaEvento();
//     if(arrSimon[i]==arrRespuesta[i]){
//         numeroRandom();

//     }else{
//         console.log("perdiste")
//     }
// }



//colores.addEventListener("")*/

//let miBoton=document.getElementById("boton");
let start=true;
let color=["verde","rojo","amarillo","azul"];
let store=[];

miBoton.addEventListener("click",function(e){
  
    if(start==true){
       document.getElementsByTagName("h1")[0].innerHTML="VIVIR O MORIR, TU DECIDES";
       let audio=new Audio("SAW.mp3");
        audio.play();
        document.getElementsByTagName("body")[0].classList.add("SAW");
       start=false;
       to_store();
    }
})

function to_store(){
    let choose=Math.floor(Math.random()*4);
    document.getElementById(color[choose]).classList.add("add");
    
    store.push(color[choose]);
    setTimeout(() => {
    document.getElementById(color[choose]).classList.remove("add");
    }, 200);
}
let i=0;
function game(){
    if(document.activeElement.id==store[i]){
        if(i==store.length-1){
            alert("CORRECT !!");
            to_store();
            i=0;
        }
        else{
            i++;
        }
    }
    else{
        alert("WRONG !!");
        Window.location.reload();
    }
    return;
}
function jugar(){

}
