let cadena=" I have become comfortably brilliant  ";


//1. Indica el número total de caracteres incluyendo los espacios en blanco (length)
console.log(cadena.length);
            //numeroTotalDeCaracteres();

//2. Obtén el carácter que ocupa la octava posición (charAt)
console.log(cadena.charAt(8));

//3. Obtén el código Unicode del primer carácter (charCodeAt)
console.log(cadena.charCodeAt(1));

//4. Concatena la cadena con la cadena “ and exciting”. 
//¿Se modifica la primera cadena?(concat)   NO SE MODIFICA, YA QUE LAS VARIABLES STRING NO SE PUEDEN MODIFICAR
let nuevaCadena=cadena.concat(" and exciting")
console.log(nuevaCadena);
console.log(cadena);

//5. Comprueba si la cadena termina con los caracteres “brillian” (endsWith)
console.log(cadena.endsWith("brillian"));

//6. Convierte el valor Unicode 65 a su carácter equivalente (fromCharCode)
console.log(String.fromCharCode(65));

//7. Comprueba si la cadena contiene los caracteres “comfortably” (includes)
console.log(cadena.includes("comfortably"));

//8. Indica la posición que ocupa el primer carácter “a” de la cadena. (indexOf)
console.log(cadena.indexOf("a"));

//9. Indica la posición que ocupa el último carácter “a” de la cadena (lastIndexOf)
console.log(cadena.lastIndexOf("a"));

//10. Compara la cadena con la cadena “You have become comfortably brilliant”.
//¿Cuál iría en primer lugar? (localeCompare)----- Cuando es negativo indica cual es la cadena primera------
let cadena2="You have become comfortably brilliant";
console.log(cadena.localeCompare(cadena2));
console.log(cadena2.localeCompare(cadena));

//11. Obtén todas las coincidencias de la cadena con la expresión regular “/com/g” (match)
        //la expresion siempre sin comillas
let regex=/com/g;
let coincidencias=cadena.match(regex)
console.log(coincidencias);

//12. Obtén una nueva cadena con 3 repeticiones de la cadena actual (repeat)
console.log(cadena.repeat(3));

//13. Reemplaza los caracteres “brilliant” por “exciting” (replace)
let reemplazar=cadena.replace("brilliant","exciting");
console.log(reemplazar);

//14. Busca los caracteres “brit” en la cadena (search)
        //Si no se encuentra ninguna conincidencia devuelve -1 si es correcto
        //Devuelve la posición en la que se encuentra
console.log(cadena.search("brit"));

//15. Obtén de la cadena los caracteres del primero al quinto (slice)
    // Si le indicamos valores negativos cuanta desde los valores del final
console.log(cadena.slice(1,5));

//16. Obtén un array con todas las palabras de la cadena (split)
let array=cadena.split(" ");
console.log(array[4]);

//17. Comprueba si la cadena comienza con los caracteres “I have” (startsWith)
    //Cuenta si empiza con espacios
console.log(cadena.startsWith("I have"));
//18. Obtén siete caracteres de la cadena a partir del segundo carácter (substr)
console.log(cadena.substr(2,7));
//19. Obtén todos los caracteres de la cadena a partir del cuarto carácter (substring)
console.log(cadena.substring(4));
//20. Convierte todos los caracteres de la cadena a mayúsculas (toUpperCase)
console.log(cadena.toUpperCase());
//21. Convierte todos los caracteres de la cadena a minúsculas (toLowerCase)
console.log(cadena.toLowerCase());
/*22. Quita los espacios en blanco de la cadena por delante y detrás (trim) */
console.log(cadena.trim())


function cifrado(){
let numero=0;
let cadena="";
let unicode;
let cadenaMensaje="";
let claveNumero="";

//Pedimos numero al mensaje al usuario
cadenaMensaje=prompt("Inserte una frase");
let correcto=0;
do{
//Pedimos código al usuario, si no es un numero se vuelve a repetir el buble
    claveNumero=prompt("Inserte un código");
    console.error("El dato introducido no es un numero")
    if(!isNaN(claveNumero)){
    correcto=1;
    }
    
}while(correcto!=1);

//Se le añade a la claveNumero si el tamaño es menor que la candena de mensaje
while(claveNumero.length < cadenaMensaje.length){

    claveNumero=claveNumero.concat(claveNumero);

}
//recorremos la cadena de mensaje para poder pasarlo a unicode
for (let i = 0; i < cadenaMensaje.length; i++) {
    //obtenemos el caracter de la posción i
    numero=parseInt(claveNumero.charAt(i));
//Obtiene el valor unicode del caracter de la cadena de mensaje
    unicode=cadenaMensaje.charCodeAt(i);
    //Convierte valor a caracter unicode sumandole un numero para poder codificarlo
    cadena=cadena.concat(String.fromCharCode(numero+unicode));
    
}
console.log(cadena);

}
cifrado();
