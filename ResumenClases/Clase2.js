//CLASE 2 

//CLAUSURAS
//Funcion que retorna una funcion anonima
//Para acceder al scope superior

function crearGritarNombre (nombre) {
  const signosExclamacion = '!!!';
  return function () {
    console.log(`${nombre}${signosExclamacion}`);
  }
}

//const gritarCH = crearGritarNombre("coderhouse");
//gritarCH();

crearGritarNombre("Julio")();

const c = `
  Esto es la linea 1
  Esto es la linea 2
  Esto es la linea 3
  Esto es la linea 4
  `

console.log(c);


//DESAFIO EN CLASE
const listaDeDatos = { nombre: 'juan', apellido: 'Alvarez'}
function mostrarLista(listaDeDatos) {
  if listaDeDatos === null {}
  else {}
}

function crearMultiplicador (a) {
  return function (b) {
    return a * b
  }
}

crearMultiplicador(5)(4)
//funcion duplicar
//funcion triplicar


//CLASES

//contiene en su primer letra mayuscula
//El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase
class Cliente {
  constructor (nombre, fecha, direccion) {
    this.nombre = nombre;
    this.fechaNacimiento = fecha;
    this.direccion = direccion;
  }
} 

class Persona {
  constructor (nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  }


  static saludo = "Buenas Noches";

  saludoCompleto() {
    console.log(`Hola soy ${this.nombre}`)
  }

  saludoEstatico() {
    console.log(Persona.saludo);
  }
}

//Operador NEW
//permite crear una instancia de un tipo de objeto definido por el usuario
//Realiza basicamente 3 tareas en la construccion

const p = new Persona("Juan", 18);
const persona2 = new Persona("Ana", 17);
console.log(p);
console.log(persona2);

p.saludoCompleto()
//retorna hola soy Juan
p.saludoEstatico()
//Bretorna Buenas Noches

console.log(Persona, saludo);

//DESAFIO EN CLASE
class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuenta = 0;
  }

  static cuentaTotal = 0;

  contar() {
    this.cuenta += 1;
    Contador.cuentaTotal += 1;
  }
}

const cPedro = new Contador("Pedro");
const cJuan = new Contador("Juan");

console.log(cPedro);
console.log(cJuan);
//los inicia en 0

cPedro.contar();
cJuan.contar();
cJuan.contar();
console.log(cPedro);
console.log(cJuan);
//le suma 1

console.log(`El contador total es ${Contador}`);
//resultado = 3