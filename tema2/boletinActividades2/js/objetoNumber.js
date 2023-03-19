//1. Comprueba si es un número.
//Si es falso es que es un numero
console.log(isNaN("444"));

//2. Comprueba si el número es un entero.
//Si es true indica que es entero
console.log(Number.isInteger(8));
//3. Convierte el número a una cadena.
let numero=45;
//convertir de numerpo a cadena
let cadenaNumero=numero.toString();
console.log(numero);
console.log(typeof(cadenaNumero));
//4. Formatea el número para que solo tenga un número decimal.
let numero1=3.45555555;
console.log(numero1.toFixed(3));