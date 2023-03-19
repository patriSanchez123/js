// Elemento contenedor global
const globalContainer = document.querySelector('#global-container');

// Cargamos los listeners de la página
loadEventListeners();

function loadEventListeners() {
    globalContainer.addEventListener('click', identifySource);
}

// Callback que se invoca cuando se hace clic sobre el contenedor global
function identifySource(event) {
    event.preventDefault();
    if(event.target.classList.contains('add')) {
        const product = getProduct(event.target);
        addProduct(product)
    }else if(event.target.classList.contains('remove')) {
        const product = getProduct(event.target);
        removeProduct(product);
    }
}

/**
 * 
 * @param {object} target 'botón' sobre el que se hace clic
 * @returns producto que se va a añadir o eliminar del carrito
 */
function getProduct(target) {
    const dataContainer = target.parentElement.parentElement;
    const article = dataContainer.parentElement;
    const id = article.id;
    const name = dataContainer.querySelector('h4').textContent;
    let price = dataContainer.querySelector(':nth-child(2)').textContent;
    let soldBy = dataContainer.querySelector(':nth-child(3)').textContent;
    let units = dataContainer.querySelector(':nth-child(4)').textContent;
    
    ////////////////////////COMIENZA EL CÓDIGO DEL ALUMNADO/////////////////////////////
    //Tratamiento del precio (debe ser un número). El valor se almacena en la variable "price"
    price = Number.parseInt(price.replace(',', '.').substring(0, price.length - 1));
    //Tratamiento del vendedor (sólo debe quedarse el nombre del vendedor). El valor se almacena en la variable "soldBy"
    soldBy = soldBy.split(' ').at(-1);
    //Tratamiento del número de unidades (sólo debe quedarse el número de unidades, un número). El valor se almacena en la variable "units"
    units = Number.parseInt(units.split(' ')[1]);
    ////////////////////////TERMINA EL CÓDIGO DEL ALUMNADO/////////////////////////////
    const product = {
        'id': id,
        'name': name,
        'price': price,
        'soldBy': soldBy,
        'units': units
    };
    return product;
}

/**
 * Método que añade al localStorage el producto aportado como parámetro.
 * Se almacena con clave = del producto y valor = a la serialización del producto.
 * Si el elemento ya existe, no se almacena y se devuelve false.
 * @param {object} product producto a añadir en localStorage.
 * @returns true si se almacena correctamente y false si no se puede almacenar.
 */
function addProduct(product) {
    ////////////////////////COMIENZA EL CÓDIGO DEL ALUMNADO/////////////////////////////
    const canBeStored = !isProductStored(product);
    if(canBeStored) {
        const productStr = JSON.stringify(product);
        localStorage.setItem(product.id, productStr);
        printShoppingCart();
    }
    return canBeStored;
    ////////////////////////TERMINA EL CÓDIGO DEL ALUMNADO/////////////////////////////
}

/**
 * Método que elimina del localStorage el producto aportado como parámetro.
 * Se buscará por el 'id' del producto.
 * Si el elemento no existe en el localStorage, se devuelve false.
 * @param {object} product producto a eliminar del localStorage.
 * @returns true si se ha eliminado correctamente y false si
 * no se puede eliminar porque no existe en localStorage.
 */
function removeProduct(product) {
    ////////////////////////COMIENZA EL CÓDIGO DEL ALUMNADO/////////////////////////////
    const canBeRemoved = isProductStored(product);
    if(canBeRemoved) {
        localStorage.removeItem(product.id);
        printShoppingCart();
    }
    return canBeRemoved;
    ////////////////////////TERMINA EL CÓDIGO DEL ALUMNADO/////////////////////////////
}

/**
 * Método que imprime por consola todo el carrito de la compra.
 * Formato de ejemplo:
 * 
 * ----------Productos del carrito:
 * --Id: 001
 *   Nombre: Placa base
 *   Precio: 120,30€
 *   Vendido por: Amazonia
 *   Número de unidades que quedan: 20
 */
function printShoppingCart() {
    ////////////////////////COMIENZA EL CÓDIGO DEL ALUMNADO/////////////////////////////
    console.log('----------Productos del carrito:');
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const product = JSON.parse(localStorage.getItem(key));
        printProduct(product);
    }

    // Función interna que imprime un producto
    function printProduct(product) {
        console.log(`--Id: ${product.id}`);
        console.log(`  Nombre: ${product.name}`);
        console.log(`  Precio: ${("" + product.price).replace('.', ',')}€`);
        console.log(`  Vendido por: ${product.soldBy}`);
        console.log(`  Número de unidades que quedan: ${product.units}`);
    }
    ////////////////////////TERMINA EL CÓDIGO DEL ALUMNADO/////////////////////////////
}

/**
 * Método que comprueba si un producto está almacenado en el localStorage.
 * @param {object} product producto que hay que comprobar si está almacenado en localStorage.
 * @returns true si el producto está almacenado en el localStorage, false en caso contrario.
 */
function isProductStored(product) {
    ////////////////////////COMIENZA EL CÓDIGO DEL ALUMNADO/////////////////////////////
    return localStorage.getItem(product.id) !== null;
    ////////////////////////TERMINA EL CÓDIGO DEL ALUMNADO/////////////////////////////
}