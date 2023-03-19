import * as bd from "./bbdd.js";

const ANIADIR = "campoAnadir";
const CLASE_ERROR_DIV = "error";
const CLASS_PROVINCIA = "provincia";


let hijos = document.getElementsByName("hijos");
const check=document.querySelectorAll("input[type=checkbox");
document
  .getElementById("nombre")
  .addEventListener("blur", validarNombreEvento, false);
document
  .getElementById("nombre")
  .addEventListener("invalid", mensajesErrorNombre, false);
document
  .getElementById("nombre")
  .addEventListener("input", revisarErroresNombreEvento, false);

document
  .getElementById("apellidos")
  .addEventListener("blur", validarApellidosEvento, false);
document
  .getElementById("apellidos")
  .addEventListener("invalid", mensajeErroresApellidos, false);
document
  .getElementById("apellidos")
  .addEventListener("input", revisarErroresApellidosEvento, false);

document.getElementById("email").addEventListener("blur", validarEvento, false);
document.getElementById("email").addEventListener("invalid", actualizarErroresCampo, false);
document.getElementById("email").addEventListener("input", revisarErroresEvento, false);

//document.getElementById("comunidad").addEventListener("load",llenarComunidades,false);
document.getElementById("provincia").addEventListener("click", actualizarCcaa, false);
document.getElementById("provincia").addEventListener("invalid", actualizarErroresCampo, false);
document.getElementById("provincia").addEventListener("input",revisarErroresEvento , false);



document.getElementById("comunidad").addEventListener("invalid", actualizarErroresCampo, false);
document.getElementById("comunidad").addEventListener("input",revisarErroresEvento , false);
document.getElementById("comunidad").addEventListener("click", actualizarProvincias, false);



document.querySelector("input[type=checkbox").addEventListener("invalid",mensajesErroresCheck ,false);
// document.querySelector("input[type=checkbox").addEventListener("input", revisarErroresCheck, false);

for (let i = 0; i < check.length; i++) {
  check[i].addEventListener("invalid",mensajesErroresCheck ,false);
  check[i].addEventListener("input",revisarErroresCheck ,false);
  check[i].addEventListener("input",precioTotal,false);
  
}


revisarErroresPago
document.querySelector("input[type=radio").addEventListener("invalid",mensajesErroresPago,false);
document.querySelector("input[type=radio").addEventListener("input",revisarErroresPago,false);


document.getElementById("formulario").addEventListener("submit", validarFormulario, false);


//****************************PRECIO CURSOS********** */

function precioTotal(e){
  const campo=e.target;
  const cursos=document.querySelectorAll("input[type=checkbox");
  const into=100;
  const avan=150;
  const descuento=20;
  const minRebaja=2;
  let precio=0;
  let p=document.getElementById("precio")

  let contador=0;
  for (let i = 0; i < cursos.length; i++) {
    
    if(cursos[i].checked){
      contador++;
      if(cursos[i].className === "intro"){
        precio=precio+into;
      }
      else if(cursos[i].className === "avanzado"){

        precio=precio+avan;
      }

    }
  }
  if(contador >= minRebaja){
    precio=precio-(precio*0.20);
    p.textContent=precio;
  }else{
    p.textContent=precio;
  }

}

//**********Formas de pago**********************/

function validarPagoCampo(campo){
  eliminaMensajes(campo);
  actualizarErroresPago(campo);
  return campo.checkValidity();
}
function actualizarErroresPago(campo){
  const pagos= document.querySelectorAll("input[type=radio");
  let mensajes="";
  let encontrado=false;

  for (let i = 0; i < pagos.length && !encontrado; i++) {
    if(pagos[i].checked){
      encontrado=true;
    }
  }
  if(encontrado){
    mensajes="";
  }else{
    mensajes="Tienes que selecionar un método de pago";
  }
  campo.setCustomValidity(mensajes);
}

function mensajesErroresPago(e){
  const campo=e.target;
  let mensajes=[];
    campo.classList.add(CLASE_ERROR_DIV);
  if(campo.validity.customError){
    eliminaMensajes(campo);
    mensajes.push(campo.validationMessage);
  }
  mostrarErroresEn(campo,mensajes);
}

function revisarErroresPago(e){
  const campo=e.target;
  const pago=document.querySelectorAll("input[type=radio");
  actualizarErroresPago(campo);
  if(campo.validity.valid){
    for (let i = 0; i < pago.length; i++) {
      
      eliminaMensajes(pago[i]);
    }
    
  }
}



