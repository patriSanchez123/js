const TEMPORIZADOR_EXISTE="Ya existe un temporizador";
const NO_TEMPORIZADOR="No existe ningun temporizador";
let timeoutID=null;
let setIntervalID=null;
function alertaEjecucionTemp(){
    alert("Se ha ejecutado el temporizador de 5 segundos");

}
function crearTimeOut (){
if(timeoutID===null){
    timeoutID=setTimeout(alertaEjecucionTemp,5000);
}
else{

    console.log(TEMPORIZADOR_EXISTE);
    timeoutID=null;
}
    
}
function borrarTimeout(){
    if(timeoutID!==null){
        cleanTimeout(crearTimeOut);
    }else{
        console.log(NO_TEMPORIZADOR);
    }
    
}

function imprimir(){

    console.log("Está imprimiendo cada 5 segundos");
}


function crearSetInterval (){
    if(setIntervalID===null){
    setIntervalID=setInterval(imprimir,5000);
}else{
    console.log(TEMPORIZADOR_EXISTE);
}
}
function borrarSetInterval(){

    if(setIntervalID!==null){
        clearInterval(setIntervalID);
    }else{
        console.log(NO_TEMPORIZADOR);
    }
}