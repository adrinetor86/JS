const palabras = ["avion", "peral", "junco", "islas", "watio"];
let nuevaPartida=document.getElementById("newGame");
let inputPalabra=document.getElementById("wordInput");
let botonComprobar=document.getElementById("checkWord");
let cuadroLetra=document.getElementsByClassName("letterBox");
let contenedor=document.querySelector("#datosPartida");
let numPartida=0;
let palabra;

botonComprobar.addEventListener("click",comprobarPalabra);
nuevaPartida.addEventListener("click",partida);
  

   botonComprobar.toggleAttribute('disabled')
  

   //funcion para comenzar la partida
    function partida(){

        botonComprobar.removeAttribute('disabled')
        nuevaPartida.toggleAttribute('disabled');
        
        numPartida+=1;
        resetearCuadros()
    intentos=5;
    palabraRandom();
   
    }
   
   

        //FUNCION QUE GENERA UNA PALABRA RANDOM
    function palabraRandom(){

        palabra=palabras[Math.floor(Math.random()*palabras.length)];


    console.log(palabra);

    }
    
    let intentos=5;
    let victoria;
    function comprobarPalabra(){
        let valorInput=inputPalabra.value;
        
        if(intentos>0 ){

            for(let i=0;i<valorInput.length;i++){

            if(palabra[i]===valorInput[i]){
                cuadroLetra[i].classList.replace("incorrect","correct")
                cuadroLetra[i].classList.add("correct")
                cuadroLetra[i].innerHTML=valorInput[i];

            }else {
                cuadroLetra[i].classList.add("incorrect")
            }
           
        }

        if(palabra==valorInput){
            botonComprobar.toggleAttribute('disabled')
            nuevaPartida.removeAttribute('disabled')
            victoria=true;
            mostrarResulado()
        }

    }else{
        
       // console.log("INTENTOS VIsta "+intentos)
        victoria=false;
        mostrarResulado();
        botonComprobar.toggleAttribute('disabled')
        nuevaPartida.removeAttribute('disabled')

    }
    intentos-=1;
    console.log("INTENTOS "+intentos)

    }

    //FUNCION PARA RESETEAR LOS CUADROS DE LAS LETRAS
    function resetearCuadros(){
    
  
        for(let j=0;j<5;j++){
            cuadroLetra[j].innerHTML="?";
            
            cuadroLetra[j].classList.remove("correct")
            cuadroLetra[j].classList.remove("incorrect")
        }
     
    }

    //FUNCION PARA MOSTRAR SI SE HA GANADO O PERDIDO LA PARTIDA
    function mostrarResulado(){
    let parrafo=document.createElement("p");

    if(victoria==true){
        parrafo.innerHTML="El resultado de la partida "+numPartida+" ha sido Victoria"
    }else{
        parrafo.innerHTML="El resultado de la partida "+numPartida+" ha sido Derrota"
    }

    contenedor.appendChild(parrafo);
    }
        




