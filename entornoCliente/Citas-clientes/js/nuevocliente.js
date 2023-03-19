import {ControladorPHP as Controlador} from "./controlador.js";

//listener
//guardamos en una constante todos los input para poder recorrerlos
const inputDatos=document.querySelectorAll('.mb-4 > input');
document.querySelector('input[value="Agregar Cliente"').addEventListener('click',validarFormulario,false);
document.querySelector('input[value="Cancelar"').addEventListener('click',cancelar,false)
document.addEventListener('DOMContentLoaded',darFocoPrimero,false);

for (let i = 0; i < inputDatos.length; i++) {
    inputDatos[i].addEventListener('blur',validarEvento,false);
    inputDatos[i].addEventListener('invalid',mensajesErrorEvento,false);
    inputDatos[i].addEventListener('input',revisarErroresEvento,false);
    
}

/**
 * Funcion para dar foco al primer elemento
 * @param {*} e 
 */
function darFocoPrimero(){
    inputDatos[0].focus();
}

/**
 * Función para dar el foco al primer elemento si tiene errores
 */
function darfocoError(){
    const error = document.querySelectorAll(".border-red-600")[0].focus();
    

}

/**
 * Función donde se realiza cheakvalidity al evento y elimina los mensajes
 * @param {evento} e Evento donde se realiza la validación
 * @returns 
 */
function validarEvento(e){
    const campo=e.target;
    eliminaMensajes(campo);
    return validarCampo(campo);

}
/**
 * Función que realiza cheakvalitity al campo y actualiza los errores del 
 * campo 
 * @param {campo} campo campo donde se realiza el cheakvalidity
 * @returns 
 */
function validarCampo(campo){
    actualizarErrores(campo);
    return campo.checkValidity();
}

/**
 * Función para actualizar los errores del campo
 * @param {campo} campo Campo donde se realiza la actualización
 */
function actualizarErrores(campo){

    const minNombre=4;
    const maxNombre=30;
    const minApellidos=8;
    const maxApellidos=50;
    let regex="";
    let mensaje="";
    
    //comprobamos si el campo esta vacio
    if(campo.value === ""){

        mensaje="El campo no se puede encontar vacío";
    }
    //campo nombre
    else if(campo.name === "nombre"){
        
        if(campo.value.length < minNombre){
            mensaje="El campo tiene que tener al menos 4 caracteres";
        }else if(campo.value.length > maxNombre){
            mensaje="El campo no puede tener más de 30 caracteres";
        }  
    //comprobamos si el campo apellidos
    }else if(campo.name === "apellidos"){

        if(campo.value.length < minApellidos){
            mensaje="El campo tiene que tener al menos 8 caracteres";
        }else if(campo.value.length > maxApellidos){
            mensaje="El campo no puede tener más de 50 caracteres";
        }

        //comprobamos el campo es email
    }else if(campo.name === 'email'){
        
        regex = /^[^\s].*@[^\s].*[.][^\s].*$/;

        if (regex.test(campo.value)) {
            mensaje="";
        }else{
            mensaje=campo.title;
        }
    //Comprobamos si el campo es telefono
    }else if(campo.name === 'telefono'){
         regex= /^[0-9]{3} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$/;
        if (regex.test(campo.value)) {
            mensaje="";
        }else{
            mensaje=campo.title;
        }

    //comprobamos si el campo es nif
    }else if(campo.name === 'nif'){
        regex= /^[0-9]{8}-?[ABCDEFGHJKLMNPQRSTVWXY]$/;
        if (regex.test(campo.value)) {
            mensaje="";
        }else{
            mensaje=campo.title;
        }
       
    }
    campo.setCustomValidity(mensaje);
}


/**
 * Función que muestra los mensajes de error
 * @param {evento} e Evento donde se muestra los errores
 */
function mensajesErrorEvento(e){
    const campo=e.target;
    let mensajes=[];
    
    if(campo.validity.customError){
        eliminaMensajes(campo)
        mensajes.push(campo.validationMessage);
    }
    mostrarErroresEn(campo,mensajes)

}
/**
 * Función que revisa los errores y los muestra si previamente tenía un error borra el mensaje
 * @param {evento} e Evento donde se revisa los errores
 */
function revisarErroresEvento(e){

    const campo=e.target;
    actualizarErrores(campo);
    if(campo.validity.valid){
        eliminaMensajes(campo);
    }
}


/***
 * Función para mostrar los errores en un div arriba del campo
 */
function mostrarErroresEn(campo,mensajes){

    let parrafoError=document.getElementById(`error-${campo.name}`);
    campo.classList.add('border-red-600');

for (let i = 0; i < mensajes.length; i++) {
    
    parrafoError.textContent=mensajes[i];
  
}
}

/**
 * Función que elimina los mensajes de error
 * @param {campo} campo Campo donde se eliminan los mensajes error 
 *  */
function eliminaMensajes(campo){
    let busquedaDeParrafoError=document.getElementById(`error-${campo.name}`);
// si se encuentra el parrafo error eliminamos la clase border y eliminamos el contenido
    if(busquedaDeParrafoError){
        campo.classList.remove('border-red-600');
        busquedaDeParrafoError.textContent="";
    }
    }  

/**
 * Función para validar los campos del formulario
 * @param {evento} e Evento que valida todo el formulario
 */
async function validarFormulario(e){
    let forVal=validarCampo(document.getElementById("nombre"));
        forVal=validarCampo(document.getElementById("apellidos")) && forVal;
        forVal=validarCampo(document.getElementById("email")) && forVal;
        forVal=validarCampo(document.getElementById("telefono")) && forVal;
        forVal=validarCampo(document.getElementById("nif"));

    //evitamos que envie el formulario al servidor
        e.preventDefault(); 
    if(!forVal){
        //damos el foco al primer elemento que tenga el error
        darfocoError();
    }else{
        //sacamos los datos del formulario y los modificamos para añadirlos en la 
        //constante que vamos a enviar al servidor
        const form= document.getElementById('formulario')
        let  formulario = new FormData(form);
        //quitamos los espacios y los guiones del telefono y el nif
        let telefono=formulario.get('telefono').replace(/ /g,"");
        let nif=formulario.get('nif').replace(/-/g,"");

        //modificamos el telefono y el nif del formulario
        formulario.set('telefono',telefono);
        formulario.set('nif',nif);
        
        const enviarFormulario={
            "nombre":`${formulario.get('nombre')}`,
            "apellidos": `${formulario.get('apellidos')}`,
            "email": `${formulario.get('email')}`,
            "telefono": `${formulario.get('telefono')}`,
            "nif": `${formulario.get('nif')}`
            }
            
            //petición asincrona
            const clientes= await Controlador.setCliente(enviarFormulario);

            if(clientes.resultado === 'ok'){
                //redirigimos a index para recargar los clientes
                window.location.href="index.html";

            }else{
                //comprobamos el tipo de error y agregamos el mensaje y la clase en el elemento
                for (let index = 0; index < clientes.camposError.length; index++) {
                if(clientes.camposError[index] === 'nif'){
                document.getElementById('error-nif').textContent = clientes.mensajesError[index];
                document.getElementById('nif').classList.add('border-red-600');
                }
                if(clientes.camposError[index] === 'email'){
                    document.getElementById('error-email').textContent = clientes.mensajesError[index];
                    document.getElementById('email').classList.add('border-red-600');

                }
                //damos foco al primer elemento con foco
                darfocoError();
                
            }
            }
    }
}

/**
 * Función que redirige a index.html
 * @param {*} e Evento para redirigir a index.html
 */
function cancelar(e){
    window.location.href="index.html";
}
