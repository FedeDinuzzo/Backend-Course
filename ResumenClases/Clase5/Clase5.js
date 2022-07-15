//Generar 10000 números aleatorios en el rango  de 1 a 20
function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const object = {};

for(let i=0; i < 10000; i++) {
  let n = randomInt(1,20);
  if (!object.hasOwnProperty(`${n}`)) { // Si la llave no existe la agregamaos a la cuenta
    object[n] = 1;
  } else { // Si ya existe, vamos a incmrementar en uno el valor
    object[n] = object[n] + 1;
  }
}

console.log(n); 

//Array de Objetos
const productos = [
  {id: 1, nombe: "Escuadra", precio: 12.50},
  {id: 2, nombe: "Boligrafo", precio: 2.60},
  {id: 3, nombe: "Plumon", precio: 10.50},
  {id: 4, nombe: "Cuaderno", precio: 52.50},
  {id: 5, nombe: "Borrador", precio: 1.50},
  {id: 6, nombe: "Diccionario", precio: 70.50},
];

let buffer = ""; //Separar los nombres con una ,
let precio_total = 0; //Calcula el precio total
let menor = 10e99; //Obtener el numero menor
let mayor = -10e99; //Obtener el numero mayor
productos.forEach((el) => {
  buffer = (buffer + el.nombre + ", ");
  precio_total = precio_total + el.precio
})

console.log(buffer); 
console.log(precio_tota); 

//precio total con reduce
const precio_total2 = productos.reduce((acc, el) => {
  return acc + el.precio
}, 0);

console.log(precio_total2);

//El precio promedio
let promedio = (precio_total2 / productos.length);

console.log(promedio);

productos.forEach((el) => {
  if(el.precio < menor) {
    menor = el.precio;
  }
});

console.log(menor);

productos.forEach((el) => {
  if(el.precio > mayor) {
    mayor = el.precio;
  }
});

console.log(mayor);

//Otra forma de obtener el mayor y el menor
Math.max(math.max(...productos.map(el=>el.precio)));
Math.min(math.min(productos.map(el=>el.precio)));

//Crear objeto con todas las propiedades creadas
const info = {
  mayor: mayor,
  menor: menor,
  promedio: promedio,
  precio_total: precio_total,
  listado: buffer
};

console.log(info);

//Modulos nativos en node, cojunto de funciones y objetos de js que las app externas pueden usar
//por ejemplo requiere('fs');
//el modulo fs (FileSystem)

//npm - Package Manager, sirven para no tener que descargar, instalar y mantener las dependencias de un proyecto a mano
//instanado dependencias con npm:
//Global
//npm install -g nombre-de-la-libreria
//Local
//npm install nombre-de-la-libreria