//********************COMUNIDADES PROVINCIA********************/

function llenarComunidades() {
  let selec = document.getElementById("comunidad");
  const comunidades = bd.db.ccaa;

  for (let i = 0; i < comunidades.length; i++) {
    const option = document.createElement("option");
    // option.setAttribute("id",comunidades[i].code);
    option.textContent = comunidades[i].label;
    option.value = comunidades[i].code;
    selec.appendChild(option);
    // console.log(comunidades[i].label)
  }
}

function llenarProvincias() {
  let selec = document.getElementById("provincia");
  const provincias = bd.db.provincias;

  for (let i = 0; i < provincias.length; i++) {
    const option = document.createElement("option");
    // option.setAttribute("id",comunidades[i].code);
    option.textContent = provincias[i].label;
    option.value = provincias[i].ccaa_code;
    selec.appendChild(option);
    // console.log(comunidades[i].label)
  }
}

function actualizarProvincias(e) {
  const campo = e.target;
  let selecComunidades = document.getElementById("comunidad");
  let provincias = bd.db.provincias;
  const code = selecComunidades.value;
  let selectProvincia = document.getElementById("provincia");

  provincias = provincias.filter((e) => e.ccaa_code === code);

  while (selectProvincia.firstChild) {
    selectProvincia.removeChild(selectProvincia.firstChild);
  }
  console.log(provincias.filter((e) => e.ccaa_code === code));

  for (let i = 0; i < provincias.length; i++) {
    const option = document.createElement("option");
    option.textContent = provincias[i].label;
    option.value = provincias[i].ccaa_code;
    selectProvincia.appendChild(option);
    console.log(provincias[i].label);
  }
}

function actualizarCcaa(e) {
  const campo = e.target;

  const selectComunidades = document.getElementById("comunidad");
  const selectProvincia = document.getElementById("provincia");
  const code = selectProvincia.value;
  let comunidadesdb = bd.db.ccaa;

  for (let i = 0; i < selectComunidades.length; i++) {
    if (selectComunidades[i].value === code) {
      selectComunidades[i].selected = true;
    }
  }
}


//***************************CHECK ************************************ */



function validarCheckCampo(campo){
  eliminaMensajes(campo);
  actualizarErroresCheck(campo);
  return campo.checkValidity();
}

function actualizarErroresCheck(campo){
  let mensajes="";
  let encontrado=false;
  const check=document.querySelectorAll('input[type="checkbox');
 
  for (let i = 0; i < check.length && !encontrado; i++) {
    if(check[i].checked){
      encontrado=true;
  }
  }
  if(encontrado){
    mensajes="";
  }else{
    mensajes="Tienes que selecionar un curso";
  }
  campo.setCustomValidity(mensajes);
}
function mensajesErroresCheck(e){

  const campo=e.target;
  let mensajes=[];
  campo.classList.add(CLASE_ERROR_DIV);
  if(campo.validity.customError){
    eliminaMensajes(campo);
    mensajes.push(campo.validationMessage);
  }
  mostrarErroresEn(campo,mensajes);
}

function revisarErroresCheck(e){
  const campo=e.target;
  const check=document.querySelectorAll("input[type=checkbox");
  actualizarErroresCheck(campo);
  if(campo.validity.valid){
    
    for (let i = 0; i < check.length; i++) {
      eliminaMensajes(check[i]);
      
    }
    
  }
}

//*********Nombre*************************

//Función que elimina los mensajes y llama a validar campo(Es para el evento)
function validarNombreEvento(e) {
  const campo = e.target;
  eliminaMensajes(campo);
  return validarNombreCampo(campo);
}

//Funcion que valida el nombre y actualiza los errores(Funcion que sirve para validar el
// formulario y validar el evento)
function validarNombreCampo(campo) {
  actualizarErroresNombreCampo(campo);
  return campo.checkValidity();
}

//Funcion que actualiza los errores del nombre el setCustomvalidity
function actualizarErroresNombreCampo(campo) {
  const min = 8;
  const max = 15;
  let mensaje = "";

  if (campo.value === "") {
    mensaje = "El Campo nop puede estar vacio.";
  } else if (campo.value.length < min) {
    mensaje = "El campo no puede contener menos de 8 caracteres";
  } else if (campo.value.length > max) {
    mensaje = "El campo no puede contener mas de 15 caracteres";
  } else {
    mensaje = "";
  }
  campo.setCustomValidity(mensaje);
}

