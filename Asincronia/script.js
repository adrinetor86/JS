let miForm=document.getElementById("parrafo");

let miDatos=fetch("https://swapi.dev/api/people/1").then();



miForm.addEventListener("click",(e )=>{
    this.elemento="tres"
    console.log("hola");
})

let var1=2;

function miScope(){

    let var1= 3;

    console.log(var1);
}

class Hijo{

    constructor() {
        this.nombre="Adrian";
        this.apellido="Jacek";
    }


    miNombre=()=>{

        return this.nombre;
    }

    miNombre2() {

        return this.nombre;
    }
}

let miHijo=new Hijo()

//
// console.log(miHijo.miNombre());
// console.log(miHijo.miNombre2())

let miObjeto={


    nombre:"Adrian",
    miCosa: ()=>{
        return this.nombre;
    }

}


let miObjeto2={


    nombre:"Adrian2",
    miCosa: function(){
        return this.nombre;
    }

}

console.log(miObjeto.miCosa())
console.log(miObjeto2.miCosa())