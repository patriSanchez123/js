
class Plano{
   //Variables
   #x=0;
   #e=0;
 /**
  * Constructor Plano
  * @param {number} x 
  * @param {number} e 
  */
   constructor(x,e){
      if(isNaN(x)){
            x=0;
         }if(isNaN(e)){
            e=0;
         }
         this.#x=parseInt(x);
         this.#e=parseInt(e);      
      
      }
/**
 * Función que modidifica el atributo x
 */
    set e(_e){
      this.#e=_e;
   }
/**
 * Función que modidifica el atributo x
 */
   set x(_x){
      this.#x=_x;
   }
/**
 * Función que retorna el atributo e
 */
    get (){
      return this.#e;
   }
/**
 * Función que retorna el atributo x
 */
   get x(){
      return this.#x;
   }
   
   /**
     * Función que cambia los parametros del punto
     * @param {number} x 
     * @param {number} e 
     * @param {plano} objeto 
     * @returns plano
     */
   cambiar(x,e){

      this.x=x;
      this.e=e
      
   }
   /**
    * 
    * @param {Plano} plano2 
    * @returns Plano
    */
   copiar(plano2){
      plano2=this
      return plano2;
   }
   /**
    * 
    * @param {Plano} plano2 
    * @returns boolean
    */
   compararPlanos(plano2){
   
   return this.x===plano2.x && this.e===plano2.e ;
   }

   /**
    * 
    * @param {Plano} plano2 
    * @returns Plano
    */
   suma (plano2){
      const sumaX=this.#x+plano2.#x;
      const sumaE=this.#e+plano2.#e;
      const punto= new Plano(sumaX,sumaE);
      return punto;
   }
   /**
    * 
    * @param {Plano} plano2 
    * @returns number
    */
   obtenerDistancia(plano2){
      let resultado=0;
      const distHorizontal=Math.pow(this.#x-plano2.#x,2);
      const distVertical=Math.pow(this.#e-plano2.#e,2);
      resultado=Math.sqrt(distHorizontal+distVertical);
      return resultado;
   
 }
 toString(){
   return `${this.#x},${this.#e}`;
 }
}

 

 let plano= new Plano(-5,2);

 console.log(plano)
 let plano2=new Plano(6,-3);

 console.log(plano.obtenerDistancia(plano2));
 console.log(plano.toString());