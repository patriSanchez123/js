/*****************************************
      DEFINICIÓN DE CÓDIGOS UNICODE
*****************************************/
const PALO_PICAS = "♠";
const PALO_TREBOLES = "♣";
const PALO_CORAZONES = "♥";
const PALO_DIAMANTES = "♦";

const SIMBOLO_A = "A";
const SIMBOLO_2 = "2";
const SIMBOLO_3 = "3";
const SIMBOLO_4 = "4";
const SIMBOLO_5 = "5";
const SIMBOLO_6 = "6";
const SIMBOLO_7 = "7";
const SIMBOLO_J = "J";
const SIMBOLO_Q = "Q";
const SIMBOLO_K = "K";

const ESQUINA_SUP_IZQ = "┏";
const ESQUINA_SUP_DER = "┓";
const ESQUINA_INF_IZQ = "┗";
const ESQUINA_INF_DER = "┛";

const BORDE_HORIZONTAL = "━";
const BORDE_VERTICAL = "┃";

const ESPACIO_EN_BLANCO = "0x0020";
const ARRAY_SIMBOLOS = [
      SIMBOLO_A,
      SIMBOLO_2,
      SIMBOLO_3,
      SIMBOLO_4,
      SIMBOLO_5,
      SIMBOLO_6,
      SIMBOLO_7,
      SIMBOLO_J,
      SIMBOLO_Q,
      SIMBOLO_K,
];
const ARRAY_PALOS = [PALO_PICAS, PALO_TREBOLES, PALO_CORAZONES, PALO_DIAMANTES];
const VALORES_SIMBOLOS=["A","2","3","4","5","6","7","J","Q","K"];
const VALORES_PALOS=["Picas","Diamantes","Corazones","Trevoles"];
const FILA=7;
COLUMNA=9;

/*****************************************
      CLASE CARTA
*****************************************/
//TODO
class Carta {
      sSimbolo;
      sPalo;
      aCarta;

      constructor(sSimbolo, sPalo) {
            
            this.sSimbolo = sSimbolo;
            this.sPalo = sPalo;
            this.aCarta=[];

            
      }

      codeSimbolo() {
            let simboloUnicode="";
            //TODO  inserta los simbolos unicode de las cartas dependiendo de la carta
            switch (this.sSimbolo) {
                  case "A":
                        simboloUnicode=SIMBOLO_A;
                        break;
                  case "2":
                        simboloUnicode=SIMBOLO_2;
                        break;
                  case "3":
                        simboloUnicode=SIMBOLO_3;
                        break;
                  case "4":
                        simboloUnicode=SIMBOLO_4;
                        break;
                  case "5":
                        simboloUnicode=SIMBOLO_5;
                        break;
                  case "6":
                        simboloUnicode=SIMBOLO_6;
                        break;
                  case "7":
                        simboloUnicode=SIMBOLO_7;
                        break;
                  case "J":
                        simboloUnicode=SIMBOLO_J;
                        break;
                  case "Q":
                        simboloUnicode=SIMBOLO_Q;
                        break;
                  case "K":
                        simboloUnicode=SIMBOLO_K;
                        break;
            }
            return simboloUnicode;
      }
      /**
       * Inserta los palos unicode dependiendo del palo
       * @param {String} palo 
       */
      codePalo(){
            let paloUnicode="";
            switch(this.sPalo){
                  case 'Picas':
                  paloUnicode=PALO_PICAS;
                        break;
                  case 'Diamantes':
                  paloUnicode=PALO_DIAMANTES;
                        break;
                  case 'Corazones':
                  paloUnicode=PALO_CORAZONES;
                        break;
                  case 'Trevoles':
                  paloUnicode=PALO_TREBOLES;
                        break;
            }
            return paloUnicode;
      }
      /**
       * Método que devuelve el simbolo
       */
      get simbolo(){
            return this.sSimbolo;
      }
      /**
       * Método que devuelve el palo
       */
      get palo(){
            return this.sSimbolo;
      }
      /**
       * Método que devuelve el array carta
       */
      get carta(){
            return this.aCarta;
      }
    
      /**
       * Método que modifica el simbolo
       */
      set simbolo(sSimbolo){
            
            this.sSimbolo=sSimbolo;

      }
      /**
       * Método que modifica el palo
       */
      set palo(sPalo){

            return this.sPalo=sPalo;
      }

      /**
       * Inicializar carta cpn valores en blanco
       */
      inicializarCarta() {
            //inicializamos el array carta
        let arrayCarta=[];
        
            for (let i = 0; i < FILA; i++) {
            //inicializamos el array de las filas 
            //no se puede inicializar arriba por que da error  
            let arrayColumnaFila=[];                
                  for (let j = 0; j < COLUMNA; j++) {

                        arrayColumnaFila.push(" ");
                        
                  }
                  arrayCarta.push(arrayColumnaFila);
            }
            return arrayCarta;
      }

      incluirLineas() {
            //TODO añade las lineas de en las esquinas y los bordes

             let arrayCarta=this.inicializarCarta();

             for (let i = 0; i < FILA; i++) {

                  for (let j = 0; j < COLUMNA; j++) {
                        
                  if(i===0 || i==FILA-1){
                        arrayCarta[i][j]=BORDE_HORIZONTAL;
                  }
                  if(j===0 || j===COLUMNA-1){
                        arrayCarta[i][j]=BORDE_VERTICAL;
                  }
                        
                  if(i===0 && j===0) {
                        arrayCarta[i][j]=ESQUINA_SUP_IZQ;
                  }
                   if(i===0 && j===COLUMNA-1){
                        arrayCarta[i][j]=ESQUINA_SUP_DER;
                  } 
                  if(i===FILA-1 && j===0){
                        arrayCarta[i][j]=ESQUINA_INF_IZQ;
                  }
                  if(i===FILA-1 && j===COLUMNA-1){
                        arrayCarta[i][j]=ESQUINA_INF_DER;
                 
                  }
                  
                  
            }
      }
            return arrayCarta;
      }

