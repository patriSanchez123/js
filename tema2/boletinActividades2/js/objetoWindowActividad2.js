let nuevaVentana=null;
let configuracuonVentana="width=600,height=450,top=50,left=50,menubar=yes,location=yes,toolbar=yes,status=yes,scrollbars=yes,resizable=yes";
function crearVentana(){
    //Menu navegador visible
    if(nuevaVentana==null){
        nuevaVentana=window.open("https://www.google.es"," ",configuracuonVentana);
    }else{
        console.log("La ventana ya esta abierta");
    } 

    }

    
function cerrarVentana(){

    if(nuevaVentana!=null){

        nuevaVentana.close();
        nuevaVentana=null;
    }else{

        console.log("No se encuentra ninguna ventana abierta");
    }

    
}