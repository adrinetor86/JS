
let promesa = new Promise((resolve, reject) =>{
    let valorNumero=prompt("Dame un numero");

    //console.log(valorNumero);
        function comprobarNumero(valorNumero){

            // TERNARIO
            return (valorNumero % 2 === 0) ? resolve('ES PAR') : reject("ES IMPAR");

            // if((valorNumero % 2) === 0) {
            //
            //     resolve("ES PAR");
            // }else{
            //
            //     reject("ES IMPAR")
            // }
        }
      comprobarNumero(valorNumero)
}

);

//
// let promesa = new Promise(resolve,reject) {
//     let valorNumero=prompt("Dame un numero");
//     return new Promise((resolve,reject)=> {
//         if (!isNaN(valorNumero)) {
//             if ((valorNumero % 2) === 0) {
//                 resolve("ES PAR");
//             }
//             reject("ES IMPAR")
//         }
//         reject("ESCRIBE UN NUMERO")
//
//     }}

promesa
    .then((resultado)=>console.log(resultado))
    .catch((error) => console.log(error))
