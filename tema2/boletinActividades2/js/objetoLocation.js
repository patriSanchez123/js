//Si se añade el get element no muestra nada en consola lo 
//muestra solo en la página

// let localizacion=document.getElementById("prueba").innerHTML="Localizacion de la pagina: "+window.location.href;
// console.log(localizacion);
function mostrarObjetosLocation(){
    let localizacion=document.innerHTML="Localizacion de la pagina: "+window.location.href;
    console.log(localizacion);
   let nombreDominio=document.innerHTML="Dominio  de la pagina: "+window.location.hostname;
   console.log(nombreDominio);
   let rutaNombre=document.innerHTML="Ruta y nombre de la página: "+window.location.pathname;
   console.log(rutaNombre);
   let protocolo=document.innerHTML="Protocolo de comunicación utilizado: "+window.location.protocol;
   console.log(rutaNombre);
}
//mostrarObjetosLocation()
// function redireccionarPagina(){
//     miPagina=window.location.href;
//     window.location.assign(miPagina);
//     window.location.replace("https://www.google.es");  
// }

function recargarPagina(){
    miPagina=window.location.href;
    window.location.reload();
}


