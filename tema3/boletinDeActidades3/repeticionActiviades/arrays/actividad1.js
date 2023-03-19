//Actividad 1

const arrayUni=[100,200,300,400,500];

for (const indice in arrayUni) {
    console.log(`Indice ${indice} Valor ${arrayUni[indice]}\n`);
        
    }

    //Actividad 2
const arrayBi=[[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]];
arrayBi.forEach(a=>console.log(a));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/************************************************************ */
/** 1. Añadir o eliminar un elemento al principio o al final **/
/************************************************************ */
const aLetras = ["b", "c", "d"];
//a. (push) Añade la letra "e" al final del array.
aLetras.push("e");

//b. (pop) Elimina el último elemento del array.
aLetras.pop("e");

//c. (unshift) Añade la letra "a" al principio del array.
aLetras.unshift("a");
//d. (shift) Elimina el primer elemento del array.
aLetras.shift();
console.log(aLetras);

/****************************************** */
/** 2. Añadir multiples elementos al final **/
/****************************************** */
const aNumeros = [1, 2, 3];
//a. (concat) Añade al final del array los elementos 4, 5, 6.
console.log(aNumeros.concat(4,5,6));

/************************** */
/** 3. Obtener un subarray **/
/************************** */
const aNumeros2 = [1, 2, 3, 4, 5];
//a. (slice) Extrae el array [4, 5]
let array1=aNumeros2.slice(3);
console.log(array1)
console.log(aNumeros2);

//b. (slice) Extrae el array [3, 4]
array1=aNumeros2.slice(2,4);
console.log(array1)

//c. (slice) Extrae el array [2, 3]

array1=aNumeros2.slice(1,3);
console.log(array1)
/******************************************************** */
/** 4. Añadir o eliminar elementos en cualquier posicion **/
/******************************************************** */
const aNumeros3 = [1, 5, 7];
//a. (splice) Añade los elementos 2, 3 y 4 después del 1.
aNumeros3.splice(1,0,2,3,4);


//b. (splice) Añade el elemento 6 entre el 5 y el 7.
aNumeros3.splice(5,0,6)

//c. (splice) Elimina los elementos 2 y 3.
aNumeros3.splice(1,2);
console.log(aNumeros3);
/************************************* */
/** 5. Rellenar un array con un valor **/
/************************************* */
//a. (fill) Crea un nuevo array con 5 posiciones con el valor 1.
let array2=new Array(5);
array2.fill(1);
//b. (fill) Rellena todo el array con el valor "a".
array2.fill("a");
//c. (fill) Rellena el array con el valor "b" a partir de la segunda posición.
array2.fill("b",1);
console.log(array2);
/**************************************** */
/** 6. Ordenar arrays y darles la vuelta **/
/**************************************** */
const aNumeros4 = [1, 2, 3, 4, 5];
//a. (reverse) Da la vuelta a los elementos del array.
console.log(aNumeros4.reverse())

const aNumeros5 = [5, 3, 2, 4, 1];
//b. (sort) Ordena de menor a mayor los elementos del array.
console.log(aNumeros5.sort());
const aPersonas = [
  {nombre: "Susana", edad: 30},
  {nombre: "Antonio", edad: 18},
  {nombre: "Manuel", edad: 45}
];
//c. (sort) Ordena el array por orden alfabético.

console.log(aPersonas.sort((p1,p2)=>{
    if(p1.nombre < p2.nombre ){
        return -1;
    }
    if(p1.nombre > p2.nombre){
        return 1;
    }
    if(p1.nombre === p2.nombre){
        return 0;
    }

}))

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
  { id: 7, nombre: "Francisco" }
];
//c. (findIndex) Obtén la posición del elemento con id 5.
console.log(aDatos2.findIndex(a=>a.id ===5));

//d. (findIndex) Obtén la posición del elemento con nombre "Francisco".
console.log(aDatos2.findIndex(a=>a.nombre === "Francisco"))

//e. (find) Obtén el elemento con id 5.
console.log(aDatos2.find(a=>a.id === 5))
const iNumeros6 = [5, 7, 12, 15, 17];
//f. (some) Indica si el array contiene algún elemento par.
console.log(iNumeros6.some(n=> n%2 ===0));

const iNumeros7 = [4, 6, 16, 36];
//g. (every) Indica si todos los elementos del array son pares.
console.log(iNumeros7.every(n=> n%2 ===0));

/**************************** */
/** 8. map, filter y reduce. **/
/**************************** */
const aCarro = [ 
  { nombre: "Sandía", precio: 6.95 }, 
  { nombre: "Melón", precio: 3.25 },
  { nombre: "Chocolate", precio: 1.5 },
  { nombre: "Pan", precio: 0.75 }
];
//a. (map) Obtén un array con los nombres de los productos.
console.log(aCarro.map(c=>c.nombre));
//b. (map) Obtén un array con los precios de los productos.
console.log(aCarro.map(c=>c.precio));

