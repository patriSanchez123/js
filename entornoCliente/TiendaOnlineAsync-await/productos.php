<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$productos = array(
    array("id" => "001", "nombre" => "Auriculares molones", "categoria" => "001", "imagen" => "img/art001.webp", "precio" => "40,12", "vendedor" => "Amazonia", "stock" => "15"),
    array("id" => "002", "nombre" => "Auriculares no tan molones", "categoria" => "001", "imagen" => "img/art002.webp", "precio" => "28,46", "vendedor" => "AncaJuan", "stock" => "16"),
    array("id" => "003", "nombre" => "Buena caja", "categoria" => "002", "imagen" => "img/art003.webp", "precio" => "75", "vendedor" => "Amazonia", "stock" => "18"),
    array("id" => "004", "nombre" => "Vaya fuente!", "categoria" => "003", "imagen" => "img/art004.webp", "precio" => "102,34", "vendedor" => "Amazonia", "stock" => "8"),
    array("id" => "005", "nombre" => "Monitor Asus", "categoria" => "004", "imagen" => "img/art005.webp", "precio" => "102,34", "vendedor" => "AncaJuan", "stock" => "12"),
    array("id" => "006", "nombre" => "Monitor MSI", "categoria" => "004", "imagen" => "img/art006.webp", "precio" => "272,30", "vendedor" => "PC Ya!", "stock" => "21"),
    array("id" => "007", "nombre" => "Placa base Asus", "categoria" => "005", "imagen" => "img/art007.webp", "precio" => "187,45", "vendedor" => "Amazonia", "stock" => "6"),
    array("id" => "008", "nombre" => "Un portátil", "categoria" => "006", "imagen" => "img/art008.webp", "precio" => "714,18", "vendedor" => "Otra tienda", "stock" => "9"),
    array("id" => "009", "nombre" => "Otro portátil", "categoria" => "006", "imagen" => "img/art009.webp", "precio" => "1056", "vendedor" => "PC Ya!", "stock" => "13"),
    array("id" => "010", "nombre" => "Otro portátil más", "categoria" => "006", "imagen" => "img/art010.webp", "precio" => "1814,68", "vendedor" => "Otra tienda", "stock" => "3"),
    array("id" => "011", "nombre" => "Ratón de jugar a juegos", "categoria" => "007", "imagen" => "img/art011.webp", "precio" => "46,85", "vendedor" => "Amazonia", "stock" => "49"),
    array("id" => "012", "nombre" => "Silla de jugar", "categoria" => "008", "imagen" => "img/art012.webp", "precio" => "180", "vendedor" => "AncaJuan", "stock" => "24"),
    array("id" => "013", "nombre" => "Tarjeta gráfica", "categoria" => "009", "imagen" => "img/art013.webp", "precio" => "543", "vendedor" => "AncaJuan", "stock" => "15"),
    array("id" => "014", "nombre" => "Teclado de jugar", "categoria" => "010", "imagen" => "img/art014.webp", "precio" => "113,63", "vendedor" => "Amazonia", "stock" => "19"),
    array("id" => "015", "nombre" => "Una torre", "categoria" => "011", "imagen" => "img/art015.webp", "precio" => "1250", "vendedor" => "Amazonia", "stock" => "6"),
    array("id" => "016", "nombre" => "Una torre con luces", "categoria" => "011", "imagen" => "img/art016.webp", "precio" => "1930,37", "vendedor" => "Amazonia", "stock" => "42"),
);

// Categorías
$categorias = array(
    array("id" => "001", "nombre" => "Auriculares"),
    array("id" => "002", "nombre" => "Carcasa"),
    array("id" => "003", "nombre" => "Fuente de alimentación"),
    array("id" => "004", "nombre" => "Monitor"),
    array("id" => "005", "nombre" => "Placa base"),
    array("id" => "006", "nombre" => "Portátil"),
    array("id" => "007", "nombre" => "Ratón"),
    array("id" => "008", "nombre" => "Silla"),
    array("id" => "009", "nombre" => "Tarjeta gráfica"),
    array("id" => "010", "nombre" => "Teclado"),
    array("id" => "011", "nombre" => "PC completo")
);


//echo (json_encode($productos));
function getProductos(){
    global $productos;
    echo (json_encode($productos));
}

function getCategorias(){
    global $categorias;
    echo (json_encode($categorias));
}
function filtarPorCategorias($idCategoria){
    global $productos;
    $productosFiltrados = array_filter($productos, fn($p) => $p['categoria'] == $idCategoria);
    return $productosFiltrados;
}

if(isset($_POST['productos']) && ($_POST['productos'] === 'all')){

    getProductos();
}elseif(isset($_POST['categorias']) && ($_POST['categorias'] === 'all')){

    getCategorias();
}elseif((isset($_REQUEST['metodo'])) && ($_REQUEST['metodo'])==='getProductosPorCategorias'){

$categorias=json_decode($_REQUEST['categorias']);

    foreach($categorias as $categoria){

    $productosFiltrados[]=filtarPorCategorias($categoria);
    
    }  
    echo (json_encode($productosFiltrados));
}

// $prueba=array('001','002','003');
// foreach($prueba as $categoria){

//     $productosFiltrados[]=filtarPorCategorias($categoria);
   
//     }
//     echo (json_encode($productosFiltrados));
?>
