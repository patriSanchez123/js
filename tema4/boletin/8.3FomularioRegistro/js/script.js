const ANIADIR = "campoAnadir";
const CLASE_ERROR_DIV = "error";
document.getElementById("nombre").addEventListener("blur",mensajesErrorNombre,false);
 document.getElementById("nombre").addEventListener("invalid",mensajesErrorNombre,false);
 document.getElementById("nombre").addEventListener("input",revisarMensajes,false);

function validarEventoNombre(e){
  const campo=e.target;
  eliminarMensajes(campo);
  return validarCampoNombre(campo);
}
function validarNombreCampo(campo){
  actualizarErroresNombre(campo);
  return campo.checkValidity();
}

function actualizarErroresNombre(campo){

  let mensajes="";
  if(campo.value.length < 8){
    mensajes="El campo tiene que contener más de 8 caracteres";
  }else if(campo.value.length >30){
    mensajes="El campo tiene que contener menos dde 30 caracteres";
  }else{
    mensajes="";
  }
  campo.setCustomValidity(mensajes);
}

function mensajesErrorNombre(e){

  const campo=e.target;
  let mensajes=[];
  campo.classList.add(CLASE_ERROR_DIV);
  if(campo.validity.customError){
    eliminarMensajes(campo);
    mensajes.push(campo.validationMessage);
  }
  mostrarErroresEn(campo,mensajes);
}

function revisarMensajes(e){
  const campo=e.target;
  actualizarErroresNombre(campo);
  if(campo.validity.valid){
    eliminarMensajes(campo);
  }
}

function mostrarErroresEn(campo, mensajes) {
  let div = document.createElement("div");
  div.classList.add(ANIADIR);

  for (let i = 0; i < mensajes.length; i++) {
    let parrafo = document.createElement("p");
    parrafo.setAttribute("id", `${campo.name}_error`);
    parrafo.textContent = mensajes[i];
    div.appendChild(parrafo);
    //insertarDespues(campo,div)
    if(campo.type==="checkbox"){
      campo.parentNode.insertAdjacentElement("beforebegin", div);
  }
  campo.insertAdjacentElement("beforebegin", div);
}
}

//Funcion que elimina los mensajes de error
function eliminarMensajes(campo) {
  let busquedaDeParrafoError = document.getElementById(`${campo.name}_error`);
  campo.classList.remove(CLASE_ERROR_DIV);
  if (busquedaDeParrafoError) {
    busquedaDeParrafoError.parentNode.removeChild(busquedaDeParrafoError);
  }
}