      incluirSimbolo() {
            //TODO incluye el simbolo en el array dependiendo del numero que sea
            //Utilizamos el metodo anterior donde ya tenemos las paredes y los bordes de las cartas
            let arrayCarta=[];
             arrayCarta=this.incluirLineas();
            //Agregamos el método donde cojemos el unicode del simbolo pasandole por parametro el simbolo de la clase
            
            let simbolo=this.codeSimbolo();
            for (let i = 0; i < FILA; i++) {
                  for (let j = 0; j < COLUMNA; j++) {
                  if((i===1 && j===1) || (i===FILA-2 && j===COLUMNA-2)){
                        arrayCarta[i][j]=simbolo;
                  }
                  }
            }
            return arrayCarta;

      }

      incluirPalo() {
            //TODO añade el palo de en el array de la carta
            let arrayCarta=[];
            arrayCarta=this.incluirSimbolo();
            let palo=this.codePalo();

            
            switch (this.sSimbolo) {
                  case "A":
                        
                        arrayCarta[3][4]=palo;
                        break;
                  case "2":
                        arrayCarta[2][4]=palo;
                        arrayCarta[3][4]=palo;
                        break;
                  case "3":
                      //  simboloUnicode=SIMBOLO_3;
                       arrayCarta[2][4]=palo;
                       arrayCarta[3][4]=palo;
                       arrayCarta[4][4]=palo;
                        break;
                  case "4":
                      //  simboloUnicode=SIMBOLO_4;
                       arrayCarta[2][3]=palo;
                       arrayCarta[2][5]=palo;
                       arrayCarta[4][3]=palo;
                       arrayCarta[4][5]=palo;
                       
                        break;
                  case "5":
                        arrayCarta[2][3]=palo;
                        arrayCarta[2][5]=palo;
                        arrayCarta[3][4]=palo;
                        arrayCarta[4][3]=palo;
                        arrayCarta[4][5]=palo;
                        break;
                  case "6":
                     //   simboloUnicode=SIMBOLO_6;
                       arrayCarta[2][3]=palo;
                       arrayCarta[2][5]=palo;
                       arrayCarta[3][3]=palo;
                       
                       arrayCarta[4][3]=palo;
                       arrayCarta[3][5]=palo;
                       arrayCarta[4][5]=palo;
                        break;
                  case "7":
                        arrayCarta[1][3]=palo;
                        arrayCarta[1][5]=palo;
                        arrayCarta[2][4]=palo;
                        arrayCarta[3][3]=palo;
                        arrayCarta[3][5]=palo;
                        arrayCarta[4][5]=palo;
                        arrayCarta[4][3]=palo;
                        break;
                  case "J":
                      //  simboloUnicode=SIMBOLO_J;
                      arrayCarta[3][4]=palo;
                        break;
                  case "Q":
                        arrayCarta[3][4]=palo;
                      
                        break;
                  case "K":
                        arrayCarta[3][4]=palo;
                        break;
            }
            this.aCarta=arrayCarta;
      }

      comprobarSimbolo(sSimbolo){
            //TODO comprueba si el simbolo introducido es correcto
      }
      comprobarPalo(sPalo){
            //Comprueba si el palo introducido es correcto
      }
      /**
       * Método que imprime la carta
       */
      toString(){
            let imprimirFilas="";  
            for (let i = 0; i < FILA; i++) {     
                           
                  for (let j = 0; j < COLUMNA; j++) {
      
            imprimirFilas=imprimirFilas+this.aCarta[i][j];               
                              
                  }
            imprimirFilas=imprimirFilas+"\n";
            
                  }
            return imprimirFilas;
      }
}

/*****************************************
    MONTONES
*****************************************/
//TODO
class Baraja{

      arrayBaraja;

      constructor(){
            this.arrayBaraja=[];
      }
crearBaraja(){

      for (let i = 0; i < VALORES_PALOS.length; i++) {
            for (let j = 0; j < VALORES_SIMBOLOS.length; j++) {
             let carta=new Carta(VALORES_SIMBOLOS[j],VALORES_PALOS[i]);
                  carta.incluirPalo();
                  this.arrayBaraja.push(carta);
            }
            
      }
}
toString(){
      let imprimirLinea="";
      for (let i = 0; i < this.arrayBaraja.length; i++) {
            imprimirLinea=imprimirLinea+this.arrayBaraja[i];
            
      }
      return imprimirLinea;
}

barajar() {
      let i;
      for (i = this.arrayBaraja.length -1; i > 0; i--) { 
            let y = aleatorioEntre(0, i - 1);
            let temp = this.arrayBaraja[i]; 
            this.arrayBaraja[i] = this.arrayBaraja[y]; 
            this.arrayBaraja[y] = temp;
         } 
         return this.arrayBaraja;

}
}
function aleatorioEntre(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
}

baraja= new Baraja();
baraja.crearBaraja();
console.log(baraja.toString())
console.log(baraja.barajar().toString());
