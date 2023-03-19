


document.getElementById("nombre").addEventListener("blur",validarNombreEvento,false);
document.getElementById("nombre").addEventListener("invalid",mensajesErroresNombre,false);
document.getElementById("nombre").addEventListener("input",verificarErroresNombre,false);

document.getElementById("email").addEventListener("blur",validarEmailEvento,false);
document.getElementById("email").addEventListener("invalid",mensajesErroresEmail,false);
document.getElementById("email").addEventListener("input",verificarErroresEmail,false);

document.getElementById("clave").addEventListener("blur",validarPassEvento,false);
document.getElementById("clave").addEventListener("invalid",mensajesErroresPass,false);
document.getElementById("clave").addEventListener("input",verificarErroresPass,false);


document.getElementById("pais").addEventListener("invalid",mensajesErroresEmail,false);
document.getElementById("email").addEventListener("input",verificarErroresEmail,false);

document.getElementById("unete-btn").addEventListener("submit",validarFormuilario,false);


////////NOMBRE////////
function validarNombreEvento(e){
    const campo=e.target;
    eliminarMensajes(campo);
    return validarNombreCampo(campo);
}

function validarNombreCampo(campo){

    actualizarErroresNombre(campo);
    return campo.checkValidity();

}

function actualizarErroresNombre(campo){
    const min=8;
    const max=25;
    let mensajes="";
    if(campo.value.length === 0){

        mensajes="El campo no puede contener menos de "+ min +" caracteres";
    }
    else if(campo.value.length > max){

        mensajes="El campo no puede contener más de " + max + "caracteres ";

    }else if(campo.value.length < min){

        mensajes = "El campo No puede estar vacio";
    }
    campo.setCustomValidity(mensajes);

}

function verificarErroresNombre(e){
    const campo=e.target;
    actualizarErroresNombre(campo);
    if(campo.validity.valid){
        eliminarMensajes(campo);
    }
}

function mensajesErroresNombre(e){
    const campo=e.target;
    mensajes=[];
    if(campo.validity.customError){
        mensajes.push(campo.validationMessage);
    }
    mostrarMensajesEn(campo,mensajes);

}

//EMAIL

function validarEmailEvento(e){

    const campo=e.target;

    eliminarMensajes(campo);
    return validarEmailCampo(campo);
}

function validarEmailCampo(campo){
    
    actualizarErroresEmail(campo);
    return campo.checkValidity();
}

function actualizarErroresEmail(campo){

    let mensajes="";

    const regex = /^.*@.*[.][a-z]*$/;

  if (regex.test(campo.value)) {
        mensajes="";
  }else{
    mensajes=campo.title;
  }
  return campo.setCustomValidity(mensajes);


}

function verificarErroresEmail(e){
    const campo=e.target;
    actualizarErroresEmail(campo);
    if(campo.validity.valid){
        eliminarMensajes(campo);
    }
}

function mensajesErroresEmail(e){
    const campo=e.target;
    mensajes=[];
    if(campo.validity.customError){
        mensajes.push(campo.validationMessage);
    }
    mostrarMensajesEn(campo,mensajes);

}

////SELECIONAR PAIS


function validarPaisEvento(e){
    eliminarMensajes(campo);

    return validarpaisCampo(campo);
}

function validarpaisCampo(campo){
    
    actualizarErroresPais(campo);
    return campo.checkValidity();
}

function actualizarErroresPais(campo){

let mensajes="";
  if (campo.value="") {
        mensajes="Tienes que selecionar un pais";
  }else{
    mensajes="";
  }
  return campo.setCustomValidity(mensajes);


}

function verificarErroresPais(e){
    const campo=e.target;
    actualizarErroresPais(campo);
    if(campo.validity.valid){
        eliminarMensajes(campo);
    }
}

function mensajesErroresPais(e){
    const campo=e.target;
    mensajes=[];
    if(campo.validity.customError){
        mensajes.push(campo.validationMessage);
    }
    mostrarMensajesEn(campo,mensajes);

}

///PASSS

function validarPassEvento(e){
    const campo=e.target;
    eliminarMensajes(campo);

    return validarPassCampo(campo);
}

function validarPassCampo(campo){
    
    actualizarErroresPass(campo);
    return campo.checkValidity();
}

function actualizarErroresPass(campo){
    // Debe estar compuesta por un mínimo de 8 caracteres y debe incluir una letra minúscula
    // (incluida la “ñ”), una letra mayúscula (incluida la “Ñ”, un número y un símbolo: “-“, “.”,
    // “_”, “=”
    let mensajes="";
    //NO se  hacer la expresion regular
    const regex = /.*[A-Z].*[-._=]/;
if(campo.value === ""){
    mensajes="El campo es requerido";
}
  else if (regex.test(campo.value)) {
        mensajes="";
  }else{
    mensajes=campo.title;
  }
  return campo.setCustomValidity(mensajes);

}

function verificarErroresPass(e){
    const campo=e.target;
    actualizarErroresPass(campo);
    if(campo.validity.valid){
        eliminarMensajes(campo);
    }
}

function mensajesErroresPass(e){
    const campo=e.target;
    mensajes=[];
    if(campo.validity.customError){
        mensajes.push(campo.validationMessage);
    }
    mostrarMensajesEn(campo,mensajes);

}


///FUNCIONES PARA TODOS
function mostrarMensajesEn(campo,mensajes){
    let nombre=document.getElementById(`error-${campo.id}`);
    
    for (let i = 0; i < mensajes.length; i++) {
        nombre.textContent=mensajes[i];
        
    }
}

function eliminarMensajes(campo){

    let nombre=document.getElementById(`error-${campo.id}`);
     nombre.textContent="";
    }
    

function validarFormuilario(campo){
    const submit=document.getElementById("unete-btn")
    let forVal=validarNombreCampo(document.getElementById("nombre"));
    forVal= validarEmailCampo(document.getElementById("email")) && forVal;
    forVal= validarpaisCampo(document.getElementById("pais")) && forVal;
    forVal= validarPassCampo(document.getElementById("clave")) && forVal;

    if(!forVal){
        
        console.error("No se puede validar el formulario");
    }else{

        submit.preventDefault();
    }
}

