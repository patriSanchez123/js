//1. Obtén el resultado de multiplicar el número PI por el número E.
var numero=Math.E;
var numeroPi=Math.PI;
console.log(numero*numeroPi);
//2. Obtén el valor absoluto de -9,87.
console.log(Math.abs(-9,87));
//3. Redondea 1,2 al entero más alto.
console.log(Math.ceil(1.2));
//4. Redondea 1,8 al entero más bajo.
console.log(Math.floor(1.8));
//5. Redondea 2.51 al entero más próximo.
console.log(Math.round(2.51));
//6. Obtén el mayor número de los siguientes 6, 7, 4, 10, 10.1
console.log(Math.max(6, 7, 4, 10, 10.1));
//7. Obtén el menor número de los siguientes 6, 7, 4, 3.9, 10
console.log(Math.min(6, 7, 4, 3.9, 10));
//8. Obtén un valor aleatorio entre 100 y 200 (Puedes consultar MDN)
function numeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }
  console.log(numeroAleatorio(100,200));
//9. Obtén el valor de 2 elevado a 16.
console.log(Math.pow(2,16));
//10. Obtén el valor de la raíz cuadrada de 16.
console.log(Math.sqrt(16));