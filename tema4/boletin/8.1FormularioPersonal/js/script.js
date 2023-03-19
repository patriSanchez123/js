const ANIADIR="campoAnadir";
const CLASE_ERROR_DIV="error";

let hijos=document.getElementsByName("hijos");
document.getElementById("nombre").addEventListener("blur",validarNombreEvento,false);
document.getElementById("nombre").addEventListener("invalid",mensajesErrorNombre,false);
document.getElementById("nombre").addEventListener("input",revisarErroresNombreEvento,false);

document.getElementById("apellidos").addEventListener("blur",validarApellidosEvento,false);
document.getElementById("apellidos").addEventListener("invalid",mensajeErroresApellidos,false);
document.getElementById("apellidos").addEventListener("input",revisarErroresApellidosEvento,false)

document.getElementById("url").addEventListener("blur",validarEvento,false);
document.getElementById("url").addEventListener("invalid",actualizarErroresCampo,false);
document.getElementById("url").addEventListener("input",revisarErroresEvento,false);

document.getElementById("edad").addEventListener("blur",validarEvento,false);
document.getElementById("edad").addEventListener("invalid",actualizarErroresCampo,false);
document.getElementById("edad").addEventListener("input",revisarErroresEvento,false)

document.getElementById("fecha").addEventListener("blur",validarEvento,false);
document.getElementById("fecha").addEventListener("invalid",actualizarErroresCampo,false);
document.getElementById("fecha").addEventListener("input",revisarErroresEvento,false);

document.getElementById("ocupacion").addEventListener("blur",validarOcupacionEvento,false);
document.getElementById("ocupacion").addEventListener("invalid",mensajeErrorOcupacionEvento,false);
document.getElementById("ocupacion").addEventListener("input",revisarErroresOcupacionEvento,false);


for (let i = 0; i < hijos.length; i++) {
    hijos[i].addEventListener("blur",validarHijosEvento,false);
    hijos[i].addEventListener("invalid",mensajesErroresHijos,false);
    hijos[i].addEventListener("input",revisarErroresHijosEvento,false);
    
}

document.getElementById("formulario").addEventListener("submit",validarFormulario,false);

                        //*********Nombre*************************

//Función que elimina los mensajes y llama a validar campo(Es para el evento)
function validarNombreEvento(e){
    const campo=e.target;
    eliminaMensajes(campo);
    return validarNombreCampo(campo);
}

//Funcion que valida el nombre y actualiza los errores(Funcion que sirve para validar el 
// formulario y validar el evento)
function validarNombreCampo(campo){
    actualizarErroresNombreCampo(campo);
    return campo.checkValidity();
}

//Funcion que actualiza los errores del nombre el setCustomvalidity
function actualizarErroresNombreCampo(campo){
    const min=8;
    const max=15;
let mensaje="";

if(campo.value===""){
    mensaje="El Campo nop puede estar vacio."
}else if(campo.value.length < min ){
    mensaje="El campo no puede contener menos de 8 caracteres"
}else if(campo.value.length > max){
    mensaje="El campo no puede contener mas de 15 caracteres"
}else{
    mensaje="";
}
campo.setCustomValidity(mensaje);
}


//Funcion que muestra los errores en el evento, si es invalido en el 
//campo.validity.customError
function mensajesErrorNombre(e){
    const campo=e.target;
    let mensajes=[];
    campo.classList.add(CLASE_ERROR_DIV);
    
    if(campo.validity.customError){
        eliminaMensajes(campo)
        mensajes.push(campo.validationMessage);
    }
    mostrarErroresEn(campo,mensajes)

}

//funcion que revisa los errores para saber si el usuario a metido los
//datos correctos en el momento con el evento submit
function revisarErroresNombreEvento(e){

    const campo=e.target;
    actualizarErroresNombreCampo(campo);
    if(campo.validity.valid){
        eliminaMensajes(campo);
    }
}
                            ///*********************Apellidos**********************

function validarApellidosEvento(e){
    const campo=e.target;
    eliminaMensajes(campo);
    return validarApellidosCampo(campo);

}

function validarApellidosCampo(campo){

    actualizarErroresApellidos(campo);
    return campo.checkValidity();
}

function actualizarErroresApellidos(campo){
    const min=8;
    const max=30;
    mensaje="";
    if(campo.value===""){
        mensaje="El campo no se puede encontrar vacio";
    }
    else if(campo.value.length < min ){
        mensaje="El campo no puede contener menos de "+ min +" caracteres";
    }
    else if(campo.value.length >30){
        mensaje=`El campo no puede contener más de ${max}`;
    }
    else{
        mensaje="";
    }

    campo.setCustomValidity(mensaje);
}


function mensajeErroresApellidos(e){
    const campo=e.target;
    let mensajes=[];
    campo.classList.add(CLASE_ERROR_DIV);

    if(campo.validity.customError){
        eliminaMensajes(campo);
        mensajes.push(campo.validationMessage);
    }
    mostrarErroresEn(campo,mensajes)
}

function revisarErroresApellidosEvento(e){

    const campo=e.target;
    actualizarErroresApellidos(campo);
    if(campo.validity.valid){

        eliminaMensajes(campo);
    }
}

        //*****URL,EDAD, FECHA************************ */

function validarEvento(e){
    const campo=e.target;
    
    return validarCampo(campo);

}

