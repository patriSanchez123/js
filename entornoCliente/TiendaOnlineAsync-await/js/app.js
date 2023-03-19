// Importamos la base de datos
//import {ControladorDB,ControladorCarrito} from "./controlador.js";


document.addEventListener("DOMContentLoaded",insertarProductos,false);
document.addEventListener("DOMContentLoaded",insertarCheckbox,false);
document.getElementById("filter-container").addEventListener("input",filtrar,false);
// document.getElementById("products-container").addEventListener("click",aniadirAcesta,false);
// document.getElementById("vaciar-carrito").addEventListener("click",eliminarCarrito,false);
// document.getElementById("lista-carrito").addEventListener("click",eliminarProductoCarrito,false);


/**
 * Función para mostrar los productos filtrados por categoria, si
 * no existe ningun filtro muestra todos los filtros
 */
async function filtrar(){
    const containerProductos=document.getElementById("products-container");
    let crearHtmlFiltrado="";
    let checkboxChecked=[...document.querySelectorAll("#filtro-categoria input[type=checkbox]:checked")].map(e => e.value);
    
    const respuesta= await fetch('productos.php',{
        method:"POST",
        headers : {
            "content-type" : "application/x-www-form-urlencoded"
             //"Content-Type":"application/json"; 
        },
        body : `metodo=getProductosPorCategorias&categorias=${JSON.stringify(checkboxChecked)}`
    });
    const productosFiltrados= await respuesta.json();
        crearHtmlFiltrado=htmlProductos(productosFiltrados);


if(checkboxChecked.length > 1){
    containerProductos.innerHTML=crearHtmlFiltrado;
}else{
    insertarProductos();
}
}


// /**
//  * Función que pasa los productos a html
//  * @param {*} productos 
//  * @returns 
//  */
function htmlProductos(productos){
   
    let productosInse='';
    for (let i = 0; i < productos.length; i++) {
        
        productosInse=productosInse+`<article id="${productos[i].id}" class="location-listing" data-categoria="${productos[i].categoria}">
        <div class="location-image">
        <a href="#">
        <img src="${productos[i].imagen}" alt="${productos[i].nombre}">
        </a>
        </div>
        <div class="data">
        <h4>${productos[i].nombre}</h4>
        <p class="price">${productos[i].precio}€</p>
        <p>Vendido por <strong>${productos[i].vendedor}</strong></p>
        <p>Quedan ${productos[i].stock} unidades</p>
        <div class="button-container">
        <a class="button add" href="#" target="_blank">Añadir al carrito</a>
        </div>
        </div>
        </article>`;
        
    }
    productosInse=productosInse+'</div>';
    return productosInse;

}

/**
 * Función que pasa las categorias al checkbox en html
 * @param {*} categorias 
 * @returns 
 */
function htmlCheckbox(categorias){
    
    let crearCheckboxHtml=`<form><fieldset id="filtro-categoria" name="filtro-categoria">
                            <legend>Filtros por categoría:</legend>`;
    for (let i = 0; i < categorias.length; i++) {
        crearCheckboxHtml=crearCheckboxHtml+`<div class="contenedor-categoria">
                            <input type="checkbox" id="${categorias[i].id}" name="${categorias[i].id}" value="${categorias[i].id}">
                            <label for="${categorias[i].id}">${categorias[i].nombre}</label>
                            </div>`;
        
    }
    crearCheckboxHtml=crearCheckboxHtml+'</fieldset></form>';
    
    return crearCheckboxHtml;
    
}

/**
 * Función para crear el html de la cesta
 */
// function cestaCarritoHtml(){

//     const listaCarrito=document.querySelector("#lista-carrito tbody");
//     const productoCarrito=ControladorCarrito.getProductosCarrito();
    
//     for (let i = 0; i < productoCarrito.length; i++) {
//         let fila = document.createElement('tr');
//          fila.innerHTML=`<td>
//         <img src="${productoCarrito[i].imagen}">
//         </td>
//         <td>${productoCarrito[i].nombre}</td>
//         <td>${productoCarrito[i].precio}</td>
//         <td>${productoCarrito[i].cantidad}</td>
//         <td>
//         <a href="#" class="borrar-curso" data-id="${productoCarrito[i].id}">X</a>
//         </td>`;
//         listaCarrito.appendChild(fila);
//     }

// }

/**
 * Función que inserta todos los productos al index desde el servidor
 */
async function insertarProductos(){
    const containerProductos=document.getElementById("products-container");
    //const productos=ControladorDB.getProductos();
    const respuesta= await fetch('productos.php',{
        method:"POST",
        headers : {
            "content-type" : "application/x-www-form-urlencoded"
        },
        body : `productos=all`
    });
    const productos= await respuesta.json();
    let productosHtml=htmlProductos(productos);
    containerProductos.innerHTML=productosHtml;

;}

/**
 * Función que inserta los checkbox al index
 */
async function insertarCheckbox(){
    const checkFiltros=document.getElementById("filter-container"); 

    const respuesta= await fetch('productos.php',{
        method:"POST",
        headers : {
            "content-type" : "application/x-www-form-urlencoded"
        },
        body : `categorias=all`
    });
    const categorias= await respuesta.json();
    let checkboxHtml=htmlCheckbox(categorias);
    checkFiltros.innerHTML=(checkboxHtml);
}

/**
 * Funciín para añadir elementos a la cesta 
 * @param {evento} e 
 */
// function aniadirAcesta(e){
//     e.preventDefault();
//     const campo=e.target;
//         if(campo.classList.contains("add")){
//             let id=campo.parentNode.parentNode.parentNode.id;
//             console.log(id);
//             let producto=ControladorDB.getProductoId(id);
//             ControladorCarrito.aniadirCarrito(producto[0]);
//             actualizarCarrito();
// }

// }

// /**
//  * Función que actualiza el carrito de los productos
//  */
// function actualizarCarrito(){
//     vaciarCarrito();
//     cestaCarritoHtml();
// }

// /**
//  * Función que vacia todos los productos del carrito
//  */
// function vaciarCarrito(){
//     const listaCarrito=document.querySelector("#lista-carrito tbody");
//     listaCarrito.innerHTML="";
// }

// /**
//  * Función que vacia el carrito
//  */
// function eliminarCarrito(){

    
//     vaciarCarrito();
//     ControladorCarrito.borrarCarrito();

// }

// /**
//  * Función que elimina producto de la cesta segun su id
//  * @param {evento} e 
//  */
// function eliminarProductoCarrito(e){
//     e.preventDefault();
//     const boton=e.target;
//     if(boton.classList.contains("borrar-curso")){

//     let id=boton.dataset.id;
//     ControladorCarrito.eliminarProductoCarrito(id);
//     actualizarCarrito();
//     }
    

// }
