import {ControladorPHP as Controlador} from "./controlador.js";

document.addEventListener('DOMContentLoaded',insertarNombre,false);

document.querySelector('input[value="Agregar Cita"').addEventListener('click',validarFormulario,false);
document.querySelector('input[value="Cancelar"').addEventListener('click',cancelar,false)

document.getElementById('fecha').addEventListener('blur',validarEvento,false)
document.getElementById('fecha').addEventListener('invalid',mensajesErrorEvento,false);
document.getElementById('fecha').addEventListener('input',revisarErroresEvento,false);

document.getElementById('hora').addEventListener('blur',validarEvento,false)
document.getElementById('hora').addEventListener('invalid',mensajesErrorEvento,false);
document.getElementById('hora').addEventListener('input',revisarErroresEvento,false);

document.getElementById('descripcion').addEventListener('blur',validarEvento,false)
document.getElementById('descripcion').addEventListener('invalid',mensajesErrorEvento,false);
document.getElementById('descripcion').addEventListener('input',revisarErroresEvento,false);

document.getElementById('detalles').addEventListener('blur',validarEvento,false)
document.getElementById('detalles').addEventListener('invalid',mensajesErrorEvento,false);
document.getElementById('detalles').addEventListener('input',revisarErroresEvento,false);

document.addEventListener('DOMContentLoaded',darFocoPrimero,false);



//********************************************VALIDACIÓN NOMBRE Y APELLIDOS***********************************************************//

/**
 * Funcion para dar foco al primer elemento
 * @param {*} e 
 */
function darFocoPrimero(){
    document.getElementById('fecha').focus();
}

/**
 * Función para dar el foco al primer elemento si tiene errores
 */
function darfocoError(){
    const error = document.querySelectorAll(".border-red-600")[0].focus();
    
}


/**
 * Functión que  inserta el nombre del cliente en el h2 del documento del documento
 */
function insertarNombre(){
    //recuperamos el h2 donde vamos a insertar en nombre y los apellidos del cliente
    //que se encuentran en el localstorage
    const h2nombre= document.getElementById('cita-cliente');
    const nombre=localStorage.getItem('nombre');
    const apellidos=localStorage.getItem('apellidos');
    h2nombre.textContent=`${nombre} ${apellidos}`;
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
 * @param {campo} campo Campo donde se realiza la actualización de los errores
 */
function actualizarErrores(campo){

    const maxDescripcion=200;
    const maxDetalles=400;
    let mensaje="";
        if(campo.name === 'fecha'){
            if(campo.value === ""){

                mensaje="El campo no se puede encontar vacío";
            }
    }
        else if(campo.name === 'hora'){
            if(campo.value === ""){
        
                mensaje="El campo no se puede encontar vacío";
            }
        }
        else if(campo.name === 'descripcion' ){
            if(campo.value.length > maxDescripcion){
                mensaje=`El campo no puede contener mas de" ${maxDescripcion} caracteres`;
            }
        }
        else if(campo.name === 'detalles' ){
            if(campo.value.length > maxDetalles){
                mensaje=`El campo no puede contener mas de ${maxDetalles} caracteres`;
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
    
    //comprobamos si existe el parrafo error eliminamos el contenido y la clase border
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
    let forVal=validarCampo(document.getElementById("fecha"));
        forVal=validarCampo(document.getElementById("hora")) && forVal;
        forVal=validarCampo(document.getElementById("descripcion")) && forVal;
        forVal=validarCampo(document.getElementById("detalles")) && forVal;
    
        /**
         * en cualquira de los casos evitamos que se envie el formulario, por si  no esvalido no tenemos que enviarlo
        * y si es correcto tenemos que guardar los datos del formulario en una constante para hacer una petición asincrona al
        *servidor*/
        e.preventDefault();
    if(!forVal){
        //damos el foco al error
        darfocoError();
    }else{    
        const nif=localStorage.getItem('nif').replace(/-/g,"");
        const form= document.getElementById('formulario')
        let  formulario = new FormData(form);
        const nuevaCita={
            "nifCliente": `${nif}`,
            "fecha": `${formulario.get('fecha')}`,
            "hora": `${formulario.get('hora')}`,
            "descripcion": `${formulario.get('descripcion')}`,
            "detalles": `${formulario.get('detalles')}`
            };            

            const $respuestaCita = await Controlador.setCita(nuevaCita);

            //si es ok redirigimos a lista citas para que recarge la  nueva cita
            if($respuestaCita.resultado === 'ok'){
                window.location.href="lista-citas.html";
            //en caso de error añadimos el error al elemento y le añadimos la clase del border
            }else{
                for (let i = 0; i < $respuestaCita.mensajesError.length; i++) {
                    
                    if($respuestaCita.camposError[i] === 'hora'){
                        document.getElementById('error-hora').textContent = $respuestaCita.mensajesError[i];
                        document.getElementById('hora').classList.add('border-red-600');

                    }
                    if($respuestaCita.camposError[i] === 'fecha'){
                        document.getElementById('error-fecha').textContent = $respuestaCita.mensajesError[i];
                        document.getElementById('fecha').classList.add('border-red-600');
                    }
            //damos el foco al elemento que tiene el error
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
