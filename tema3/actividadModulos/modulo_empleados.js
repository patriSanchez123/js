export const TIPO_DOCENTE="Docente";
export const TIPO_ADMINISTRATIVO="Administrativo";

export function tipoEmpleado(empleado){
  const TIPO_EMPLEADO="";
if(empleado===Docente){
  TIPO_EMPLEADO=TIPO_DOCENTE;
}
if(empleado===Administrativo){
  TIPO_EMPLEADO=TIPO_ADMINISTRATIVO;
}
return TIPO_EMPLEADO;

}
export class Persona {
  #nombre;
  #apellido1;
  #apellido2;
  #edad;
  #nif;
  constructor(nombre, apellido1, apellido2, edad, nif) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.edad = edad;
    this.nif = nif;
  }
  cumpleanios() {
    this.edad++;
  }
  imprimeDatos() {
    return `Nombre: ${this.nombre}, Primer Apellido: ${this.apellido1}, Segundo Apellido: ${this.apellido2}, Edad:${this.edad}, nif: ${this.nif}`;
  }
}
const TURNO_M = "Mañana";
const TURNO_T = "Tarde";
const TURNO_N = "Noche";
class Empleado extends Persona {
  #numAfilSS;
  #suelfoBruto;
  #turno;
  #centroEducativo;
  #fechaInicio;

  constructor(
    nombre,
    apellido1,
    apellido2,
    edad,
    nif,
    numAfilSS,
    suelfoBruto,
    turno,
    centroEducativo,
    fechaInicio
  ) {
    super(nombre, apellido1, apellido2, edad, nif);
    this.numAfilSS = numAfilSS;
    this.suelfoBruto = suelfoBruto;
    this.turno = turno;
    this.centroEducativo = centroEducativo;

    if (this.comprobarFecha(fechaInicio)) {
      this.fechaInicio = fechaInicio;
    } else {
      console.error(
        "la fecha no es valida, no se ha podido crear El empleado correctamente"
      );
    }
  }

  calcularSueldoNeto() {
    if (this.suelfoBruto < 12450) {
      let retencionIRPF = this.suelfoBruto * 0.19;
      const sueldoNeto = this.suelfoBruto - retencionIRPF;
      return sueldoNeto;
    } else if (this.suelfoBruto < 20200) {
      let retencionIRPF = this.suelfoBruto * 0.24;
      const sueldoNeto = this.suelfoBruto - retencionIRPF;
      return sueldoNeto;
    } else if (this.suelfoBruto < 35200) {
      let retencionIRPF = this.suelfoBruto * 0.37;
      const sueldoNeto = this.suelfoBruto - retencionIRPF;
      return sueldoNeto;
    } else if (this.suelfoBruto < 60000) {
      let retencionIRPF = this.suelfoBruto * 0.45;
      const sueldoNeto = this.suelfoBruto - retencionIRPF;
      return sueldoNeto;
    } else {
      let retencionIRPF = this.suelfoBruto * 0.47;
      const sueldoNeto = this.suelfoBruto - retencionIRPF;
      return sueldoNeto;
    }
  }
  imprimeDatos() {
    return `Nombre: ${this.nombre}, Primer Apellido: ${this.apellido1}, Segundo Apellido: ${this.apellido2}, Edad:${this.edad}, nif: ${this.nif},Numero de la afiliación social:${this.numAfilSS} ,Sueldo Bruto: ${this.suelfoBruto},
    Centro educativo: ${this.centroEducativo}, Fecha inicio: ${this.fechaInicio}`;
  }
  comprobarFecha(fecha) {
    let RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (fecha.match(RegExPattern) && fecha != "") {
      return true;
    } else {
      return false;
    }
  }
}
const DEPART_INFORMATICA = "Informatica";
const DEPART_MATEMATICAS = "Matematicas";
const DEPART_IDIOMAS = "Idiomas";
const DEPART_CIENCIA = "Ciencia";
const CATEGORIA1 = "PES";
const CATEGORIA2 = "PTFP";

const PUESTO1 = "Funcionario carrera";
const PUESTO2 = "Funcionario interino";
const PUESTO3 = "Funcionario Praćticas";

