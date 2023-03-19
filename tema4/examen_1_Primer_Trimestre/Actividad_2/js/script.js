///////////////////////////// FUNCIONES QUE SE DEBEN USAR PARA EL EJERCICIO (AQUÍ NO TOQUES EL CÓDIGO) /////////////////////////
/**
 * Función que indica si la cookie cuyo nombre se indica con el parámetro existe en la página
 * @param {string} nombre nombre de la cookie
 * @returns true en caso de que la cookie exista en la página
 */
 function existeCookie(nombre) {
    // Se intenta recuperar la cookie y si está vacía, significa que no existe
    return obtenerCookie(nombre) !== "";
}

/**
 * Función que crea una cookie con el nombre y valor indicados en los parámetros.
 * El parámetro diasDeVida indica cuántos días queremos que tarde en expirar la cookie.
 * @param {string} nombre nombre de la cookie que se quiere establecer
 * @param {string} valor valor de la cookie que se quiere establecer
 * @param {number} diasDeVida número de días que va a tardar en expirar la cookie.
 * Si no se indica este parámetro, el tiempo de expiración lo establece el navegador
 */
function establecerCookie(nombre, valor, diasDeVida = null) {
    if(diasDeVida) {
        // Si se indican los días que tardará en expirar la cookie,
        // se crea un date para facilitar el cálculo de la fecha de expiración
        // y se establece la cookie
        const d = new Date();
        d.setTime(d.getTime() + (diasDeVida * 24 * 60 * 60 * 1000));
        document.cookie = `${nombre}=${valor};expires=${d.toUTCString()};path=/`;
    }else {
        // No se indican los días que tardará en expirar la cookie,
        // se establece la cookie sin fecha de expiración
        document.cookie = `${nombre}=${valor};path=/`;
    }
}

/**
 * Función que obtiene el valor de la cookie que tiene el nombre indicado en el parámetro
 * @param {string} name nombre de la cookie de que se quiere obtener el valor
 * @returns valor de la cookie cuyo nombre se pide en el parámetro de entrada
 */
function obtenerCookie(name) {
    let valorCookie = "";
    const strCookies = document.cookie;
    if(strCookies !== "") {
        // Si existe alguna cookie en la página, se trocea y se recorre en busca del nombre
        // que coincide con el parámetro de entrada
        const cookies = strCookies.split(";");
        for(let i = 0; i < cookies.length && valorCookie == ""; i++) {
            const claveValorCookie = cookies[i].split("=");
            if(claveValorCookie[0].trim() === name) {
                valorCookie = claveValorCookie[1];
            }
        }
    }

    return valorCookie;
}
///////////////////////////// FIN FUNCIONES QUE SE DEBEN USAR PARA EL EJERCICIO /////////////////////////




///////////////////////////// FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////
/**
 * Función que calcula la edad, que recoge desde la cookie
 */
function calcularEdad() {

    //Variables 
    const nombreCookie="fechaNacimiento";
    let comprobarCookie=existeCookie(nombreCookie);
    let FECHA_NACIMIENTO="";
    let numeroDedias=1;
    let cookieFecha=document.cookie.split(";");
    let fechaParaDividir="";
    let fechaNacimientoMili=0;
    
    let dia="";
    let mes="";
    let anio="";
    //Comprobamos que exista la cookie
    if(comprobarCookie){
        console.log("aqui entra");
        for (let i = 0; i < cookieFecha.length; i++) {
            

            if(cookieFecha[i].includes("fechaNacimiento")){
                fechaParaDividir=cookieFecha[i].split("=");  


            fechaParaDividir=fechaParaDividir[1].split("/");
            dia=fechaParaDividir[0].trim();
            mes=fechaParaDividir[1].trim();
            anio=fechaParaDividir[2].trim();    
            }
            
        }
        const fechaNacimiento = new Date(anio+"-"+mes+"-"+dia);
        fechaNacimientoMili=fechaNacimiento.getMilliseconds()
        
       

    }else{  
            
        FECHA_NACIMIENTO=prompt("Introduce su fecha de naciminto");
        establecerCookie(nombreCookie,FECHA_NACIMIENTO,numeroDedias);
        
    }
}
/**
 * Función que borra la fecha de nacimiento, que está en la cookie
 */
function borraFechaNacimiento() {
    const fechaNacimiento="fechaNacimiento";
    borrarCookie(fechaNacimiento);
    

}
/**
 * Función que borra una cookie dada
 * @param {String} nombre Parametro que se va a usar para borrar la cookie
 */
function borrarCookie(nombre) {
    //Comprobamos que existe la cookie;
    let comprobarCookie=existeCookie(nombre);

    if(comprobarCookie){
        document.cookie=nombre+"=;"+"expires=Thu, 18 Dec 2013 12:00:00 UTC";

    }else{

        alert("La fecha de nacimiento no se ha suministrado o ha expirado");
    }
   
}
///////////////////////////// FIN FUNCIONES QUE DEBES IMPLEMENTAR ////////////////////////
