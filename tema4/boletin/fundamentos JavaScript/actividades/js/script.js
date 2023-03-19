//Acceder formulario

//id
let formularioID=document.getElementsByTagName("formulario");
console.log(formularioID);

//name si hay más de un formulario con el mismo nombre se le añade el inc¡dice 0 para que coja el 1º
let formularioName=document.getElementsByTagName("formulario");
console.log( formularioName);

//Buscando el formulario desde el padre
let formularioPadre= document.getElementById("form");
let formulario= formularioPadre.getElementsByTagName("formulario");
console.log(formulario);

//Acceder con el punto
let miFormulario=document.formulario;
console.log(miFormulario);
//Accerder a atributos
console.log(miFormulario[0]);
console.log(miFormulario['email']);

//Para preveer que el submit mande al servidor información al servidor

//  document.getElementById("formulario").addEventListener("click",function(event){
//      event.preventDefault()
//     console.log("Esto es una prueba");
//  });
// Va con onclick (No me funciona)
function myFunction() {
    document.getElementById("formulario").submit();
    //console.log("Esto es una prueba ");
  }

//Acceder a los atributos con la propiedad element
document.getElementById("formulario").addEventListener("click",function(event){
    event.preventDefault();
    let form=document.getElementById("formulario"); 
    for (var i=0; i< form.elements.length; i++)
{
    
          console.log(miFormulario.elements[i].value);
     
}
   // console.log(document.getElementById("formulario").email.value);
});


