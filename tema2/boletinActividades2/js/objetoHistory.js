function mostrarPropiedades(){

let cabezeraHTTP=window.navigator.userAgent;
let cookiesHabilitadas=window.navigator.cookieEnabled;
let sistemaOperativoNavegador=window.navigator.platform;
let lenguajeDelNavegador=window.navigator.language;

console.log("Cabezera HTTP: "+cabezeraHTTP+"\nCookies Habilitadas: "
+cookiesHabilitadas+"\nSistema Operativo que corre el navegador: "+sistemaOperativoNavegador+
"\nLenguaje del navegador: "+lenguajeDelNavegador);

}
mostrarPropiedades();