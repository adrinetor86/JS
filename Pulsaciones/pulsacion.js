let botonPulsar=document.getElementById("boton");
let resumen=document.getElementById("resumen");
let pulsaciones=document.getElementById("pulsacion");
let error=document.getElementById("error");
let problema=document.getElementById("problema");
let intPulsaciones=0
let click=0
let dobleClick=0

botonPulsar.addEventListener("click",function(){
    intPulsaciones++;
    click++;
    console.log("Click"+click);
    pulsaciones.innerText="Pulsaciones:"+ intPulsaciones +" Pulsaciones Falsas: "+Math.round((dobleClick/click)*100)+"%";
    resumen.innerHTML="Clicks= "+click+ "  Dobles Clicks: "+dobleClick;
    comprobar();
})

botonPulsar.addEventListener("dblclick",function(){
    intPulsaciones+=2;
    dobleClick+=1;
    console.log("Doble Click:"+dobleClick);
    resumen.innerHTML="Clicks: "+click+ " Dobles Clicks: "+dobleClick;
    comprobar();
})



function comprobar(){
    if(intPulsaciones==20){

    if(Math.round((dobleClick/click)*100)>=3){

    alert("a reparacion mi rey")
    fin();
    }
}
}


function fin(){
    //location.reload();
    resumen.innerHTML="";
    pulsaciones.innerHTML="";
    error.setAttribute("src","error.png");
    problema.innerHTML="LO MANDAMOS A REPARACION";
  
}


