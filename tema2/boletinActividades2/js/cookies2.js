function crearCookie(){
    let numeroCorrecto=false; 
    let fecha="";
    let nombre=prompt("Introduce el nombre de la cookie");  
    let valor=prompt("Introduce el valor de la cookie");

do{
    fecha=prompt("Introduce el numero de dias de vencimiento de la cookie");
    if(!isNaN(fecha)){
        fecha=parseInt(fecha);
        numeroCorrecto=true;
    }

}while(!numeroCorrecto);
setAndEncodeCookie(nombre, valor, fecha);
}

function setAndEncodeCookie(name, value, daysToLive=null){
    const fecha=new Date();
    fecha.setTime(fecha.getTime()+(daysToLive*24*60*60*1000));
    daysToLive="max-ege="+fecha.toUTCString();
    document.cookie=name+"="+encodeURIComponent(value)+";"+daysToLive+";";
}

function obtenerCookie(){
let nombre=prompt("Introduce el nombre de la cookie que quieres buscar");
console.log(getAndDecodeCookie(nombre));

}

function getAndDecodeCookie(name){
    let nombreValor="";
    let nombre=null;
    let arrayCookie=document.cookie.split(";");

    for (let i = 0; i < arrayCookie.length; i++) {
        if(arrayCookie[i].includes(name)){
    
            nombreValor=arrayCookie[i].split("=");
            valor=encodeURIComponent(nombreValor[1].trim());
            
        }
        
        
    }
    
    return valor;
}
function eliminarCookie(){
let nombre=prompt("Introduce el nombre de la cookie a eliminar");

    document.cookie=nombre+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;"

}

function comprobarCookie(){
    let nombre=prompt("Introduce el nombre de la cookie que quieres comprobar");
    console.log(checkCookie(nombre));
    
}

function checkCookie(name){

    let arrayCookie=document.cookie.split(";");
    let nombreValor="";
    let cookieEncontrada=false;

    for (let i = 0; i < arrayCookie.length; i++) {
        if(arrayCookie[i].includes(name)){
            nombreValor=arrayCookie[i].split("=");
            nombreCoo=nombreValor[0].trim();
        if(nombreCoo.includes(name)){
            cookieEncontrada=true;
        }

        }
        
    }
    return cookieEncontrada;
}

function verMapaCookie(){
    let arrayCookie=document.cookie.split(";");
    let nombreValor="";
    let mapa= new Map();

    for (let i = 0; i < arrayCookie.length; i++) {
        
        nombreValor=arrayCookie[i].split("=");
        mapa.set(nombreValor[0].trim(),encodeURIComponent(nombreValor[1].trim()));
    }
    console.log(mapa);
}

