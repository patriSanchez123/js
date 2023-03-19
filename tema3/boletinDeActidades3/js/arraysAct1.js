/**
 * a) Arrays unidimensionales: Declara un array unidimensional e inicialízalo con los valores
100, 200, 300, 400 y 500. A continuación imprímelo por consola con el siguiente formato:
El array tiene en la posición 0 el valor 1.
El array tiene en la posición 1 el valor 2.
 */
const array1 = [100, 200, 300, 400, 500];
/**
 * Función que muestra array con foreach
 */
function mostrarArrayForEach() {
  let contador = 0;
  array1.forEach(
    (element) =>
      console.log(
        "El array tiene en la posicion " + contador + " el elemento " + element
      ),
    contador++
  );
}
/**
 * Funciómn que muestra array con for of
 */
function mostrarArrayForOf() {
  for (const value of array1) {
    let contador = 0;
    console.log(
      "El array tiene en la posicion " + contador + " el elemento " + value
    );
    contador++;
  }
}

/**
 * b) Array bidimensionales: Genera un array bidimensional de 5 x 5 posiciones e
inicialízalo con los siguientes valores:
 */
////////////////////////Terminar este ejercicio///////////////////////////
let arrayBidimensional = [[], [], [], [], []];
/**
 * Funcion que llena el array con numero correlativos
 */
function llenarArrayBidimensional() {
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
      arrayBidimensional[i - 1][j - 1] = j;
    }
  }
}
const lectivo = [
  "Lectivo",
  "Lectivo",
  "Lectivo",
  "Lectivo",
  "Lectivo",
  "Lectivo",
  "No es lectivo",
  "No es lectivo",
  "Lectivo",
  "Lectivo",
  "Lectivo",
  "Lectivo",
];
const meses = [
  "Enero",
  "Febero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
/**
 * Funcion que se le pasa un numero el usuario y se comprueba el
 * mes que correposnde y si es lectivo
 */
function mesLectivo() {
  let numero = null;
  let correcto = false;
  do {
    numero = prompt("Introduce el numero del mes");
    if (isNaN(numero)) {
      console.log("Introduce un numero");
    } else {
      correcto = true;
    }
  } while (!correcto);
  let numeroParseado = parseInt(numero);
  console.log(
    `El numero de mes es ${numeroParseado}, el mes es ${meses[numeroParseado]} y es un mes  ${lectivo[numeroParseado]}`
  );
}
console.log("Es un numero");

/**
     * Implementa una aplicación que muestre 10 combinaciones para jugar a la lotería primitiva. Una
        combinación tiene 6 números del 1 al 49. Los números no se pueden repetir en una combinación.
        Para ello:
        • Genera un array de 49 elementos que contengan números del 1 al 49.
        • Mezcla los elementos del array.
        • Extrae un array de los 6 primeros elementos para obtener una combinación.
     */
let arrayLoteria = [];
/**
 * Función que llena el array loteria
 * @param {Array} arrayLoteria
 */
function llenarArrayLoteria(arrayLoteria) {
  for (let i = 0; i < 49; i++) {
    arrayLoteria[i] = i + 1;
  }
}
/**
 * Función que da un numero aleatorio,pasandole un numero max y min
 * @param {number} min
 * @param {number} max
 * @returns number
 */
function aleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
7;
function desordenarArray(totalNumeros, array) {
  let indicesAleatorio = [];

  for (let i = 1; i < totalNumeros; i++) {
    let numeroInsertado = false;
    do {
      let numeroAleatorio = aleatorio(0, array.length);
      if (indicesAleatorio.indexOf(numeroAleatorio) == -1) {
        indicesAleatorio.push(numeroAleatorio);
        numeroInsertado = true;
      }
    } while (!numeroInsertado);
  }
  return indicesAleatorio;
}
/**
 * Función que muestra hasta el parametro que se le pase
 * @param {number} numero
 * @param {Array} array
 */
function mostrarHasta(numero, array) {
  for (let i = 0; i < numero; i++) {
    console.log(array[i]);
  }
}

/**
 * Caracol Preso
 */

// let caracolPreso=
// [["O","O","O","O","O","O","O","O","O","O"],
// ["O","X","X","X","X","X","X","X","X","O"],
// ["O","X","X","X","X","X","X","X","X","O"],
// ["O","X","X","X","X","X","X","X","X","O"],
// ["O","X","X","X","o","X","X","X","X","O"],
// ["O","X","X","X","X","X","X","X","X","O"],
// ["O","X","X","X","X","X","X","X","X","O"],
// ["O","X","X","X","X","X","X","X","X","O"],
// ["O","X","X","X","X","X","X","X","X","O"],
// ["O","O","O","O","[]","O","O","O","O","O"]];
function juegoCaracol(){
  let arrayCaracol=[[],[],[],[],[],[],[],[],[],[]];

for (let x = 0; x < 10; x++) {
        
    for (let y = 0; y< 10; y++) {
        if((x==0) || (y==9) || (x==9) || (y==9) ){
          arrayCaracol[x][y]="O";
        }else{

          arrayCaracol[x][y]="X";
        }
        if((x==4) && (y==4)){

          arrayCaracol[x][y]="o";
        }
        if((x==4) && (y==10)){
          arrayCaracol[x][y]="[]";
        }
        
        
    }
  
    
}
return arrayCaracol;
}
let arrayCaracol=juegoCaracol();
console.log(arrayCaracol);