export class Docente extends Empleado {
  #departamento;
  #categoria;
  #puesto;
  constructor(
    nombre,
    apellido1,
    apellido2,
    edad,
    nif,
    numAfilSS,
    suelfoBruto,
    turno,
    centroEducativo,
    fechaInicio,
    departamento,
    categoria,
    puesto
  ) {
    super(
      nombre,
      apellido1,
      apellido2,
      edad,
      nif,
      numAfilSS,
      suelfoBruto,
      turno,
      centroEducativo,
      fechaInicio
    );
    this.categoria = categoria;
    this.departamento = departamento;
    this.puesto = puesto;
  }
  getTiempoServicio() {
    /**
     * TODO tengo que cambiar la fecha el dia por el mes cambiar el array de posicion
     */
    //Calcula cuánto tiempo queda hasta el próximo mundial de fútbol. Indica años, meses y días.
    //Inicializamos la fecha actual
    let fechaActual = new Date();
    //Igualamos la fecha incial a la variable
    let fechaIni = this.fechaInicio;
    //Creamos un array donde separamos los dias, meses, años
    let arrayfechaIni = fechaIni.split("/");
    let arrayDate = [];
    arrayDate.push(arrayfechaIni[1], arrayfechaIni[0], arrayfechaIni[2]);
    console.log(arrayDate);

    //creamos una nueva cadena valida para objeto date
    fechaIni = arrayDate.join(", ");
    //creamos el objeto date para poder pasarlo a milisegundos
    let objetofechaIni = new Date(fechaIni);
    let tiempoMilisegundosFechas =
      fechaActual.getTime() - objetofechaIni.getTime();
    let miliSegundosRestantes;
    let diasMilisegundos = 86400000;
    let horaMilisegundos = 3600000;
    let anios = 0;
    let dias = 0;
    let horas;

    let meses = 0;
    //Dias
    dias = parseInt(tiempoMilisegundosFechas / diasMilisegundos);
    this;
    //Horas
    miliSegundosRestantes = tiempoMilisegundosFechas % diasMilisegundos;
    horas = parseInt(miliSegundosRestantes / horaMilisegundos);
    miliSegundosRestantes = miliSegundosRestantes % horaMilisegundos;
    //minutos

    if (dias < 365) {
      anios = 0;
    }
    if (dias > 365) {
      anios = parseInt(dias / 365);
      dias = parseInt(dias % 365);
    }
    if (dias > 30) {
      meses = parseInt(dias / 30.33);
      dias = parseInt(dias % 30.33);
    }

    return "Total años: " + anios + " Meses: " + meses + " Total dias: " + dias;
  }
  imprimeDatos() {
    return `Nombre: ${this.nombre}, Primer Apellido: ${this.apellido1}, Segundo Apellido: ${this.apellido2}, Edad:${this.edad}, nif: ${this.nif},Numero de la afiliación social:${this.numAfilSS} ,Sueldo Bruto: ${this.suelfoBruto},
          Centro educativo: ${this.centroEducativo}, Fecha inicio: ${this.fechaInicio}, Categoria: ${this.categoria}, Deparatamento: ${this.departamento}, Puesto: ${this.puesto} `;
  }
}
export class Administrativo extends Empleado {
  #dependencia;
  #tipoContrato;
  #puesto;

  constructor(
    nombre,
    apellido1,
    apellido2,
    edad,
    nif,
    numAfilSS,
    suelfoBruto,
    turno,
    centroEducativo,
    fechaInicio,
    dependencia,
    tipoContrato,
    puesto
  ) {
    super(
      nombre,
      apellido1,
      apellido2,
      edad,
      nif,
      numAfilSS,
      suelfoBruto,
      turno,
      centroEducativo,
      fechaInicio
    );
    this.dependencia = dependencia;
    this.tipoContrato = tipoContrato;
    this.puesto = puesto;
  }
  imprimeHojaTrabajo() {
    return `Turno: ${this.turno}, Centro de trabajo: ${this.centroEducativo}, Dependencia: ${this.dependencia}`;
  }
  imprimeDatos() {
    return `Nombre: ${this.nombre}, Primer Apellido: ${this.apellido1}, Segundo Apellido: ${this.apellido2}, Edad:${this.edad}, nif: ${this.nif},Numero de la afiliación social:${this.numAfilSS} ,Sueldo Bruto: ${this.suelfoBruto},
  Centro educativo: ${this.centroEducativo}, Fecha inicio: ${this.fechaInicio}, Dependencia: ${this.dependencia}, Tipo de contrato: ${this.tipoContrato} Puesto: ${this.puesto}`;
  }
}

