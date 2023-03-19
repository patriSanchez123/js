const NOMBRE="Nombre cookie";
const VALOR="Valor cookie";
const FECHA="Dias fecha de expiracion";


function decodificarCookie(){
    let nombre=prompt(NOMBRE);
    console.log(getAndDecodeCookie(nombre));
}

function crearCookies(){
    let fecha="";
    let nombre=prompt(NOMBRE);
    let valor=prompt(VALOR);
    let salir=0;
    do{
         fecha=prompt(FECHA);
    if(!isNaN(fecha)){
        salir=1;
    }
}while(salir!=1);

setAndEncodeCookie(nombre,valor,fecha)
}

function comprobarSiExiste(){

    let nombre=prompt(NOMBRE);
    console.log(checkCookie(nombre));
}

function verMapa(){
console.log(getAndDecodeCookies());
}

function setAndEncodeCookie(nombre,valor,fecha){

    let fechaExpiracion=new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime()+(fecha*24*60*60*1000));
    valorCodificado=decodeURIComponent(valor);
    expiracion="max-ege="+fechaExpiracion.toUTCString();
    document.cookie=nombre+"="+valorCodificado+";"+expiracion+";";
    
    
}

function getAndDecodeCookie(nombre){

    let separarCookie=document.cookie.split(";");
    let cookieSelecionada=null;
    let valor=null;

    for (let i = 0; i < separarCookie.length; i++) {
        separarCookie[i]=separarCookie[i].trim(); 
        console.log(separarCookie[i]);
        if(separarCookie[i].includes(nombre)){

            valor=decodeURIComponent(separarCookie[i].split("=")[1]);
            
        }
        return valor;

     }
}

function checkCookie(nombre){
    let encontrado=false;
    let separarCookie=document.cookie.split(";");
    let nombreSeleccionado=null;
    //Comprueba si en el array existe el nombre en la cadena
    for (let i = 0; i < separarCookie.length; i++) {
        separarCookie[i]=separarCookie[i].trim();
        //vuelve a comprobar el nombre en el nombre del array
        if(separarCookie[i].includes(nombre)){
            nombreSeleccionado=separarCookie[i].split("=");
            if(nombreSeleccionado[0].includes(nombre)){
            encontrado=true;
            console.log("entra");
        }
    }
        return encontrado;
    }    
}
function getAndDecodeCookies(){

    let separarCookies=document.cookie.split(";");
    let cookie="";
    let clave="";
    let valor="";
    let mapaCookie= new Map();

    for (let i = 0; i < separarCookies.length-1; i++) {
        
        separarCookies[i]=separarCookies[i].trim();
        cookie=separarCookies[i].split("=");
        clave=cookie[0];
        valor=decodeURIComponent(cookie[1]);
        mapaCookie.set(clave,valor);   
    }
    console.log(mapaCookie);
}
