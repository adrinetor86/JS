/*let miArray=[1,5,7,84,72,4,5,122];

let miNodo = document.getElementById("array") //te pilla el htlm con ese id

miNodo.innerHTML=miArray;//lo mete en el html

let intSuma=0;//hay q darle valor pq si no pone NaN

for(let i=0;i<miArray.length;i++){
    intSuma+=miArray[i];
}
let resultado= document.getElementById("resultado");

resultado.innerHTML=intSuma;
*/
let miArray=[3,4,5,6,7];
let miVariable2=prompt("Dame numeros separados por comas:");
let miVariable=prompt("Dime la operacion");
miVariable2=miVariable2.split(',');
let intResultado=1;
if(miVariable==='suma'){
    intResultado=0;
    for(let i=0;i<miVariable2.length;i++){
        intResultado+=parseInt(miVariable2[i]);
    }
}else if(miVariable=='multiplicacion'){
    for(let i=0;i<miVariable2.length;i++){
        intResultado*=parseInt(miVariable2[i]);
    }
};

alert (intResultado);
