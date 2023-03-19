const CLASE_ERROR_CAMPO = "error";
const CLASE_ERROR_MENSAJE = "campoAnadir";

//////////////////// ACTIVIDAD 1 ////////////////////////////

/**
 *Tenemos que hacer blur y el checkValidity,
 *Está dividido en dos funciones la primera hace la comprobación del checkvalidyty y la que la llama
 *ejecuta la función  donde validadr campo con un evento blur
 **/

// Eventos al peder el foco (se comprueba si existe error en el campo)
document
  .getElementById("email")
  .addEventListener("blur", validarCampoEvento, false);
document
  .getElementById("pass")
  .addEventListener("blur", validarCampoEvento, false);
document
  .getElementById("nombre")
  .addEventListener("blur", validarCampoEvento, false);
document
  .getElementById("edad")
  .addEventListener("blur", validarCampoEvento, false);
//////////////////// ACTIVIDAD 2 ////////////////////////////

/**
 *Se crea una función mostrarMensajesError En donde se le pasa el campo y el mensaje, creamos un div , donde le añadimos el un id , con el valor el nombre
 *del campo , una clase con el nombre clase error,hacemos un bucle con los mensaajes
 *creamos un parrado donde se le añade el mensaje de error, añadimos el parrafo en el div, e insertamos el div despues del campo.
 *creamos una funcion notificar los errores, donde le añadiremos una nueva clase para poder manejar el css, comprobamos el tipo de fallo
 *con el validity.eltipodeerror y los errores los metemos en un array para que una vez que se terminen las comprobaciones, pasamos array de mensajes
 * y el campo a la función mostrarMensajesErrorEn,
 *En el elemento le añadimos el evento input
 *
 *creamos la funcion validarFormulario son donde como parametros se le añaden eventos
 *validamos el formulario con una variable donde validarCampo(document.getElementById("pass")) && formValido y despues,
 *comprobamos si es todo true, en el
 *
 ***/
// Eventos lanzados al producirse una validación negativa de cada campo (se muestran los errores en la intefaz gráfica)
document
  .getElementById("email")
  .addEventListener("invalid", mensajesError, false);
document
  .getElementById("pass")
  .addEventListener("invalid", mensajesError, false);
document
  .getElementById("nombre")
  .addEventListener("invalid", mensajesError, false);
document
  .getElementById("edad")
  .addEventListener("invalid", mensajesError, false);

//////////////////// ACTIVIDAD 3 ////////////////////////////

/***
creamos la funcion eliminarErrores, donde eliminamos la clase previamente creada, el div creado con el nombre del campo_error,
*creamos la función revisarErrores elementos, donde le pasamos como parametros e y comprobamos los campos, con validity valid 
si es valido hace la funcion eliminar errores al campo, se le pone al elemento el evento input
 **/

// Eventos lanzados al producirse una validación negativa de cada campo (se limpian los errores de la intefaz en caso de ser necesario)
document
  .getElementById("email")
  .addEventListener("input", borrarErrores, false);
document.getElementById("pass").addEventListener("input", borrarErrores, false);
document
  .getElementById("nombre")
  .addEventListener("input", borrarErrores, false);
document.getElementById("edad").addEventListener("input", borrarErrores, false);
// Evento para el tratamiento de los errores al hacer "submit" en el formulario
document
  .getElementById("formulario")
  .addEventListener("submit", validarFormulario, false);

function insertarDespues(campoReferencia, campoAnadir) {
  if (campoReferencia.nextSibling) {
    // El elemento de referencia tiene un hermano detrás
    // El elemento a añadir se añade después del siguiente hermano de "campoReferencia"
    campoReferencia.parentNode.insertBefore(
      campoAnadir,
      campoReferencia.nextSibling
    );
  } else {
    // El elemento de referencia no tiene un hermano detrás
    // Se añade como último hijo de su padre
    campoReferencia.parentNode.appendChild(campoAnadir);
  }
}

/**
 * Validamos el campo evento
 */
function validarCampoEvento(e) {
  comprobarValidacion(e.target);
}

/**
 * Comprobamos si el campo es valido
 */
function comprobarValidacion(campo) {
  return campo.checkValidity();
}

function mostraMensajesError(campo, mensajes) {
  let div = document.createElement("div");

  div.setAttribute("id", `${campo.name}_error`);
  div.classList.add(CLASE_ERROR_MENSAJE);
  for (let i = 0; i < mensajes.length; i++) {
    let p = document.createElement("p");
    p.textContent = mensajes[i];
    div.appendChild(p);
  }
  insertarDespues(campo, div);
}

function mensajesError(e) {
  const campo = e.target;
  campo.classList.add(CLASE_ERROR_CAMPO);
  let mensajes = [];
  if (campo.validity.valueMissing) {
    mensajes.push("El campo no puede estar vacio");
  }
  if (campo.validity.rangeOverflow) {
    mensajes.push("Introduzca un valor menor de  100");
  }
  if (campo.validity.rangeUnderflow) {
    mensajes.push("Introduzca un valor mayor de 18");
  }
  if (campo.validity.tooLong) {
    mensajes.push("El numero de caracteres es mayor a 10");
  }
  if (campo.validity.typeMismatch) {
    mensajes.push("Los datos suminstrados no tienen el formato correcto");
  }
  mostraMensajesError(campo, mensajes);
}

function borrarErrores() {
  campo.classList.remove(CLASE_ERROR_CAMPO);
  const mensajesError = document.getElementById(`${campo.name}_error`);
  if (mensajesError) {
    mensajesError.pare.removeChild(mensajesError);
  }
}

function comprobarSiEsValido(e) {
  borrarErrores(campo);
  return campo.checkValidity();
}

function validarFormulario(e) {
  let formVal = validarCampoEvento(document.getElementById("email"));
  formVal = validarCampoEvento(document.getElementById("pass")) && formVal;
  formVal = validarCampoEvento(document.getElementById("nombre")) && formVal;
  formVal = validarCampoEvento(document.getElementById("edad")) && formVal;
  if (formVal) {
    console.log("Formulario sin errores");
  } else {
    e.preventDefault();
    console.log("Formulario con errores");
  }
}