//c. (map) Obtén un array con los precios con IVA de los productos.
console.log(aCarro.map(c=>c.precio*0.21+c.precio))
//d. (filter) Obtén un array con los elementos que valgan más de 2 euros.
let array3=[];
array3=aCarro.filter(c=>c.precio< 2);
console.log(array3);
//e. (reduce) Obtén la cuenta total de todos los elementos.
console.log(aCarro.reduce((acumulador,valor)=>acumulador+valor.precio,0)
)

/**************************************** */
/** 9. Convertir un array en una cadena. **/
/**************************************** */
const aElementos = ['Viento', 'Lluvia', 'Fuego'];
//a. (join) Obtén una cadena como esta "Viento,Lluvia,Fuego"
console.log(aElementos.join())
//b. (join) Obtén una cadena como esta "Viento, Lluvia, Fuego"
console.log(aElementos.join(", "))
//c. (join) Obtén una cadena como esta "VientoLluviaFuego"
console.log(aElementos.join(""));

////////////////Actividad 3 Numeros loteria//////////////////////////////////////////////
let arrayNumerosLoteria= new Array(49);
for (let i = 0; i < arrayNumerosLoteria.length; i++) {
    arrayNumerosLoteria[i]=i+1;
    
}

function mesclarArray(arrayLoreria){
    for (let i = 0; i < arrayLoreria.length -1; i++) {
        let numeroAleatorio=Math.floor(Math.random() * i); 
        let aux=arrayLoreria[i];
        arrayLoreria[i]=arrayLoreria[numeroAleatorio];
        arrayLoreria[numeroAleatorio]=aux;
        
    }
    return arrayLoreria;


}
function mostarNumeroLoteria(){

    for (let i = 0; i < 10; i++) {
        mesclarArray(arrayNumerosLoteria);
        console.log(arrayNumerosLoteria.slice(0,5));
    }

}

////////////////////////////Activiad 4 Tablero juego Caracol///////////////////////////////////////////////////////

let tablero=[];


//Lo inicializo totamente en blanco con las posiciones correspondientes        
for (let i = 0; i < 10; i++) {
//inicializamos el array de las filas 
//no se puede inicializar arriba por que da error  
let arrayColumnaFila=[];                
      for (let j = 0; j < 10; j++) {

            arrayColumnaFila.push(" ");
            
      }
      tablero.push(arrayColumnaFila);
}





for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 10; j++) {
        
        if((i==0)|| (i==9) || (j==0) || (j==9)){

            tablero[i][j]="O";
        } 
        else{
            tablero[i][j]="X";
        }
        if(i==4 && j==5){
            tablero[i][j]="o";
        }
        if(i==9 && j==4){
            tablero[i][j]="II";
        }
    }
}
console.log(tablero);
///////////////////////////////////////////////////Ejercicio arrays coches//////////////////////////////////////////////////////////////////////////
const coches = [
    {marca: 'BMW', modelo: 'Serie 3', annio: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4', annio: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang', annio: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6', annio: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5', annio: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C', annio: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro', annio: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang', annio: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger', annio: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3', annio: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger', annio: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C', annio: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5', annio: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang', annio: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger', annio: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3', annio: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5', annio: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C', annio: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4', annio: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
    ];

    //Actividad 1. Imprime por consola la marca y el modelo de todos los coches del array.
    coches.forEach(c=>console.log(`Marca: ${c.marca}, Modelo: ${c.modelo}` ));

    //Actividad 2. Devuelve el primer coche de color rojo que aparece en el array.
    console.log(coches.find(c=>c.color === "Rojo"));

    //Actividad 3. Devuelve true si todos los coches tienen menos de 10 años.
    console.log(coches.every(c=> c.annio <2010));

    //Actividad 4. Devuelve true si algún coche es más caro de 70000 euros o es "Mercedes Benz" y cuesta menos de 40000 euros
    console.log(coches.some(c=>(c.precio > 70000) || (c.modelo ==="Mercedes Benz" && c.precio < 40000)));

    // Actividad 5. Devuelve el índice del primer coche que cumple que es un Dodge con 2 puertas.
    console.log(coches.findIndex(c=> c.marca === "Dodge" && c.puertas===2));

    //Actividad 6. Devuelve un array que contenga cadenas de caracteres mostrando el texto: “N.ºpuertas: X, color: Y” para todos los coches del array "coches".
    console.log(coches.map(c=>`N.ºpuertas: ${c.puertas}, Color: ${c.color}`));

    /**
     * Actividad 7. Devuelve un array con todos los coches que tienen transmisión automática, cuestan
        menos de 60000 euros y de color negro e imprime por pantalla todos los datos de los coches que
        cumplen las condiciones.
     */
    console.log(coches.filter(c=>c.transmision ==="automatico" && c.precio < 60000 && c.color==="Negro").map(c=>`Marca: ${c.marca} , color ${c.color}`));
    /**
     * Actividad 8. Imprime por consola la marca, el año y precio de todos los coches cuya marca
    contiene una "o" (mayúscula o minúscula), ordenados por el año (menor a mayor). 
     */
    console.log("-------------------------------------------------")
    console.log(coches.filter(c=> c.marca.search(/o/gi)>=0).sort((c1,c2)=> c1.precio - c2.precio))