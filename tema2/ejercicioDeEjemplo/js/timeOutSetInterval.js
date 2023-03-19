let nuevaVentana=null;
let configuracionVentana="width=100,height=100,top=50,left=50,menubar=YES,location=YES,toolbar=YES,scrollbars=YES,resizable=YES";
let time=null;
let interval=null;
let contador;

function abrirVentana(){
    

        nuevaVentana=window.open("","",configuracionVentana);
    
    
}

function cerrarVentana(){

    if(nuevaVentana!=null){

        nuevaVentana.close();
    }
    
}

function timeOut(){
    abrirVentana();


if(time===null){
    
    time=window.setTimeout(cerrarVentana,5000);
    
}else{
    console.log("Problemaaa")
    time=null;
}

}
function limpiarTimeOut(){
if(time!=null){
    clear=clearTimeout(time);
    time=null;
}
else{

    console.log('Ya se ha echo la limpieza');
}
}

function contadorSegundos(){
    contador++;
    console.log(contador);
}

function intervalo(){
if(interval===null){
interval=setInterval(contadorSegundos,1000);

}else{

    console.log("Esto si que es un fallo");
}
}

function quitarTemporizador(){
    if(interval!=null){
    limpiarIntervalo=clearInterval(interval);
    }else{

        console.log("Fallooooo");
    }
}