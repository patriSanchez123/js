let navegacionPrivada='Ahora la navegación es privada';
const MENSAJE_TERMINOS='¿Acepta los terminos y condiciones?';
const NO_TERMINOS="No se han aceptado los terminos";
const SI_TERMINOS="Se han aceptado los terminos";
const NOMBRE_POR_DEFECTO="Harry Potter";
const INTRODUCIR_NOMBRE="Introduce su nombre";
const SALUDO="Hola";

function alerta(){

    alert(navegacionPrivada);

}

function aceptarTerminosyCondiciones(){

    let terminos=confirm(MENSAJE_TERMINOS);

    if(terminos){

       console.log(SI_TERMINOS); 
    }
    else{
        console.log(NO_TERMINOS);
    }


}

function introducirNombre(){
    let nombreIntroducido=prompt(INTRODUCIR_NOMBRE,NOMBRE_POR_DEFECTO);
    if(nombreIntroducido!=null){
        console.log(SALUDO+" "+ nombreIntroducido);
    }
    else{
        console.log("El usuario ha cancelado la ventana");
    }
    
}
introducirNombre();
//alerta();
//aceptarTerminosyCondiciones();