function validarCampo(campo){
    eliminaMensajes(campo);
    
    return campo.checkValidity();
}

function actualizarErroresCampo(e){
    const campo=e.target;
    const min=18;
    const max=100;
    let mensajes=[];
    campo.classList.add(CLASE_ERROR_DIV)
    if(campo.validity.typeMismatch){
        mensajes.push("El campo no contiene una URL valida");
    }if(campo.validity.rangeOverflow || campo.validity.rangeUnderflow){

        mensajes.push(`La edad tiene que tener un rango entre ${min} y ${max} `);
    }if(campo.validity.valueMissing){

        mensajes.push("El campo no se puede encontrar vacio");
    }
    

    mostrarErroresEn(campo,mensajes);

}

function revisarErroresEvento(e){
    campo=e.target;
    actualizarErroresOcupacionCampo(campo);
    if(campo.validity.valid){
        eliminaMensajes(campo);
    }
    
}

                                //******Ocupacion************ */
function validarOcupacionEvento(e){
    const campo=e.target;
    eliminaMensajes(campo);
    return validarOcupacionCampo(campo);
}

function validarOcupacionCampo(campo){

    actualizarErroresOcupacionCampo(campo);
    return campo.checkValidity();
}

function actualizarErroresOcupacionCampo(campo){
    let mensajes="";

    if(campo.value!==""){
        mensajes="";
    }else{
        mensajes="Tiene que haber una ocupación selecionada";
    }

    campo.setCustomValidity(mensajes);
}

function mensajeErrorOcupacionEvento(e){

    const campo=e.target;
    let mensajes=[];
    campo.classList.add(CLASE_ERROR_DIV);

    if(campo.validity.customError){
        eliminaMensajes(campo);
        mensajes.push(campo.validationMessage);
    }
    mostrarErroresEn(campo,mensajes);
}

function revisarErroresOcupacionEvento(e){

    const campo=e.target;
    actualizarErroresOcupacionCampo(campo);

    if(campo.validity.valid){
        eliminaMensajes(campo);
    }

}

                         //**********Hijos******** */

function validarHijosEvento(e){

    const campo=e.target;
    eliminaMensajes(campo);
     
    return validarHijosCampo(campo);
}

function validarHijosCampo(campo){

    actualizarErroresHijosCampo(campo);
    return campo.checkValidity();
}

function actualizarErroresHijosCampo(campo){
    const hijos=document.getElementsByName("hijos");
    let mensajes="";
    campoEncontrado=false;

    for (let i = 0; i < hijos.length && !campoEncontrado; i++) {
        if(hijos[i].checked){
            campoEncontrado=true;
        } 
    }
    if(campoEncontrado){
        mensajes="";
    }else{
        mensajes="Tienes que selecionar una opcion";
    }
    campo.setCustomValidity(mensajes);
   
}

function mensajesErroresHijos(e){

    const campo=e.target;
    let mensajes=[];

    campo.classList.add(CLASE_ERROR_DIV);
    if(campo.validity.customError){
        eliminaMensajes(campo);
        mensajes.push(campo.validationMessage)
    }
    mostrarErroresEn(campo,mensajes)
}

function revisarErroresHijosEvento(e){
    const campo=e.target;
    actualizarErroresHijosCampo(campo)
    if(campo.validity.valid){
        eliminaMensajes(campo);
}
}

                            //************ Interes****************/

function validarInteresEvento(e){

    const campo=e.target;
    eliminaMensajes(campo);
    return validarInteresCampo(campo);
}

function validarInteresCampo(campo){
    actualizarErroresInteresCampo(campo);
    return campo.checkValidity();
}

//*****Funciones para todos los campos********

//Funcion que crea el html con los errores para poder mostarlo por pantalla
function mostrarErroresEn(campo,mensajes){

    let div=document.createElement("div");
    div.classList.add(ANIADIR);

for (let i = 0; i < mensajes.length; i++) {
    let parrafo=document.createElement("p");
    parrafo.setAttribute("id",`${campo.name}_error`)
    parrafo.textContent=mensajes[i];
    div.appendChild(parrafo);
    //insertarDespues(campo,div)
   campo.insertAdjacentElement("beforebegin",div);
    
}
}

//Funcion que elimina los mensajes de error
function eliminaMensajes(campo){
    let busquedaDeParrafoError=document.getElementById(`${campo.name}_error`);
    campo.classList.remove(CLASE_ERROR_DIV);
    if(busquedaDeParrafoError){
        busquedaDeParrafoError.parentNode.removeChild(busquedaDeParrafoError);
    }
    }

//Funcion que valida el formulario
function validarFormulario(e){
    let forVal=validarNombreCampo(document.getElementById("nombre"));
        forVal=validarApellidosCampo(document.getElementById("apellidos")) && forVal;
        forVal=validarCampo(document.getElementById("url")) && forVal;
        forVal=validarCampo(document.getElementById("edad")) && forVal;
        forVal=validarCampo(document.getElementById("fecha")) && forVal;
        forVal=validarOcupacionCampo(document.getElementById("ocupacion"));
        forVal=validarHijosCampo(document.getElementsByName("hijos")[0]) && forVal;
        forVal=validarHijosCampo(document.getElementsByName("hijos")[1]) && forVal;
   

    if(!forVal){
        e.preventDefault(); 
        console.log("No se puede enviar el formulario");
    }
    return forVal;
}