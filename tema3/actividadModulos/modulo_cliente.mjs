class Persona {
    #nombre;
    #edad;
    constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
    }
    toString() {
    return `Nombre: ${this.#nombre}\nEdad: ${this.#edad}`;
    }
    }
    class Cliente extends Persona {
    #tipo;
    constructor(nombre, edad, tipo) {
    // Se invoca al constructor de la clase padre
    super(nombre, edad);
    this.#tipo = tipo;
    }
    toString() {
    // Se invoca al método "toString" de la clase padre
    let resultado = super.toString();
    resultado += `\nTipo de cliente: ${this.#tipo}`;
    return resultado;
    }
    }
    const cl = new Cliente("Eduardo", 36, "Gold");
    console.log(cl.toString()); // Se utiliza el del objeto Cliente