/**
 * Función que crea una cookie y la codifica
 */
function setAndEncodeCookie(){
    let nombreCookie="";
    let valorCookie="";
    let expiracionCookie="";
    let fechaExpiracion="";
    nombreCookie=prompt("Introduce nombre de cookie");
    valorCookie=prompt("Introduce un valor de la cookie");
    expiracionCookie=prompt("Introduce en el numero de dias que quiere que expire");

//Inicializamos fecha
    let fecha=new Date();
    /**
     * Crear una fecha donde indica en la fecha que nos encontramos y le manda el parametro
     * en milisegundos
     */
    fecha.setTime(fecha.getTime()+expiracionCookie*24*60*60*1000);
    //Pasamos fecha a UTC
    fechaExpiracion="expires="+fecha.toUTCString();
    //Creamos y codificamos la cookie
    document.cookie=nombreCookie+'='+encodeURIComponent(valorCookie)+";"+fechaExpiracion+";path=/";

}
/**
 * Función que busca una cookie y la muestra
 */
function getAndDecodeCookie(){
    let buscarCookie="";
    let cookieEncontrada=null;
    let decodificado="";
    let documentDescodificado=document.cookie;
    let arrayCookie=document.cookie.split(';');

    buscarCookie=prompt("Introduce el nombre de la cookie que quieres buscar");

//Comprobamos que exista el nombre de la cookie
    if(documentDescodificado.includes(buscarCookie)){
//recorremos la cookie
        for (let i = 0; i < arrayCookie.length; i++) {
            decodificado=decodeURIComponent(arrayCookie[i]);
//Si existe guardamos la cookie seleccionada y rompemos el bucle    
            if(decodificado.includes(buscarCookie)){
                cookieEncontrada=decodificado;
                break;
            }           
        }
//Imprimimos por pantalla el valor de la cookie quitando del nombre de la misma
        console.log(cookieEncontrada.slice(buscarCookie.length+2));
//si no se encuentra imprimimos la cookieEncontrada que es null
    }else{
        console.log(cookieEncontrada);
    }
}
/**
 * Función que comprueba que exista una cookie determinada
 */
function checkCookie(){
    let buscarCookie="";

    buscarCookie=prompt("Intrduce en nombre de la cookie que quieres buscar");
//decodificamos las cookies
    let documentDescodificado=decodeURIComponent(document.cookie);
//Comprobamos si existe la cookie, si no existe imprime false si existe imprime true
    let comprobarCookies=documentDescodificado.includes(buscarCookie)
    
    console.log(comprobarCookies);
}

/**
 *Función que muestra la cookie en forma de mapa 
 */
function getAndDecodeCookies(){
    /**
     * Dividimos las cookies por punto y coma donde posteriiormente
     * lo recorremos y lo volvemos a dividir por el simbolo igual donde nos da un array de dos
     * indices**/
    //dividimos el array por punto y coma
    let arrayCookie=document.cookie.split(';');
    let arrayDividido="";
    //Inicializamos el Mapa
    let mapCookies=new Map();
//Recorremos el array de las cookies
    for (let i = 0; i < arrayCookie.length; i++) {
        //console.log(decodeURIComponent(arrayCookie[i]));
/**
 * Volvemos a dividir el array por el simbolo = para poder tener los
 * valores por separados, esto nos da un nuevo array con dos indices
 * donde por cada itercación del bucle, que aprovecharemos para insertarlo en el Map
 * como clave valor
 */
        arrayDividido=(arrayCookie[i]).split('=');
        mapCookies.set(arrayDividido[0],arrayDividido[1]);
        
     }
     console.log(mapCookies);
}
