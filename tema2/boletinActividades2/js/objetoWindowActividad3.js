let nuevaVentana=null;
let configuracuonVentana="width=100,height=100,resizable";
function crearVentana(){
    //Menu navegador visible
    if(nuevaVentana===null || nuevaVentana.closed){
        nuevaVentana=window.open(""," ",configuracuonVentana);
    }else{
        console.log("La ventana ya esta abierta");
    } 

    }
function aumentartamanio(){
    if(nuevaVentana!==null){
        nuevaVentana.resizeBy(250,250);
        nuevaVentana.focus();
        //nuevaVentana.focus();
        
        console.log("Ha entrado");
    
    }else{
        console.log("La ventana no ha sido creada");
    }
    }
function fijarAnchoAlto(){
    
    if(nuevaVentana!==null || !nuevaVentana.closed){
    
       nuevaVentana.resizeTo(250, 250);
       nuevaVentana.focus();
    }else{
        console.log("La ventana no ha sido creada");
    }
}
function moverVentana250D(){
    //El primer parametro indica Horizontal y el segundo vertical
    //Cuando es positivo indica a la derecha o abajo y cuando es negativo indica a la izq, o arriba
    //MoveBy mueve la ventana esté donde esté
    if(nuevaVentana!==null || !nuevaVentana.closed){
        nuevaVentana.moveBy(250,0);
        nuevaVentana.focus();

    }else{
    console.log("La ventana no ha sido creada");
    }
}
function moverVentana500D(){

     //El primer parametro indica Horizontal y el segundo vertical
    //Cuando es positivo indica a la derecha o arriba y cuando es negativo indica a la izq, o arriba
    if(nuevaVentana!==null || !nuevaVentana.closed){
        nuevaVentana.moveTo(500,200);
        nuevaVentana.focus();

    }else{
    console.log("La ventana no ha sido creada");
    }   
}
