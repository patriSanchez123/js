const CLASE_CAMPO_ERROR="error";
const DIV_ANIADIR="campoAnadir";
//Actividad 1
document.getElementById("email").addEventListener("blur",validarEvento,false);
document.getElementById("formulario").addEventListener("submit",validarFormulario,false);

//Actividad 2
document.getElementById("email").addEventListener("invalid",comprobarErroresCampo,false);

//actividad 3
document.getElementById("email").addEventListener("input",revisarErroresEvento,false)

/**
 * Función que se le pasa un evento y hace la comprobación si es valdido(CheackValiddity)
 * @param {evento} e 
 */
function validarEvento(e){

    validarcampo(e.target);

}
/**
 * Función que se le pasa un campo y se le hace el cheakvalidity
 * @param {campo} campo 
 * @returns 
 */
function validarcampo(campo){
    borrarMensajes(campo);
    return campo.checkValidity();
}

/**
 * Función que comprueba todo el formulario que sea valido
 * @returns booleano
 */
function validarFormulario(){
    let formValido= validarcampo(document.getElementById("email"));
    console.log(formValido);
    return formValido;
}




function comprobarErroresCampo(e){
    campo=e.target;
    let mensajes=[];
    if(campo.validity.valueMissing){
        campo.classList.add(CLASE_CAMPO_ERROR);
        mensajes.push("El campo no puede estar vacio");
    }
    if(campo.validity.typeMismatch){
        mensajes.push("El formato no es correcto");

    }
    mostrarErrores(mensajes,campo)
        //console.log(mensajes);
}

function mostrarErrores(mensajes,campo){

    let div=document.createElement("div");
    div.classList.add(DIV_ANIADIR);
    

    for (let i = 0; i < mensajes.length; i++) {
        let p=document.createElement("p");
        p.setAttribute("id",`${campo.name}_error`)
        p.textContent=mensajes[i];
        
        div.appendChild(p);

        insertarDespues(campo,div);   
    }


}

function borrarMensajes(campo){
    campo.classList.remove(CLASE_CAMPO_ERROR);
    const mensajesError=document.getElementById(`${campo.name}_error`)
    if(mensajesError){
        mensajesError.parentElement.removeChild(mensajesError)
    }
}

function revisarErroresEvento(e){
    const campo=e.target;
    if(campo.validity.valid){
        borrarMensajes(campo);
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