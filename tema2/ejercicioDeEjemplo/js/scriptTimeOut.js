let timeoutID=null;


function alertaEjecucionTemp(){
    alert("Se ha ejecutado el temporizador de 10 segundos");

}
function crearTimeout(){

    if(timeoutID==null){

        timeoutID=setTimeout(alertaEjecucionTemp,3000);
        
       
    }
    else{

        console.log('Ya existe un temporizador');
        timeoutID=null;
    }

  

}

function borrarTimeout(){
    if(timeoutID!=null){
        clear=clearTimeout(timeoutID);
        timeoutID=null;
    }
    else{

        console.log('Ya se ha echo la limpieza');
    }
   
}



    