//Funcion que muestra los errores en el evento, si es invalido en el
//campo.validity.customError
function mensajesErrorNombre(e) {
  const campo = e.target;
  let mensajes = [];
  campo.classList.add(CLASE_ERROR_DIV);

  if (campo.validity.customError) {
    eliminaMensajes(campo);
    mensajes.push(campo.validationMessage);
  }
  mostrarErroresEn(campo, mensajes);
}

//funcion que revisa los errores para saber si el usuario a metido los
//datos correctos en el momento con el evento submit
function revisarErroresNombreEvento(e) {
  const campo = e.target;
  actualizarErroresNombreCampo(campo);
  if (campo.validity.valid) {
    eliminaMensajes(campo);
  }
}
///*********************Apellidos**********************

function validarApellidosEvento(e) {
  const campo = e.target;
  eliminaMensajes(campo);
  return validarApellidosCampo(campo);
}

function validarApellidosCampo(campo) {
  actualizarErroresApellidos(campo);
  return campo.checkValidity();
}

function actualizarErroresApellidos(campo) {
  const min = 8;
  const max = 30;
  let mensaje = "";
  if (campo.value === "") {
    mensaje = "El campo no se puede encontrar vacio";
  } else if (campo.value.length < min) {
    mensaje = "El campo no puede contener menos de " + min + " caracteres";
  } else if (campo.value.length > 30) {
    mensaje = `El campo no puede contener más de ${max}`;
  } else {
    mensaje = "";
  }

  campo.setCustomValidity(mensaje);
}

function mensajeErroresApellidos(e) {
  const campo = e.target;
  let mensajes = [];
  campo.classList.add(CLASE_ERROR_DIV);

  if (campo.validity.customError) {
    eliminaMensajes(campo);
    mensajes.push(campo.validationMessage);
  }
  mostrarErroresEn(campo, mensajes);
}

function revisarErroresApellidosEvento(e) {
  const campo = e.target;
  actualizarErroresApellidos(campo);
  if (campo.validity.valid) {
    eliminaMensajes(campo);
  }
}

//*****Eventos sin restriciones complejas************************ */

function validarEvento(e) {
  const campo = e.target;

  return validarCampo(campo);
}

function validarCampo(campo) {
  eliminaMensajes(campo);

  return campo.checkValidity();
}

function actualizarErroresCampo(e) {
  const campo = e.target;
  const min = 18;
  const max = 100;
  let mensajes = [];
  campo.classList.add(CLASE_ERROR_DIV);
  
  if (campo.validity.typeMismatch) {
    mensajes.push("El campo no contiene una email valido");
  }
  if (campo.validity.rangeOverflow || campo.validity.rangeUnderflow) {
    mensajes.push(`La edad tiene que tener un rango entre ${min} y ${max} `);
  }
  if (campo.validity.valueMissing) {
    mensajes.push("El campo no se puede encontrar vacio");
  }

  mostrarErroresEn(campo, mensajes);
}

function revisarErroresEvento(e) {
  const campo = e.target;

  if (campo.validity.valid) {
    eliminaMensajes(campo);
  }
}

//*****Funciones para todos los campos********

//Funcion que crea el html con los errores para poder mostarlo por pantalla
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
function eliminaMensajes(campo) {
  let busquedaDeParrafoError = document.getElementById(`${campo.name}_error`);
  campo.classList.remove(CLASE_ERROR_DIV);
  if (busquedaDeParrafoError) {
    busquedaDeParrafoError.parentNode.removeChild(busquedaDeParrafoError);
  }
}

//Funcion que valida el formulario
function validarFormulario(e) {
  let forVal = validarNombreCampo(document.getElementById("nombre"));
  forVal = validarApellidosCampo(document.getElementById("apellidos")) && forVal;
  forVal = validarCampo(document.getElementById("email")) && forVal;
  forVal = validarCampo(document.getElementById("provincia")) && forVal
  forVal = validarCheckCampo(document.querySelectorAll("input[type=checkbox")[0]) && forVal;
  forVal = validarPagoCampo(document.querySelector("input[type=radio")) && forVal;


  if (!forVal) {
    e.preventDefault();
    console.log("No se puede enviar el formulario");
  }
  return forVal;
}

llenarComunidades();
llenarProvincias();
