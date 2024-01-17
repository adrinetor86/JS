class Persona{
    #_nombre;
    #_apellido;
    #_edad;
    bolloFavorito;
    constructor(nombre,apellido,edad,bollo){
        this.#_nombre=nombre;
        this.#_apellido=apellido;
        this.#_edad=edad;
        this.bolloFavorito=bollo;
    }


    // tuNombre (nombrellega,apellidollega){
    //   console.log(nombrellega+' '+apellidollega)  
    // }
     tuNombre (){
      return (this.#_nombre);  
    }
}
let alumno1=new Persona("Adrian","Jacek",19,"napolitanas");

// console.log(alumno1.tuNombre());
console.log(alumno1.bolloFavorito);