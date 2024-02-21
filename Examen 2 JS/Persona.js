class Persona{

    nombre;
    cp;
    telefono


    constructor(nombre, cp, telefono) {
        this._nombre = nombre;
        this._cp = cp;
        this._telefono = telefono;
    }


    get getNombre() {
        return this._nombre;
    }

    set setNombre(value) {
        this._nombre = value;
    }

    get getCp() {
        return this._cp;
    }

    set setCp(value) {
        this._cp = value;
    }

    get getTelefono() {
        return this._telefono;
    }

    set setTelefono(value) {
        this._telefono = value;
    }
}


export {Persona}