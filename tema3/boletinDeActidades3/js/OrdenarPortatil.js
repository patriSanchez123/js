class Ordenador{

    marca="";
    modelo="";
    memoriaRam=4;
    discoDuro=512;
    pulgadasPantalla=17;

    constructor(marca,modelo){
        this.marca=marca;
        this.modelo=modelo;
    }
    toString(){

        return `Marca: ${this.marca},Modelo:${this.modelo},Memoria Ram: ${this.memoriaRam}Gb,Capacidad disco duro:${this.discoDuro} Gb,Pulgadas Pantalla:${this.pulgadasPantalla}`;
    }


}
class Portatil extends Ordenador{
    autonomia=4;

    constructor(marca,modelo){
        super(marca,modelo);
        this.pulgadas=12;
        this.discoDuro=256;
    }

    toString(){

        return `Marca: ${this.marca},Modelo:${this.modelo},Memoria Ram: ${this.memoriaRam}Gb,Capacidad disco duro:${this.discoDuro} Gb,Pulgadas Pantalla:${this.pulgadasPantalla},Autonomia:${this.autonomia} horas.`;
    }


}
portatil=new Portatil("aaaa","bbbbb");
console.log(portatil.toString());