import {productos} from "../db/db.js";
import {categorias} from "../db/db.js";


export class ControladorDB{

/***
 * Función que filtra retorna un array
 */
static filtarProductosCategorias(idCategoria){
    
  const  productosFiltrados=productos.filter(p=>p.categoria === idCategoria);
  return productosFiltrados;
}
   
/**
 * Método que muestra por pantalla los productos en el index
 */
 static getProductos(){
    return productos;
 }

static getProductoId(id){

   const producto=productos.filter(p=>p.id === id);
   return producto;
}

 /**
  * Método que muestra por pantalla los checkbox en el index
  */
 static getCategorias(){
    return categorias;
 }



}

export class ControladorCarrito{

/**
 * Función que comprueba si existe el producto en  el carrito
 * @param {Strind} id Identidicador del producto 
 * @returns 
 */
static comprobarProductoCarritoId(id){
   let encontrado=false;
   if(this.productoCarritoId(id) !== null){
      encontrado=true;
   }
   return encontrado;
}

/**
 * Función que muestra el producto del carrito por su id
 * @param {String} id 
 * @returns 
 */
static productoCarritoId(id){
   const producto=JSON.parse(localStorage.getItem(id));
   return producto;

}

/**
 * Función que inserta en localStorage un producto en el carrito
 * @param {Objeto} producto 
 */
static aniadirCarrito(producto){
   const id=producto.id;
   if(this.comprobarProductoCarritoId(id)){
       producto=this.productoCarritoId(id);
      producto.cantidad += 1;
   }else{
      producto.cantidad=1;
   }
   localStorage.setItem(id,JSON.stringify(producto));
}

/**
 * Función que muestra los productos que se encuentran en el carrito
 */
static getProductosCarrito(){

   let carritosProductos=[];
   for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let producto=localStorage[key];
      carritosProductos.push(JSON.parse(producto)); 
   }
   return carritosProductos;
}

static eliminarProductoCarritoId(id){
   localStorage.removeItem(id);
}

static borrarCarrito(){
   localStorage.clear();
}

}