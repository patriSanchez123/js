export function mostrarResultado(texto, cumpleExprReg) {
    eliminarErrores();
    eliminarAciertos();
    if(cumpleExprReg) {
        mostrarMensajesAcierto([`Existe coincidencia del texto "${texto}"`]);
    }else {
        mostrarMensajesError([`No existe coincidencia de la expresión regular en el texto "${texto}"`]);
    }
}

const CLASE_ERROR_CAMPO = "error";
const CLASE_ERROR_MENSAJE = "campoAnadirError";

const CLASE_ACIERTO_CAMPO = "acierto";
const CLASE_ACIERTO_MENSAJE = "campoAnadirAcierto";

/**
 * Método que incrusta los mensajes de error debajo del campo afectado
 * @param {Array} mensajes lista de los mensajes de error a mostrar en el campo 
 * @param {Element} campo elemento del DOM para el que hay que mostrar mensajes de error
 */
function mostrarMensajesError(mensajes) {
    const campo = document.getElementById("prueba");
    campo.classList.add(CLASE_ERROR_CAMPO);
    // Se crea un elemento "div" que servirá de contenedor para los mensajes
    let div = document.createElement("div");
    // Se establecen los atributos del "div" (id y se añade una clase)
    div.setAttribute("id", `${campo.name}_error`);
    div.classList.add(CLASE_ERROR_MENSAJE);
    for(let i = 0; i < mensajes.length; i++) {
        // Cada mensaje será un párrafo "p" que se añadirá al "div"
        let parrafo = document.createElement("p");
        // Se añade el contenido del párrafo (el mensaje de error)
        parrafo.textContent = mensajes[i];
        // Se añade el párrafo al "div"
        div.appendChild(parrafo);
    }
    // Se inserta el "div" detrás del campo que ha provocado el error
    insertarDespues(campo, div);
}

/**
 * Método de utilidad que añade la funcionalidad al DOM de añadir un elemento (campoAnadir) HTML detrás
 * de otro elemento del DOM indicado (campoReferencia)
 * @param {Element} campoReferencia campo detrás del que hay que añadir el nuevo elemento
 * @param {Element} campoAnadir nuevo elemento que hay que añadir
 */
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

function eliminarErrores() {
    const campo = document.getElementById("prueba");
    campo.classList.remove(CLASE_ERROR_CAMPO);
    const mensajesError = document.getElementById(`${campo.name}_error`);
    if(mensajesError) {
        mensajesError.parentElement.removeChild(mensajesError);
    }
}

function mostrarMensajesAcierto(mensajes) {
    const campo = document.getElementById("prueba");
    campo.classList.add(CLASE_ACIERTO_CAMPO);
    // Se crea un elemento "div" que servirá de contenedor para los mensajes
    let div = document.createElement("div");
    // Se establecen los atributos del "div" (id y se añade una clase)
    div.setAttribute("id", `${campo.name}_acierto`);
    div.classList.add(CLASE_ACIERTO_MENSAJE);
    for(let i = 0; i < mensajes.length; i++) {
        // Cada mensaje será un párrafo "p" que se añadirá al "div"
        let parrafo = document.createElement("p");
        // Se añade el contenido del párrafo (el mensaje de acierto)
        parrafo.textContent = mensajes[i];
        // Se añade el párrafo al "div"
        div.appendChild(parrafo);
    }
    // Se inserta el "div" detrás del campo que ha provocado el acierto
    insertarDespues(campo, div);
}

function eliminarAciertos() {
    const campo = document.getElementById("prueba");
    campo.classList.remove(CLASE_ACIERTO_CAMPO);
    const mensajesAcierto = document.getElementById(`${campo.name}_acierto`);
    if(mensajesAcierto) {
        mensajesAcierto.parentElement.removeChild(mensajesAcierto);
    }
}