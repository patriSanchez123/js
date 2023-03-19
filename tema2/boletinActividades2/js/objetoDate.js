function calcularAñosHorasMinEnMilisegundos(){
//Calcula cuánto tiempo queda hasta el próximo mundial de fútbol. Indica años, meses y días.
let fechaActual=new Date();
let fechaMundial=new Date(2022, 11, 20);
let tiempoMilisegundosFechas=fechaMundial.getTime()-fechaActual.getTime();
let miliSegundosRestantes;
let diasMilisegundos=86400000;
let horaMilisegundos=3600000;
let minutosMilisegundos=60000;
let anios;
let dias;
let horas;
let minutos;
//Dias
 dias=parseInt(tiempoMilisegundosFechas/diasMilisegundos);
//Horas
miliSegundosRestantes=tiempoMilisegundosFechas%diasMilisegundos;
horas=parseInt(miliSegundosRestantes/horaMilisegundos);
miliSegundosRestantes=miliSegundosRestantes%horaMilisegundos;
//minutos
minutos=parseInt(miliSegundosRestantes/minutosMilisegundos);

if(dias<365){
   anios=0; 
}
if(dias>365){

    anios=parseInt(dias/365);
    dias=parseInt(dias%365);
    
}
if(dias<0){
    dia=0;
}
if(horas<0){
    hora=0;

}
if(minutos<0){
    minutos=0;
}

console.log("Total años: " + anios + " Total dias: " + dias + " Total horas: " + horas + " Total minutos: " + minutos);

}
calcularAñosHorasMinEnMilisegundos();




let dFechaActual;
// 1. Obtén la fecha y hora actual.
console.log(`Fecha actual: ${dFechaActual=new Date()}`);

// 2. Obtén el día del mes (getDate)

console.log(`Día del mes: ${dFechaActual.getDate()}`);

// 3. Obtén el día de la semana (getDay)

console.log(`Día de la semana: ${dFechaActual.getDay()}`);

// 4. Obtén el mes del año (getMonth)

console.log(`El mes es: ${dFechaActual.getMonth()}`);

// 5. Obtén el año (getFullYear)

console.log(`Año: ${dFechaActual.getFullYear()}`);

// 6. Obtén la hora (getHours)

console.log(`Hora: ${dFechaActual.getHours()}`);

// 7. Obtén los minutos (getMinutes)

console.log(`Minutos: ${dFechaActual.getMinutes()}`);

// 8. Los segundos (getSeconds)

console.log(`Los segundos son: ${dFechaActual.getSeconds()}`);

// 9. Obtén los milisegundos (getMilliseconds)

console.log(`Milisegundos: ${dFechaActual.getMilliseconds()}`);

// 10. Obtén la diferencia de tiempo en minutos entre hora UTC y local.

console.log(`Diferencia con UTC: ${dFechaActual.getTimezoneOffset() } horas.`);

// 11. Obtén los milisegundos transcurridos desde el 1/1/1970

console.log(`Milisegundos desde 01/01/1970: ${dFechaActual.getTime()}`);

// 12. Obtén una cadena legible de la fecha (toDateString)

console.log(`Fecha en formato legible: ${dFechaActual.toDateString()}`);

// 13. Obtén una cadena legible de la fecha en formato local (toLocaleDateString)

console.log(`Fecha en formato legible: ${dFechaActual.toLocaleDateString()}`);

// 14. Obtén una cadena legible de la hora en formato local (toLocaleTimeString)

console.log(`Hora en formato legible: ${dFechaActual.toLocaleTimeString()}`);

// 15. Obtén una cadena legible de la fecha y la hora en formato local (toLocaleString)

console.log(`Fecha y hora en formato legible: ${dFechaActual.toLocaleDateString()}`);