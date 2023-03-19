//primera forma para acceder al formulario
console.log("***************");
let formulario=document.getElementById("formulario");
console.log(formulario);
//segunda forma acceder al formulario
console.log("***************");
let formularioName=document.getElementsByTagName("form");
console.log(formularioName);
//son totalmente iguales formulario que formularioName

//tercera forma acceder al formulario
console.log("***************");
let div=document.getElementById("formulario");
let divElement =div.getElementsByTagName("form");
console.log(divElement);

//cuarta forma acceder al formulario
console.log("***************");
let formulario2= document.forms['form'];
console.log(nombre);

//Para ver el action del formulario, se pueden ver muchas más
//propiedades
console.log("***************");
let action= formulario2.action;
console.log(action);


//quinta forma acceder al formulario
console.log("***************");
document.form;
console.log(document.form);

/////////////////ACCEDER A LOS CAMPOS///////
console.log("************************************************************************");
console.log("************************************************************************");
let email=document.form.email;
console.log(email);

console.log("***************");
//al selecionar los elementos en el a navegador podemos darles
// al segundo botón y le damos a copiar y se pude 
// copiar el selector

document.querySelector('#content > article > div.section-content');

document.forms['form'].elements['email']

///////////////ACCEDER A LAS PROPIEDADES DE LOS CAMPOS//////7

document.forms['form'].elements['email'].defaultValue;
