let ventana1=null;
let ventana2=null;
function abrirVentana1(){

    if(ventana1==null){
        ventana1=window.open("http://127.0.0.1:5500/OtraVentana/ventana1.html","","width=300,height=300");
        
    }else{

        console.log("La ventana 1 está abierta");
    }

}
function abrirVentana2(){

    if(ventana2==null){

        ventana2=window.open("http://127.0.0.1:5500/OtraVentana/ventana2.html","","width=300,height=300");
    }else{

        console.log("La ventana2 está abierta");
    }

}

function cerrarVentana1(){

    if(ventana1!=null){

    ventana1.window.close()
        ventana1=null;
    }
    else{
        console.log("No se encuentra ninguna ventana 1 abierta");
    }

}

function cerrarVentana2(){

    if(ventana2!=null){

    ventana2.window.close()
        ventana2=null;
    }
    else{
        console.log("No se encuentra ninguna ventana 2 abierta");
    }

}