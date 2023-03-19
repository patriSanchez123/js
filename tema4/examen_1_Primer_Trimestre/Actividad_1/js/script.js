///////////////////////////// FUNCIONES QUE SE DEBEN USAR PARA EL EJERCICIO (AQUÍ NO TOQUES EL CÓDIGO) /////////////////////////
/**
 * Función que devuelve el valor del ancho seleccionado mediante el "slider"
 * correspondiente
 * @returns ancho que se configurará en la ventana.
 */

let ventanaNueva=null;
const ERROR_CREAR_VENTANA="Error la ventana ya ha sido creada";
const ERROR_CERRAR_VENTANA="Error, no hay ninguna ventana abierta";
function obtenerValorAncho() {
    return sliderAncho.value;
}

/**
 * Función que devuelve el valor del alto seleccionado mediante el "slider"
 * correspondiente
 * @returns alto que se configurará en la ventana.
 */
function obtenerValorAlto() {
    return sliderAlto.value;
}
///////////////////////////// FIN FUNCIONES QUE SE DEBEN USAR PARA EL EJERCICIO /////////////////////////


///////////////////////////// FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////
/**
 * Funcioón que crea una nueva ventana con los valores de ancho y de alto
 * que le da al usuario
 */
function crearNuevaVentana() {
    //constantes que modifica la configuracion de la ventana
    const TEXTO_VENTANA="Nueva ventana de"+obtenerValorAncho()+","+obtenerValorAlto();
    const anchoAlto="";

    //comprueba que la ventana no exista y no existe se crea la ventana con su configuración
    //si no lanza error por consola
    if(ventanaNueva===null){
        /**
         * Guardamos en localStorage los resultados y los sacamos del mismo
         */
        localStorage.setItem("ancho",obtenerValorAncho());
        localStorage.setItem("alto",obtenerValorAlto());
        let ancho=localStorage.getItem("ancho");
        let alto=localStorage.getItem("alto");


       // ventanaNueva=window.open("ventana.html","","width="+obtenerValorAncho()+",height="+obtenerValorAlto()+",resizable=yes");

       ventanaNueva=window.open("ventana.html","","width="+ancho+",height="+alto+",resizable=yes");


      //NO soy capaz de ponerlo en la ventana correspondiente
      const text = document.createElement("p");
      text.innerText = TEXTO_VENTANA;
      document.body.appendChild(text);

      

    }else{

        console.error(ERROR_CREAR_VENTANA);
        
    }
}

/**
 * Función que redimensiona la ventana segun el tamaño que da el usuario
 */
function redimensionarVentana() {
    const TEXTO_VENTANA="Ventana redimensionada a"+obtenerValorAncho()+","+obtenerValorAlto();

    if(ventanaNueva!=null){
        /**
         * Guardamos en localStorage los resultados y los sacamos del mismo
         */
        localStorage.setItem("ancho",obtenerValorAncho());
        localStorage.setItem("alto",obtenerValorAlto());
        let ancho=localStorage.getItem("ancho");
        let alto=localStorage.getItem("alto");

        //Redimensionamos las propiedades de la ventana
             ventanaNueva.resizeBy(ancho, alto);
    

         //NO soy capaz de ponerlo en la ventana correspondiente
    const text = document.createElement("p");
    text.innerText = TEXTO_VENTANA;
    document.body.appendChild(text);


    }else{

        console.error(ERROR_CERRAR_VENTANA);
    }  
     
}

/**
 * Función que cierra la ventana creada por el usuario
 */
function cerrarVentana() {
    //Comprobamos que la ventana no esté cerrada, si no esta cerrada, se cierra
    //si no lanza error por consola
    if(ventanaNueva!=null){

        ventanaNueva.window.close();
        ventanaNueva=null;

    }else{

        console.error(ERROR_CERRAR_VENTANA);
    }
}
///////////////////////////// FIN FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////