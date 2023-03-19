/***Actividad 1 */
//Desabilita el boton submit y le da un color de fondo a los elementos del formulario 

document.getElementById("formulario").elements['enviar'].addEventListener("click",desabilitar,false);

function desabilitar(){
  //e.this.enviar.disabled=true;
  let formulario=document.getElementById("formulario");
  for (let i = 0; i < formulario.elements.length; i++) {
      formulario.elements[i].disabled=true;
      formulario.elements[i].style.background="#D1D1D1";
    
    
  }
}
/**Actividad 2 */
// Da el foco al primer elemento cuando cargue la página
window.addEventListener('load',focus,false);

function focus(){
  // blur() que quita el foco
document.getElementById('formulario').elements[0].focus();

}
  
/***
 * Actividad 3
 * Quitar foco al element si no introduce lo correcto y lanza ventana emergente
 */
// document.getElementById("formulario").elements['edad'].addEventListener('change',pierdeFoco,false);

// function pierdeFoco(){

//   if(isNaN(this.value)){
//     document.getElementById("formulario").elements['edad'].blur();
//     alert("Introduce un numero");
//   }
// }


/**
 * Actividad 4 
 * El evento keypress no permite introducir ningun valor si no es el correcto
 */
document.getElementById("formulario").elements['edad'].addEventListener('keypress',pierdeFoco,false);

function pierdeFoco(){

  if(isNaN(this.value)){
    document.getElementById("formulario").elements['edad'].select();
    alert("Introduce un numero");
    
  }
}


window.addEventListener('load',opcionesPais,false);
function opcionesPais(){
  const aOpcionesPais = [
    {text: "Portugal", value: "pt"},
    {text: "Francia", value: "fr"},
    {text: "Reino Unido", value: "uk"},
    {text: "Alemania", value: "de"},
    {text: "España", value: "es"}
    ];
  let option; 
  let paises=document.getElementById("pais");
  
    for (let i = 0; i < aOpcionesPais.length; i++) {
      option= document.createElement("option"); 
      option.value=aOpcionesPais[i].value;
      option.text=aOpcionesPais[i].text;
      paises.add(option);
    }
}
