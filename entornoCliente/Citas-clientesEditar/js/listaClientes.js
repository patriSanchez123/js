import {ControladorPHP as Controlador} from "./controlador.js";

//listener
document.addEventListener('DOMContentLoaded',getClientes,false);
document.getElementById('crearCliente').addEventListener('click',crearClientes,false);
document.getElementById('listado-clientes').addEventListener('click',crearCita,false);
document.getElementById('listado-clientes').addEventListener('click',verCitas,false);
document.getElementById('listado-clientes').addEventListener('click',eliminarCliente,false);


/**
 * Función donde al pulsar el boton ver citas redirige al lista-citas
 * @param {evento} e 
 */
function verCitas(e){
    const boton=e.target;
    //comprobamos que exista la clase vercitas sy existe guardamos los datos en localStorege
    if(boton.classList.contains('verCitas')){
        localStorage.setItem('nombre', boton.dataset.clientenombre);
        localStorage.setItem('apellidos', boton.dataset.clienteapellidos);
        localStorage.setItem('nif', boton.dataset.clientenif);

        window.location.href="lista-citas.html";
    }
}

/**
 * Función donde al pulsar boton redirige a nueva-cita
 * @param {evento} e evento donde se realiza la acción
 */
function crearCita(e){
    const boton=e.target;
    //comprobamos si existe clase crearCita
    if(boton.classList.contains('crearCita')){
        localStorage.setItem('nombre', boton.dataset.clientenombre);
        localStorage.setItem('apellidos', boton.dataset.clienteapellidos);
        localStorage.setItem('nif', boton.dataset.clientenif);
        window.location.href="nueva-cita.html";
    }

}
/**
 * Función para eliminar el cliente de la base de datos
 * @param {evento} e Evento donde se realiza la acción
 */
async function eliminarCliente(e){
    const boton = e.target;
    if(boton.classList.contains('eliminar')){
        //sacamos los datos del html
        const nombre = boton.dataset.clientenombre;
        const apellidos = boton.dataset.clienteapellidos;
        const nif = boton.dataset.clientenif;  
        //si el confirm es true realizamos la petición a la base de datos          
        if(confirm(`¿Seguro que desea eliminar al cliente ${nombre} ${apellidos}`)){
        console.log(nif);
          const  $respuestaCliente= await Controlador.eliminarCliente(nif);
            window.location.href="index.html";
          
        }
    }

}

/**
 * Función que realiza consulta al servidor y muestra los clientes por pantalla
 */
async function getClientes(){
    const clientes= await Controlador.getClientes();
    const datosClientes=clientes.datos;
    let tabla=document.getElementById('listado-clientes');
    
    for (let i = 0; i < datosClientes.length; i++) {
        let tr=document.createElement('tr');
       
        let html=htmlMostrarCLientes(datosClientes[i]);
        tr.innerHTML=html;
        tabla.appendChild(tr);

    }
}
/**
 * Función para formatear el numero,para la visualización en la tabla
 * @param {number} telefono 
 * @returns 
 */
function formatearNumero(telefono){
    //guardamos en variables el telefono dividido para poder hacer una cadena
    const telefonoFormateado1=telefono.substring(0, 3);
    const telefonoFormateado2=telefono.substring(3, 5); 
    const telefonoFormateado3=telefono.substring(5, 7);
    const telefonoFormateado4=telefono.substring(7, 9); 

    let telefonoModificado =telefonoFormateado1+" "+telefonoFormateado2+" "+telefonoFormateado3+" "+telefonoFormateado4;
    return telefonoModificado;
}

/**
 * Función para formatear el nif para insertarlo en la tabla
 * @param {string} nif 
 * @returns 
 */
function formatearNif(nif){

    const nifFormateado=nif.substring(0,8);
    const letraNif=nif.slice(-1);
    let nifModificado=nifFormateado+'-'+letraNif;
    
    return nifModificado;

}

/**
 * Función donde pasa los datos a html y le inserta un objeto para mostrarlo
 * @param {*} datosClientes 
 * @returns 
 */
function htmlMostrarCLientes(datosClientes){
    //telefono y nif modificados para insertarlos en la tabla
   const telefonoFormateado = formatearNumero(datosClientes.telefono);
   const nifFormateado= formatearNif(datosClientes.nif);
    
    let html=
    `<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
    <p class="text-sm leading-5 font-medium text-gray-700 text-lg
    font-bold">${datosClientes.nombre}</p>
    <p class="text-sm leading-10 text-gray-700">${datosClientes.apellidos}</p>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
    <p class="text-gray-700">${datosClientes.email}</p>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200
    leading-5 text-gray-700">
    <p class="text-gray-600">${nifFormateado}</p>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200
    leading-5 text-gray-700">
    <p class="text-gray-600">${telefonoFormateado}</p>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
    <a href="#" class="block text-teal-600 hover:text-teal-900 mr-2 crearCita" data-clientenombre="${datosClientes.nombre}"
    data-clienteapellidos="${datosClientes.apellidos}" data-clientenif="${datosClientes.nif}">Crear cita</a>
    <a href="#" class="block text-teal-600 hover:text-teal-900 mr-2 verCitas" data-clientenombre="${datosClientes.nombre}" data-clienteapellidos="${datosClientes.apellidos}" data-clientenif="${datosClientes.nif}">Ver citas</a>
    <a href="#" class="block text-red-600 hover:text-red-900 eliminar" data-clientenombre="${datosClientes.nombre}" data-clienteapellidos="${datosClientes.apellidos}" data-clientenif="${datosClientes.nif}">Eliminar cliente</a>
    </td>`;
    return html;
}

/**
 * Función que redirige a la pagina nuevo-cliente
 */
function crearClientes(){

window.location.href="nuevo-cliente.html";
}