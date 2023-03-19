document.getElementById("idProducto").addEventListener("input", obtenerProducto, false);

function obtenerProducto(e) {
    const idProducto = e.target.value;
    /* En caso de tener que establecer valores en las cabeceras
        de la petición, será obligatorio usar el segundo parámetro,
        que debe ser de tipo objeto literal
    */
    fetch(`tienda.php`, {
            method : "POST",
            /* El "content-type" debe coincidir con el tipo que se envíe
                en el "body" (más abajo). Si vamos a enviar un json, habría
                que especificar el "content-type" "application/json"
            */
            headers : {
                "content-type" : "application/x-www-form-urlencoded"
            },
            body : `idProducto=${idProducto}`
        })
        .then(respuesta => respuesta.json())
        .then(producto => muestraProductoHTML(producto))
        .catch(error => console.log('Problema con Fetch:' + error.message));
}

function muestraProductoHTML(producto) {
    const contenedor = document.getElementById("contenedorProducto");
    
    const {id, nombre, categoria, imagen, precio, vendedor, stock} = producto;

    contenedor.innerHTML = `
    <article id="${id}" class="location-listing" data-categoria="${categoria}">
        <div class="location-image">
            <a href="#">
                <img src="${imagen}" alt="${nombre}">
            </a>
        </div>
        <div class="data">
            <h4>${nombre}</h4>
            <p class="price">${precio}€</p>
            <p>Vendido por <strong>${vendedor}</strong></p>
            <p>Quedan ${stock} unidades</p>
            <div class="button-container">
                <a class="button add" href="#" target="_blank">Añadir al carrito</a>
            </div>
        </div>
    </article>
    `;

}