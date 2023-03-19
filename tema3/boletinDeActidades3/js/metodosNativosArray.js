/************************************************************ */
/** 1. Añadir o eliminar un elemento al principio o al final **/
/************************************************************ */
const aLetras = ["b", "c", "d"];
//a. (push) Añade la letra "e" al final del array.
aLetras.push("e");
//b. (pop) Elimina el último elemento del array.
aLetras.pop();

//c. (unshift) Añade la letra "a" al principio del array.
aLetras.unshift("a");
//d. (shift) Elimina el primer elemento del array.
aLetras.shift();

/****************************************** */
/** 2. Añadir multiples elementos al final **/
/****************************************** */
const aNumeros = [1, 2, 3];
//a. (concat) Añade al final del array los elementos 4, 5, 6.

//sirve tanto para concatenar arrays como para añadirle parametros
const aNum = aNumeros.concat(4, 5, 6);
console.log(aNum);

/************************** */
/** 3. Obtener un subarray **/
/************************** */
const aNumeros2 = [1, 2, 3, 4, 5];
//a. (slice) Extrae el array [4, 5]

//slice da un nuevo array cortandolo, el primer parametro indica el principio y el segundo parametro el final (se cuenta desde el principio de nuevo)
console.log(aNumeros2.slice(3));

//b. (slice) Extrae el array [3, 4]
console.log(aNumeros2.slice(2, 4));
//c. (slice) Extrae el array [2, 3]
console.log(aNumeros2.slice(1, 3));

/******************************************************** */
/** 4. Añadir o eliminar elementos en cualquier posicion **/
/******************************************************** */
const aNumeros3 = [1, 5, 7];
//a. (splice) Añade los elementos 2, 3 y 4 después del 1.

/**
 * splice se puede borrar, insertar o ambas cosas
 * El primer elemento indica el indice que se va a borrar o insertar, el segundo elemento indica
 * los elementos que se van a borrar contando desde el indice del primer elemento.
 * se cuenta con el indice 1
 */
aNumeros3.splice(1, 0, 2, 3, 4);

//b. (splice) Añade el elemento 6 entre el 5 y el 7.
aNumeros3.splice(5, 0, 6, 7);

//c. (splice) Elimina los elementos 2 y 3.
aNumeros3.splice(1, 2);

console.log(aNumeros3);
/************************************* */
/** 5. Rellenar un array con un valor **/
/************************************* */
//a. (fill) Crea un nuevo array con 5 posiciones con el valor 1.

/**
 * fill sirve para rellenar los arrays con un mismo valor
 * si el array está previamente lleno simplemente solo ha que añadir el parametro
 * del elemento que queremos
 *
 * Para rellenar un array vacio inicializado con el tamaño del mismo el primer parametro
 * el elemento que queremos añadir y el segundo parametro es el indice desde el que queremos
 * añadirlo
 *
 * Para añadir los elementos desde un indice, tambien se le puede añadir hasta que indice queremos que se
 * añada el primer parametro es elemento que queremos añadir el segundo parametros desde que indice y tercer parametro
 * hasta que indice
 *  */

let nuevoArray = new Array(5);
nuevoArray.fill(1, 0);
//b. (fill) Rellena todo el array con el valor "a".
nuevoArray.fill("a");

//c. (fill) Rellena el array con el valor "b" a partir de la segunda posición.

nuevoArray.fill("b", 1);
console.log(nuevoArray);

/**************************************** */
/** 6. Ordenar arrays y darles la vuelta **/
/**************************************** */
const aNumeros4 = [1, 2, 3, 4, 5];
//a. (reverse) Da la vuelta a los elementos del array.
console.log(aNumeros4.reverse());

const aNumeros5 = [5, 3, 2, 4, 1];
//b. (sort) Ordena de menor a mayor los elementos del array.
console.log(aNumeros5.sort());

const aPersonas = [
  { nombre: "Susana", edad: 30 },
  { nombre: "Antonio", edad: 18 },
  { nombre: "Manuel", edad: 45 },
];
//c. (sort) Ordena el array por orden alfabético.
console.log(
  aPersonas.sort((p1, p2) => {
    if (p1.nombre < p2.nombre) {
      return -1;
    }
    if (p1.nombre > p2.nombre) {
      return 1;
    }
    if (p1.nombre === p2.nombre) {
      return 0;
    }
  })
);

console.log(aPersonas.sort((p1, p2) => p1.edad - p2.edad));
/************************************* */
/** 7. Búsqueda de elementos en array **/
/************************************* */
const oPersona = { nombre: "Javier" };
const aDatos = [1, 5, "a", oPersona, true, 5, [1, 2], "9"];
//a. (indexOf) Obtén la primera posición que ocupa el elemento 5.
console.log(aDatos.indexOf(5));

//b. (lastIndexOf) Obtén la última posición que ocupa el elemento 5.
console.log(aDatos.lastIndexOf(5));

const aDatos2 = [
  { id: 5, nombre: "Julia" },
  { id: 7, nombre: "Francisco" },
];

//c. (findIndex) Obtén la posición del elemento con id 5.
/**
 * findIndex indica la primera posición de un elemento dandole una condicion
 */
console.log(aDatos2.findIndex((d) => d.id === 7));

//d. (findIndex) Obtén la posición del elemento con nombre "Francisco".
console.log(aDatos2.findIndex((d) => d.nombre === "Francisco"));
//e. (find) Obtén el elemento con id 5.

const iNumeros6 = [5, 7, 12, 15, 17];
//f. (some) Indica si el array contiene algún elemento par.
console.log(iNumeros6.some((n) => n % 2 === 0));

const iNumeros7 = [4, 6, 16, 36];
//g. (every) Indica si todos los elementos del array son pares.
console.log(iNumeros7.every((n) => n % 2 === 0));
/**************************** */
/** 8. map, filter y reduce. **/
/**************************** */
const aCarro = [
  { nombre: "Sandía", precio: 6.95 },
  { nombre: "Melón", precio: 3.25 },
  { nombre: "Chocolate", precio: 1.5 },
  { nombre: "Pan", precio: 0.75 },
];
//a. (map) Obtén un array con los nombres de los productos.
console.log(aCarro.map((c) => `Nombre: ${c.nombre}`));
//b. (map) Obtén un array con los precios de los productos.
console.log(aCarro.map((c) => `Precio: ${c.precio}`));

//c. (map) Obtén un array con los precios con IVA de los productos.
console.log(aCarro.map((c) => `Precio con iva: ${c.precio * 0.21 + c.precio}`));

//d. (filter) Obtén un array con los elementos que valgan más de 2 euros.
console.log(aCarro.filter((c) => c.precio > 2));

//e. (reduce) Obtén la cuenta total de todos los elementos.
console.log(aCarro.reduce((acumulador, valor) => acumulador + valor.precio, 0));

/**************************************** */
/** 9. Convertir un array en una cadena. **/
/**************************************** */
const aElementos = ["Viento", "Lluvia", "Fuego"];
//a. (join) Obtén una cadena como esta "Viento,Lluvia,Fuego"
console.log(aElementos.join());

//b. (join) Obtén una cadena como esta "Viento, Lluvia, Fuego"
console.log(aElementos.join(", "));

//c. (join) Obtén una cadena como esta "VientoLluviaFuego"
console.log(aElementos.join(""));

