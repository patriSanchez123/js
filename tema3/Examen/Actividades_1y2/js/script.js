///////////////////////////// FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////

// ACTIVIDAD 1:
// Clase Producto
class Producto {

    #id;
    #descripcion;
    #precio;
/**
 * Constructor de articulos
 * @param {number} id 
 * @param {String} descripcion 
 * @param {float} precio 
 */
    constructor(id, descripcion, precio) {
        this.id = id;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    /**
     * Devuelve el id de articulos
     */
    get id() {
        return this.#id;
    }
    /**
     * Devuelve la descripcion del articulo
     */
    get descripcion() {
        return this.#descripcion;
    /**
     * Devuelve el precio del articulo
     *  */    
    } get precio() {
        return this.#precio
    }

    /**
     * Método que modifica el id del articulo
     * @param {number} id  
     */
    set id(id) {
        this.#id = id;
    }

     /**
     * Método que modifica la descripcion del articulo
     * @param {string} descripcion  
     */
    set descripcion(descripcion) {
        this.#descripcion = descripcion;
    }
    
     /**
     * Método que modifica el precio del articulo
     * @param {float} precio  
     */
    set precio(precio) {
        this.#precio = precio;
    }

    /**
     * Retorna la cadena con los atributos del producto
     * @returns String
     */
    toString() {

        return `(${this.id}) ${this.descripcion} – ${this.precio}€.`;
    }
}


//Clase ArticuloFactura
class ArticuloFactura extends Producto {

    #cantidad;
    /**
     * 
     * @param {number} id 
     * @param {string} descripcion 
     * @param {float} precio 
     * @param {number} cantidad 
     */
    constructor(id, descripcion, precio, cantidad) {
        super(id, descripcion, precio);
        this.cantidad = cantidad;
    }
    /**
     * Método que devuelve la cantidad del articulo de la factura
     */
    get cantidad() {
        return this.#cantidad
    }
    /**
     * Método que modifica la cantidad del articulo de la factura
     */
    set cantidad(cantidad) {
        this.#cantidad = cantidad;
    }
    /**
     * Método que retorna el total de los articulo de la factura
     * @returns float
     */
    getTotal(){
        let total=this.precio*this.cantidad;
        return total;
    }
    /**
     * Método que retorna las propiedades de la factura
     * @returns String
     */
    toString() {

        return `(${this.id}) ${this.descripcion} – ${this.precio}€ x ${this.cantidad}`;
    }


}

//ACTIVIDAD 2:


/**
 * Función que imprime por pantalla la factura
 * através de un bucle forEach donde llamamos a los
 * métodos previamente creados en las clase
 * 
 */
function crearFactura(){
const FACTURA=[
    articulo1= new ArticuloFactura(8,"Almendras bolsa 200gr",3.12,3),
    articulo2= new ArticuloFactura(12,"Harina bolsa 1Kg",2.30,1),
    articulo3=new ArticuloFactura(4,"Piña conserva lata 500gr",2.10,4)]
    console.log("FACTURA");
    FACTURA.forEach(f=>console.log(`${f.toString()} - ${f.getTotal().toFixed(2)}€`));
    console.log("TOTAL - " +FACTURA.reduce((acumulador,valor)=>acumulador+valor.precio,0));
}

//LLamamos a la funcón crear factura pra que la imprima
crearFactura();

///////////////////////////// FIN FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////