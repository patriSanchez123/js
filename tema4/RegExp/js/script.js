import {mostrarResultado} from "./ignorar.js";

/**
 * Método que crea todos los listeners necesarios para el tratamiento de errores en el formulario
 */
function crearListeners() {
    // Evento para el tratamiento de los errores al hacer "submit" en el formulario
    document.getElementById("formulario").addEventListener("submit", validarActividades, false);
}

crearListeners();

function validarActividades(e) {
    e.preventDefault();
    const texto = document.getElementById("prueba").value;
    let cumpleExprReg = false;

    // Actividad 1: considera este código como un ejemplo
    const expr1 = /cosas/;
    cumpleExprReg = expr1.test(texto);
    ///////////////////////////////// AQUÍ EL RESTO DE ACTIVIDADES: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    /* Aquí el código de todas las actividades. Hay que usar las variables: 
        - "texto": que contiene el texto del campo
        - "cumpleExprReg": que contendrá un booleano que indica si se cumple o no la expresión regular
        Nota: tomar como ejemplo la actividad 1
    */
    // Actividad 2:
    const expr2 = /^[A-Z]/;
    cumpleExprReg = expr2.test(texto);
    // Actividad 3:
    const expr3 = /^[0-9].*[0-9]$/;
    cumpleExprReg = expr3.test(texto);
    // Actividad 4:
    const expr4 = /^a.*a$/;
    cumpleExprReg = expr4.test(texto);
    // Actividad 5:
    const expr5 = /.* la|los|las|La|Los|Las .*/;
    cumpleExprReg = expr5.test(texto);
    // Actividad 6:
    const expr6 = /^[0-9]{16}$/i;
    cumpleExprReg = expr6.test(texto);
    // Actividad 7:
    const expr7 = /^[0-9]{4}(-|\s)?[0-9]{4}(-|\s)?[0-9]{4}(-|\s)?[0-9]{4}$/;
    cumpleExprReg = expr7.test(texto);
    // Actividad 8:
    const expr8 = /(^[0-9]{4}[-][0-9]{4}[-][0-9]{4}[-][0-9]{4}$)|^([0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{16})$/;
    cumpleExprReg = expr8.test(texto);
    // Actividad 9:
    const expr9 = /^[-]?[0-9]+$/;
    cumpleExprReg = expr9.test(texto);
    // Actividad 10:
    const expr10 = /^[0-2][0-5][0-5][.][0-2][0-5][0-5][.][0-2][0-5][0-5][.][0-2][0-5][0-5]$/;
    cumpleExprReg = expr10.test(texto);
    // Actividad 11:
    const expr11 = /^([1-9]|[1-2][0-9]|3[0-1])(\/)([1-9]|1[0-2])(\/)([1-2][0-9]{3})$/;
    cumpleExprReg = expr11.test(texto);

    // Actividad 12:
    
    // Actividad 13:
    
    // Actividad 14:
    // /^(?=.*[\wáéíóú])(?=.*[A-Z])(?=.*[0-9])(?=.*[0-9]){12,}$/
    const expr14 =  /^(?=.*[a-záéíóúñ])(?=.*[A-ZÁÉÍÓÚÑ])(?=.*[0-9])(?=.*[=,/-_.,;*+]){8,10}/;
    cumpleExprReg = expr14.test(texto);
   
    ///////////////////////////////// FIN ACTIVIDADES \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    // Mostramos el resultado de la expresión regular
    mostrarResultado(texto, cumpleExprReg);
}