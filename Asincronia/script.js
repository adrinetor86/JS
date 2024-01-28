let miPromesa=new Promise((resolve ,reject)=> {
    let suma = 3 + 2

    function pruebaSuma() {
        if (suma > 2222) resolve(`La suma da ${suma}`);
        else reject("A BUENO TE ME CALMAS CRACK")
    }

    setTimeout(()=>{
        //resolve("Adrian")},2000)
        resolve(pruebaSuma())},2000)
})

miPromesa
    //then cuando sea resolve
    .then((resultado)=> {console.log(resultado)})
    //catch cuando sea reject
    .catch(function (cagada){
        console.log(cagada)
    })


// function miFunction(){
//
//       let nombre="Adrian";
//     return "nombre";
// }
 let  miFunction = function(){

    let nombre="Adrian";
    console.log(nombre);
    return nombre;
 }


setTimeout(miFunction,1000)


// .then(function(cosa){
//
// })
