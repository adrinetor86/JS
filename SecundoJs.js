/*let miParrafo= document.getElementsByTagName("p");

miParrafo[0].innerHTML="Hola";


let misParrafos= document.getElementsByClassName("clases");

misParrafos[0].innerHTML="hola q hace";


let miDiv= document.getElementById("padre");

let miHijo=document.createElement("p");
miHijo.innerHTML="Texto";
miDiv.appendChild(miHijo);

PREGUNTAS Y RESPUESTAS,3 PREGUNTAS, V-F,
RESUMEN DE LA PARTIDA USANDO 1 PREGUNTA(OK VERDE, NO OK ROJO),
AL FINAL (TODAS OK= MUY BIEN, NO TODAS BIEN = ERES MALO)


let miPrimerParrafo=document.getElementById("pregunta1");
miPrimerParrafo.classList.add("valida")

let miSegundoParrafo=document.getElementById("pregunta2");
miPrimerParrafo.classList.add("invalida");
*/


let arrPreguntas=["Eres humano","Dime cuantas ruedas tiene un coche","Capital de España"];
let respuestasCorrectas=["si","4","madrid"];
let aciertos=0;
let fallos=0;

let parrafos=document.getElementsByTagName("p");

for(let i=0;i<arrPreguntas.length;i++){
    let miRespuesta=prompt(arrPreguntas[i]);
    
    if(miRespuesta==respuestasCorrectas[i]){
        parrafos[i].classList.add("valida")
        aciertos++;
    }else{
        parrafos[i].classList.add("invalida")
        fallos++;
    }
    
}
for(i=0;i<parrafos.length;i++){
    parrafos[i].innerText="pregunta"+(i+1);
}
let resumen;

if(aciertos==3){
     resumen=document.getElementById("Resumen").innerHTML="BIEN MAQUINA";

}else{
     resumen=document.getElementById("Resumen").innerHTML="PAL LOBBY MAKI, TOCA ESTUDIAR";
}

