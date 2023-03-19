document.getElementById("idProducto").addEventListener("input", obtenerProducto, false);

function obtenerProducto(e) {
    const idProducto = e.target.value;
    /* Fetch devuelve un promesa. Tiene dos posibles  parámetros:
        - url: contiene la URL del recurso remoto que se quiere obtener
        - opciones (opcional): representa los parámetros opcionales, como
            puede ser un método o los encabezados de nuestra petición, etc.
            Por ejemplo, será obligatorio si queremos hacer una petición POST
            Por defecto se realiza una petición GET y, en este caso es un
            parámetro opcional
    */
    fetch(`tienda.php?idProducto=${idProducto}`)
        /* Se ejecuta cuando el servidor responde.
            Tiene dentro una función que debe devolver un resultado.
            En este caso, se trata de datos en formato JSON.
        */
        .then(respuesta => respuesta.json())
        /* Se ejecuta una vez que el anterior "then" devuelve el resultado.
            En este caso llamamos a la función "muestraProductoHTML" con el
            "producto" ya parseado a objeto
        */
        .then(producto => muestraProductoHTML(producto))
        /* En caso de que se produzca un error en las comunicaciones y no se
            puede resolver la promesa, se ejecuta el "catch"
        */
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