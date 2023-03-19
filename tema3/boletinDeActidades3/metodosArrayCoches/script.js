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

    /**
     * Actividad 1. Imprime por consola la marca y el modelo de todos los coches del array.
     */
    //foreach para recorrer todos los coches(usar siempre para inprimir datos)
    console.log(coches.forEach(c=>console.log("Marca: " +c.marca +"Modelo: " + c.modelo)));

    /**
     * Actividad 2. Devuelve el primer coche de color rojo que aparece en el array.
     */
    // find busca el primero con la condición y la devuelve
    console.log(coches.find(c=>c.color==='Rojo'));

    /**
     * Actividad 3. Devuelve true si todos los coches tienen menos de 10 años.
     */
    //every comprueba si todos los coches cumplen la condición
    //Devuelve true o false
    console.log(coches.every(c=> 2022 - c.annio < 10));
    
    /**
     * Actividad 4. Devuelve true si algún coche es más caro de 70000 euros o es "Mercedes Benz" y
        cuesta menos de 40000 euros
     */
    //some devuelve true o false si se cumple alguna condición
    console.log(coches.some(c=>c.precio > 70000 || (c.marca==='Mercedes Benz' && c.precio < 40000 )));

    /**
     * Actividad 5. Devuelve el índice del primer coche que cumple que es un Dodge con 2 puertas.
     */
    //index of indica el indice del coche
    console.log(coches.indexOf(coches.find(c=>c.puertas==2 && c.marca==="Dodge")));

    /**
     * Actividad 6. Devuelve un array que contenga cadenas de caracteres mostrando el texto: “N.º
    puertas: X, color: Y” para todos los coches del array "coches".
     */
    //map muestra un array en forma de cadena con undice valor
    console.log(coches.map(c=> "NÂº de puertas: "+c.puertas +"Color: "+ c.color));

    /**
     * Actividad 7. Devuelve un array con todos los coches que tienen transmisión automática, cuestan
        menos de 60000 euros y de color negro e imprime por pantalla todos los datos de los coches que
        cumplen las condiciones.
     */
    //filter  crea un nuevp array con todos los elementos que cumplan una condicion cumplen una condicion
    console.log(coches.filter(c=>(c.transmision==="automatico") && (c.precio<60000) && (c.color==="Negro")));

    /**
     * Actividad 8. Imprime por consola la marca, el año y precio de todos los coches cuya marca
contiene una "o" (mayúscula o minúscula), ordenados por el año (menor a mayor).+
     */

//Si quieramos ordenarlo de forma descendentes abría que intencarbiar las variables de la resta
   // coches.filter(c=>c.marca.search(/o/gi) >=0).sort((c1,c2)=> c1.annio - c2.annio).forEach(c=>console.log(`Marca: ${c.marca} año: ${c.annio} Precio: ${c.precio}`));
   console.log("Ordenar");
   //Si se quisiera ordenanr los string desendentemente solo ha y que invertirles los signos de menor a mayor (<>)
    console.log(coches.sort((c1,c2)=>{
      if(c1.marca==c2.marca){
         return 0;

      }
      if(c1.marca < c2.marca){
         return -1
      }
      if(c1.marca > c2.marca){
      return 1;
   }
    }))

    