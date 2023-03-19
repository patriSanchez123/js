//Actualmente se desaconseja el uso de marcos en una página web, ¿por qué?
/**
 * Provoca problemas de accesibilidad, problemas de escaneo por parte de los
bots de los buscadores y, por tanto, complica y penaliza el posicionamiento
en los resultados de búsqueda y por que está obsoleto
 */


function cambiarParrafoMarco1(){
//Nos posicionamos en la ventana padre,para despues llamar a la ventana del hermano
//una vez en la ventana del hermano metemos el texto en una variable
//a continuación modicamos el parrafo del marco1 
   let ventanaPadre=window.parent;
   let iframeHermano=ventanaPadre.frames['marco2'];
   let textoSegundoParrafo=iframeHermano.document.getElementsByTagName('p')[0].textContent;


  document.getElementsByTagName('p')[0].textContent=textoSegundoParrafo;
 
}

function cambiarParrafoMarco2(){
 
let ventanaPadre=window.parent;
let iframeHermano=ventanaPadre.frames['marco1'];
let textoSegundoParrafo=iframeHermano.document.getElementsByTagName('p')[0].textContent;


document.getElementsByTagName('p')[0].textContent=textoSegundoParrafo;

}


