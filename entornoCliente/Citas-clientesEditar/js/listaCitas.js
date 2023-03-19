import {ControladorPHP as Controlador} from "./controlador.js";
//listeners
document.addEventListener("DOMContentLoaded",getCitas,false);
document.getElementById('crearCita').addEventListener('click',nuevaCita,false);
document.getElementById('listado-citas').addEventListener('click',eliminarCitas,false);
document.getElementById('volverClientes').addEventListener('click',volverClientes,false);

/**
 * Función que muestra las citas de los clientes atravez del servidor
 */
async function getCitas(){
//Sacamos los datos de localstorage 
const nombre =localStorage.getItem('nombre');
const apellidos= localStorage.getItem('apellidos');
//insertamos el texto en el documento
    document.getElementById('cita-cliente').textContent=`${nombre} ${apellidos}`;

    let listadoCitas=document.getElementById('listado-citas');
    //modificamos el nif para buscarlo en el servidor
    let nif=localStorage.getItem('nif').replace(/-/g,"");
    const citas= await Controlador.getCitas(nif);

    for (let i = 0; i < citas.datos.length; i++) {
            let tr=document.createElement('tr');
            let html=citasHtml(citas.datos[i]);
            tr.innerHTML=html;
            listadoCitas.appendChild(tr);
        
    }
}

/**
 * Función para redirigir a clientes
 */
function volverClientes(){
    window.location.href = 'index.html';
}

/**
 * Función para eliminar citas de la base de datos
 * @param {evento} e Evento donde ser realiza la función
 */
async function eliminarCitas(e){

    const boton=e.target;
//comprobamos que exista la clase eliminar
    if(boton.classList.contains('eliminar')){
        //sacamos los datos del elemento
        const hora = boton.dataset.citahora;
        const fecha = boton.dataset.citafecha;
        const id = boton.dataset.citaid;

            if(confirm(`¿Seguro que deseas eliminar la cita del día ${fecha} a las ${hora}?`)){
                
            const  $respuestaCita = await Controlador.eliminarCita(id);
            //Redirigimos a lista de citas para que se actualice
            window.location.href="lista-citas.html";
            }        
    }

}
/**
 * Función para modificar a fecha europea
 * @param {date} fecha Fecha a modificar
 * @returns 
 */
function modificarTipoFecha(fecha){

    const regex = /^(\d{4})-(\d{2})-(\d{2})$/gm;
    const str = fecha;
    const subst = `$3-$2-$1`;
    const resultado = str.replace(regex, subst);
    
    return resultado;

}

/**
 * Función que realiza un html para la cita
 * @param {object} cita Objeto que se utiiza para rellenar el html
 * @returns 
 */
function citasHtml(cita){

const fecha= modificarTipoFecha(cita.fecha)
const htmlCita=`<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <p class="text-gray-700"> ${fecha}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
        <p class="text-gray-700">${cita.hora}</p>
        </td>
        <td class="px-6 py-4 border-b border-gray-200
        leading-5 text-gray-700">
        <p class="text-gray-600">${cita.descripcion}</p>
        </td>
        <td class="px-6 py-4 border-b border-gray-200
        leading-5 text-gray-700">
        <p class="text-gray-600">${cita.detalles}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
        <a href="#" class="block text-red-600 hover:text-red-900 eliminar" data-citaid="${cita.id}" data-
        nifcliente="${cita.nifCliente}" data-citafecha="${fecha}" data-citahora="${cita.hora}">Eliminar cita</a>
        </td>`;
return htmlCita;
}

/**
 * Función que redireciona a nueva-cita.html
 */
function nuevaCita(){
    
    window.location.href='nueva-cita.html';

}