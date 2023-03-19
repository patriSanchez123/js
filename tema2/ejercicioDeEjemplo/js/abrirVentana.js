let configuracionVentana="width=100,height=100,top=50,left=50,menubar=YES,location=YES,toolbar=YES,scrollbars=YES,resizable=YES";
let nuevaVentana=null;

function abrirVentana(){
if(nuevaVentana===null){

    nuevaVentana=window.open("","",configuracionVentana);
}
else{

    console.log("La ventana se encuentra abierta");
}

}

function cerrarVentana(){
    if(nuevaVentana!=null){
        nuevaVentana=window.close();
        nuevaVentana=null;
    }
    else{
        console.log("No existe ninguna ventana para cerrar");
    }


}
function aumentarAncho(){
    if(nuevaVentana!=null){
        nuevaVentana.resizeBy(0,250);
    }else{
        console.log("No existe ninguna ventana abierta");
    }
}
function fijarAncho(){
    if(nuevaVentana!=null){
        nuevaVentana.resizeTo(250,250);
    }else{
        console.log("No existe ninguna ventana abierta");
    }
}
function moverDerecha(){
    if(nuevaVentana!=null){
        nuevaVentana.moveBy(250,250);
    }else{
        console.log("No existe ninguna ventana abierta");
    }
}
function moverDerechaBajo(){
    if(nuevaVentana!=null){
        nuevaVentana.moveTo(500,200);
    }else{
        console.log("No existe ninguna ventana abierta");
    }
    
}



