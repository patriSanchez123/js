function mostrarParrafo2(){
    console.log(document.getElementsByTagName("p")[1].innerHTML);
    console.log(document.getElementsByClassName("parrafo")[1].innerHTML);
    console.log(document.getElementById("dos").innerHTML);
    /**
     * Siempre indicar el tipo de tag seguido de su id o class
     * el > indica que es un hijo
     */
    console.log(document.querySelector('div#caja2 > p').innerHTML);
    console.log(document.querySelectorAll('div#caja2 > p')[0].innerHTML);

}
function cambiarContenido(){
    //Cambiamos el contenido del parrafo y el tag
    document.getElementsByTagName("p")[1].innerHTML.textContent=("<strong>tercer párrafo</strong>");
}

function borrarParrafo4(){
    document.getElementsByTagName("p")[3].remove();
}
function crearElementoUltimaPosicion(){
    //Para crear nuevo elemento
let crearElemento=document.createElement('p');
let nuevoTexto=document.createTextNode('Se ha creado el nuevo elemento');
crearElemento.appendChild(nuevoTexto);
const currentDiv = document.getElementById("div1");
document.body.insertBefore(crearElemento, currentDiv);
}

function crearElementoTercerLugar(){
    let crearElemento=document.createElement("p");
    let nuevoTexto=document.createTextNode("Elemento creado en el Tercer Parrafo");
    let posicion=document.getElementById("caja3");
    crearElemento.appendChild(nuevoTexto);
    document.body.insertBefore(crearElemento,posicion);
    
}

// a) Cambia el contenido de un párrafo por el contenido del título del documento.
function cambiarParrafoPorTitulo(){

    h1=document.getElementsByTagName("h1")[0].innerHTML;
    p=document.getElementsByTagName("p")[0].innerHTML;
    //document.getElementsByTagName('h1')
    document.getElementsByTagName('h1')[0].textContent=(p);
    document.getElementsByTagName('p')[0].textContent=(h1);
    //console.log(h1+'\n'+p);
}
// b) Añade una imagen a un documento y cámbiala desde JavaScript.
function cambiarImagen(){

    document.getElementById("foto1").src="./fotos/foto2.jpg";
}


// c) Incluye un campo de texto de un formulario en un documento y cambia su valor por
// “Modificado desde JavaScript”.
function textoFormulario(){
    document.getElementById("texto").value="Se ha cambiado el texto";
}


// d) Utiliza el método write para escribir el contenido “Nuevo contenido escrito con write”.
function escribirConWrite(){

    document.open();
    document.write("<p>Probando con write en el documento</p>");
    document.close();
}
escribirConWrite();
/**
 * Preguntar por este ejercicio
 */   
// ¿qué ocurre con el contenido previo de la página?


// e) Realiza las siguientes operaciones sobre un párrafo:
// ◦ Cambia a rojo el color del texto.
// ◦ Añádele un fondo amarillo.
// ◦ Cambia el tamaño del texto a 40 píxeles.
// ◦ Ocúltalo.

function cambiarEstiloParrafo(){
cambiarEstilo=document.getElementsByTagName("p")[0];
cambiarEstilo.style.color="red";
cambiarEstilo.style.backgroundColor="yellow";
cambiarEstilo.style.fontSize = "40px";
cambiarEstilo.style.display = "none";
}
//cambiarEstiloParrafo();

