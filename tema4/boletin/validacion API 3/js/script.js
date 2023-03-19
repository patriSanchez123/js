const CLASE_ERROR_DIV="error";
const CLASE_ANIADIR="campoAnadir";

document.getElementById("email").addEventListener("blur",comprobarValiacion,false);
document.getElementById("pass").addEventListener("blur",comprobarValiacion,false);
document.getElementById("edad").addEventListener("blur",comprobarValiacion,false);

document.getElementById("email").addEventListener("invalid",mensajesErrorEvento,false);
document.getElementById("pass").addEventListener("invalid",mensajesErrorEvento,false);
document.getElementById("edad").addEventListener("invalid",mensajesErrorEvento,false);


document.getElementById("email").addEventListener("input",comprobarErrores,false);
document.getElementById("pass").addEventListener("input",comprobarErrores,false);
document.getElementById("edad").addEventListener("input",comprobarErrores,false);

document.getElementById("formulario").addEventListener("submit",comprobarFormulario,false);


/**
 * Función que comprueba si es valido el evento
 * @param {*} e 
 * @returns 
 */
function comprobarValiacion(e){

    campo=e.target;
    eliminarMensajes(campo);
    return campo.checkValidity();
}



/**
 * Funcion que comprueba si el formulario es valido
 */
function comprobarFormulario(){
    
    let formuVal=document.getElementById("email").checkValidity();
    formuVal=document.getElementById("pass").checkValidity() && formuVal;
    formuVal=document.getElementById("edad").checkValidity() && formuVal;
    
    console.log("Formulario "+ formuVal)

    return formuVal;

}

function mensajesErrorEvento(e){
campo=e.target;
mensajesError(campo);

}

function comprobarErrores(e){

    let campo=e.target;
    
    if(campo.validity.valid){
       
        eliminarMensajes(campo);
    }
}

function mensajesError(campo){
    
    let mensajes=[];
    campo.classList.add(CLASE_ERROR_DIV);
    if(campo.validity.valueMissing){
        
        mensajes.push("El campo no puede estar vacio");
    }
    if(campo.validity.typeMismatch){
        mensajes.push("El formato no es correcto");

    }
    if(campo.validity.patternMismatch){

        mensajes.push("La contraseña debe al menos un numero");
    }
    if(campo.validity.rangeUnderflow || campo.validity.rangeOverflow) {
        mensajes.push(`Debe contener un valor entre ${campo.min} y ${campo.max}`);
    }
    
    mostrarMensajeError(mensajes,campo);


}
function mostrarMensajeError(mensajes,campo){
    
    let div=document.createElement("div");
    div.classList.add(CLASE_ANIADIR);

    for (let i = 0; i < mensajes.length; i++) {
    let p=document.createElement("p");
    p.setAttribute("id",`${campo.name}_error`); 
    p.textContent=mensajes[i];
    
    div.appendChild(p);
    insertarDespues(campo,div);   
    }
    
}

function eliminarMensajes(campo){

let busquedaParrafoError=document.getElementById(`${campo.name}_error`);
campo.classList.remove(CLASE_ERROR_DIV);
if(busquedaParrafoError){
    busquedaParrafoError.parentNode.removeChild(busquedaParrafoError); 
}

}

function insertarDespues(campoReferencia, campoAnadir){
    if(campoReferencia.nextSibling){
        // El elemento de referencia tiene un hermano detrás
        // El elemento a añadir se añade después del siguiente hermano de "campoReferencia"
        campoReferencia.parentNode.insertBefore(campoAnadir,campoReferencia.nextSibling); 
    } else { 
        // El elemento de referencia no tiene un hermano detrás
        // Se añade como último hijo de su padre
        campoReferencia.parentNode.appendChild(campoAnadir); 
    }
}
