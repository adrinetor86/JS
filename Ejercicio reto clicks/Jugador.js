//Clase Jugador
class Jugador {
    #_nombre
    #_apellidos
    #_edad
    #_entrenamiento

    constructor(nombre = "John", apellidos = "Doe", edad = 18) {
        this.#_nombre = nombre;
        this.#_apellidos = apellidos;
        this.#_edad = edad;
        this.#_entrenamiento = 0;
    }

    //Genero Getters y Setters

    get nombre() {
        return `${this.#_nombre} ${this.#_apellidos}`;//crea un string que se suma con el siguiente automaticamente
    }

    set nombre(nombre) {
        this.#_nombre = nombre;
    }

    set apellidos(apellidos) {
        this.#_apellidos = apellidos;
    }

    get edad() {
        return this.#_edad;
    }

    set edad(edad) {
        this.#_edad = edad;
    }

    get entrenamiento() {
        return this.#_entrenamiento;
    }

    set entrenamiento(nivel) {
        this.#_entrenamiento = nivel;
    }
}

// Versión con modificación de nodos

/*
function insertarJugador(){
    let campoNombre = document.getElementById("nombreJugador").value;
    let campoApellidos = document.getElementById("apellidosJugador").value;
    let campoEdad = document.getElementById("edadJugador").value;

    let nuevoJugador = new Jugador(campoNombre, campoApellidos, campoEdad)
    misJugadores.push(nuevoJugador)
    let camposJugadores = document.getElementsByClassName("addJugador")[0];
    addJugador = retirarNodos();
    //console.log(misJugadores[0])
}


function retirarNodos(){

    let contenedor = document.getElementsByClassName("contenedor")[0]
    let camposJugadores = document.getElementsByClassName("addJugador")[0];
    nuevoJugador.addEventListener("click", aniadirJugador)
    return contenedor.removeChild(camposJugadores)

}
*/

export default Jugador;