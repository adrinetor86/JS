

class Pokemon{

    name;
    type;

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    get getName() {
        return this._name;
    }

     setNombre(valor) {
        this._name = valor;
    }


    get getType() {
        return this._type;
    }

    set setType(value) {
        this._type = value;
    }

}

export {Pokemon}