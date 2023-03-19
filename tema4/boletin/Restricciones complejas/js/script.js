const CLASE_ERROR_DIV="error";
const CLASE_ANIADIR="campoAnadir";

const checkInteres=document.querySelectorAll("input[type=checkbox");

document.getElementById("email").addEventListener("blur",validarSinResComplejasEvento,false);
document.getElementById("pass").addEventListener("blur",validarSinResComplejasEvento,false);
document.getElementById("repeticionPass").addEventListener("blur",validarPassEvento,false);
document.getElementById("hombre").addEventListener("blur",validarGeneroEvento,false);
document.getElementById("mujer").addEventListener("blur",validarGeneroEvento,false);
document.getElementById("edad").addEventListener("blur",validarSinResComplejasEvento,false);



document.getElementById("email").addEventListener("invalid",mensajesErrorEvento,false);
document.getElementById("pass").addEventListener("invalid",mensajesErrorEvento,false);
document.getElementById("repeticionPass").addEventListener("invalid",mensajesErrorEvento,false);
document.getElementById("edad").addEventListener("invalid",mensajesErrorEvento,false);
document.getElementById("mujer").addEventListener("invalid",mensajesErrorEvento,false);
document.getElementById("hombre").addEventListener("invalid",mensajesErrorEvento,false);


document.getElementById("email").addEventListener("input",revisarErroresEvento,false);
document.getElementById("pass").addEventListener("input",revisarErroresEvento,false);
document.getElementById("repeticionPass").addEventListener("input",revisarErroresPassEvento,false);
document.getElementById("edad").addEventListener("input",revisarErroresEvento,false);
document.getElementById("mujer").addEventListener("input",revisarErroresGeneroEvento,false);
document.getElementById("hombre").addEventListener("input",revisarErroresGeneroEvento,false);

document.getElementById("formulario").addEventListener("submit",comprobarFormulario,false);

for(const checkIntere of checkInteres) {
    checkIntere.addEventListener("blur",validarInteresEvento,false);
    checkIntere.addEventListener("invalid",mensajesErrorInteresEvento,false);
    checkIntere.addEventListener("input",revisarErroresInteresEvento,false);
    
}


/**
 * Función donde se valida los campos que no tienen niguna restrinción
 * compleja
 * @param {} e 
 * @returns 
 */
function validarSinResComplejasEvento(e){
    const campo= e.target;
    return validarCampo(campo);
}

/**
 * Función donde hace el checkValidity y elimina los 
 * mensajes de errores
 * @param {*} campo 
 * @returns 
 */
function validarCampo(campo){
    eliminarMensajes(campo);
    return campo.checkValidity();
}


////////////////////////
function validarInteresEvento(e){
    const campo=e.target;
    actualizarErroresInteresesEvento(campo)
    return validarCampo(campo);
}

function revisarErroresInteresEvento(e){
    const campo=e.target;
    actualizarErroresInteresesEvento(campo);
   if(campo.validity.valid) {
    eliminarMensajes(campo);
    }
    
}




function actualizarErroresInteresesEvento(campo){
    const interes=document.querySelectorAll('input[type=checkbox');
    let mensaje="";
    let contador=0;

    for (let i = 0; i < interes.length; i++) {
        if(interes[i].checked){
            contador++;
        }
    }
    if(contador < 2){
        mensaje="Hay que selecionar al menos dos interes";
    }else{
       mensaje="";
    }
    campo.setCustomValidity(mensaje);
    
}

function mensajesErrorInteresCampo(campo){
    
    let mensajes=[];
    campo.classList.add(CLASE_ERROR_DIV);
    if(campo.validity.customError){
        mensajes.push(campo.validationMessage);
    }
    mostrarMensajeError(mensajes,campo);
    
    }
/////////////////////////////////////////////
    function mensajesErrorInteresEvento(e){
        campo=e.target;
        mensajesErrorInteresCampo(campo);
        
        }

/**
 * Función donde valida el campo evento y actualiza los mensajes
 * @param {*} e 
 * @returns 
 */
function validarPassEvento(e){
    const campo=e.target;
    actualizarErroresPass(campo);
    validarCampo(campo);
}

function validarPassCampo(campo){
    actualizarErroresPass(campo);
    validarCampo(campo);
}




/**
 * Función que modifica el mensaje setCustomValidity
 * @param {} campo 
 */
function actualizarErroresPass(campo){
    let mensaje="";
    const pass=document.getElementById("pass");
    if(campo.value !== pass.value){
        mensaje="La contraseña no identica";
        
    }else{
        mensaje="";
    }
    campo.setCustomValidity(mensaje);
}

function revisarErroresPassEvento(e){
    const campo=e.target;
    actualizarErroresPass(campo);
   if(campo.validity.valid) {
    eliminarMensajes(campo);
    }
    
}

/**
 * Función donde se valida el evento y se actualizan los errores
 * @param {} e 
 */
function validarGeneroEvento(e){
    const campo=e.target;
    actualizarErroresGenero(campo);
    validarCampo(campo);
}

/**
 * Función donde se hace el setCustomValidity y se le modifica el mensaje del mismo
 * @param {*} campo 
 */
function actualizarErroresGenero(campo) {
    let mensaje="";
    const genero=document.getElementsByName("genero");
    let generoEncontrado=false;

    for (let i = 0; i < genero.length && !generoEncontrado; i++) {
        if(genero[i].checked){
            generoEncontrado=true;
        }
        
    }
    if(!generoEncontrado){
        mensaje="Tiene que selecionar el genero";
    }else{
        mensaje="";
    }
    campo.setCustomValidity(mensaje);
}

function revisarErroresGeneroEvento(e){
    const campo=e.target;
    actualizarErroresGenero(campo);
   if(campo.validity.valid) {
    eliminarMensajes(campo);
    }
    
}

function comprobarFormulario(){
    
    let formuVal=validarCampo(document.getElementById("email"));
    formuVal=validarCampo(document.getElementById("edad")) && formuVal;
    formuVal=validarCampo(document.getElementById("pass")) && formuVal;
    formuVal=validarPassCampo(document.getElementById("repeticionPass")) && formuVal;
    formuVal=actualizarErroresGenero(document.getElementById("hombre")) && formuVal;
    formuVal=actualizarErroresGenero(document.getElementById("mujer")) && formuVal;
    const interes=document.querySelectorAll('input[type=checkbox');
    for (let i = 0; i < interes.length; i++) {
        formuVal=actualizarErroresGenero(interes[i]) && formuVal;
    }
    return formuVal;

}


/**
 * Funcion que comprueba si el campo es valido o invalido 
 * @param {} e 
 */
function revisarErroresEvento(e){

    let campo=e.target;
    
    if((campo.validity.valid)){
       
        eliminarMensajes(campo);
    }
}
/**
 * Función que muestra un mensaje de error si un campo es invalido
 * @param {} e 
 */
function mensajesErrorEvento(e){
    campo=e.target;
    mensajesError(campo);
    
    }

function mensajesError(campo){
    const repetirPass=document.getElementById("repeticionPass");
    const genero=document.getElementsByName("genero");
    const interes=document.querySelectorAll("input[type=checkbox");
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
    if(campo.name===repetirPass.name && campo.validity.customError){
        mensajes.push(campo.validationMessage);
    }if((campo.name===genero[0].name ||campo.name===genero[1].name ) && campo.validity.customError){
        mensajes.push(campo.validationMessage);
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
    
    if(campo.name!=="genero" && campo.type!=="checkbox"){

        insertarDespues(campo,div); 
    }else{
        insertarDespues(campo.parentNode,div);   
    }
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
