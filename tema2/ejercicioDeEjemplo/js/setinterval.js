let intervalID=null;
let timeoutID=null;
let tiempo;

function mensaje(){

    console.log("Esta imprimiendo cada 2 segundos");
}


function crearIntervalo(){
tiempo=prompt("Introduce los segundos");

if(isNaN(tiempo)){
    if(intervalID==null){
    intervalID=setInterval(mensaje,parseInt(tiempo)*1000);


}else{
    console.log("Ya se esta ejecutanlo el intervalo");

}
}else{

    console.log("Introduce un valor correcto");
}
function eliminarIntervalo(){

    if(intervalID!=null)

    clearInterval(intervalID);
    else{

        console.log("Ya se ha eliminado el intervalo");
    }


}
}