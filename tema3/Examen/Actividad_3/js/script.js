///////////////////////////// CÓDIGO QUE DEBES UTILIZAR /////////////////////////
const factura = [
  { id: 1, descripcion: "Atún 3 latas 30gr", precio: 2.4, cantidad: 3 },
  { id: 2,descripcion: "Tomate frito 3 briks 390gr",precio: 1.45,cantidad: 1,},
  { id: 3, descripcion: "Café molido 250gr", precio: 3.99, cantidad: 2 },
  { id: 4, descripcion: "Garbanzos cocidos 400gr", precio: 0.85, cantidad: 4 },
  { id: 5, descripcion: "Azúcar blanco 1kg", precio: 1.47, cantidad: 2 },
  { id: 6, descripcion: "Arroz 1kg", precio: 1.35, cantidad: 1 },
  { id: 7, descripcion: "Leche semidesnatada 1l", precio: 1.06, cantidad: 6 },
  { id: 8, descripcion: "Tomate triturado 390gr", precio: 0.72, cantidad: 2 },
  { id: 9,descripcion: "Nata líquida 3 unidades de 200 ml",precio: 1.75,cantidad: 1},
  { id: 10,descripcion: "Aceite de oliva suave 1l",precio: 4.99,cantidad: 4,},
];
///////////////////////////// FIN CÓDIGO QUE DEBES UTILIZAR /////////////////////////

///////////////////////////// AQUÍ COMIENZA TU CÓDIGO /////////////////////////

// ACTIVIDAD 3:
// Apartado 1:
/**
 * Función que que filtra la factura por los productos de más de 2 €
 * ordena de menor a mayor por la cantidad pedida
 * y ingresa en un array los datos de los productos
 * @param {Array} arrayFactura
 * @returns Array
 */
function obtenerCarosOrdenadosPorCantidad(arrayFactura) {
  let nuevoArray = [];
  nuevoArray = arrayFactura
    .filter((f) => f.precio > 2)
    .sort((f1, f2) => f1.cantidad - f2.cantidad)
    .map(
      (f) =>
        `id: ${f.id}, descripción: ${f.descripcion}, precio: ${f.precio}, cantidad: ${f.cantidad}`
    );
  return nuevoArray;
}

// Apartado 2:
/**
 * Función que imprime el numero de elementos más caros que le indiquemos
 * @param {Array} arrayFactura 
 * @param {number} numerosElementos 
 * @returns Array
 */
function obtenerNMasCaros(arrayFactura, numerosElementos) {
  const arrayOrdenados = arrayFactura.sort((f1, f2) => f2.precio - f1.precio);
  console.log(arrayOrdenados);
  let nuevoArray = [];

  if(numerosElementos <= arrayFactura.length) {
    for (let i = 0; i < numerosElementos; i++) {
      nuevoArray.push(arrayOrdenados[i]);
    }
    return nuevoArray;
  }

  if(numerosElementos===0){
    console.error("cero es un número correcto");
    return nuevoArray;
  }else{

    console.error("El numero ingresado es mayor a los productos que se disponen");
  }
  
}

function mostrarPorpantalla(array){

    console.log(array.map(f=>`id: ${f.id}, descripción: ${f.descripcion}, precio: ${f.precio}, cantidad: ${f.cantidad}`));
          
}
console.log(obtenerCarosOrdenadosPorCantidad(factura));
console.log(obtenerNMasCaros(factura,2));

///////////////////////////// AQUÍ TERMINA TU CÓDIGO /////////////////////////
