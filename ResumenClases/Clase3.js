//SYNC & ASYNC

//Funciones en JS
function add (a, b) {
  return a + b;
}

//Declaracion de funciones
function add(params) {
  console.log(params);
}

const suma = add(2 , 3.5);
console.log(suma);
//retorna 5.5

//Las funciones tambien son objetos
const add2 = function(params) {
  console.log(params);
}

//ARROW FUNCTIONS
const add3 = (param1, param2) => {
  console.log(param1, param2);
}

//Si la funcion solo tiene un parametro se pueden omitir los parentesis
const add4 = params => {
  console.log(params);
}

//Si la funcion solo tiene una sola instruccion se pueden omitir las llaves
const add5 = params => console.log(params);


//CALLBACK
//Un callback es una funcion que se envia como argumento a otra funcion
const ejecutar = unaFuncion => unaFuncion();
const saludar = () => console.log("Saludos");

ejecutar(saludar);

const ejecutar2 = (unaFuncion, params) => unaFuncion(params);
const saludar2 = nombre => console.log(`Hola ${nombre}`);

ejecutar(saludar, "Antonio");

//
ejecutar(
  (nombre) => console.log(`Adios ${nombre}`),
  "Antonio"
);


//
function escribirYLoguear(texto, callbackParaLoguear) {
  //simulamos que escrbimos un archivo!
  console.log(texto);
  //al finalizar ejecutamos el callback
  callbackParaLoguear('archivo escrito con exito');
}

escribirYLoguear("hola mundo", () => {
  const fecha = new Date().toLocaleDateString();
  console.log(fecha);
})

//EJEMPLO CALLBACK
const operacion = (n,m,funcion) => funcion(n,m);

const suma2 = (a , b) => a + b;
const resta = (a , b) => a - b;
const multiplicacion = (a , b) => a * b;
const division = (a , b) => a / b;
const modulo = (a , b) => a % b;

console.log(operacion(1,2,suma2));
console.log(operacion(1,2,resta));
console.log(operacion(1,2,division));
console.log(operacion(1,2,multiplicacion));
console.log(operacion(1,2,modulo));

console.log(operacion(1,2, (a,b) => a % b));

//Callbacks anidados
//fragmento de codigo en el que una funcion llama a un callback u este a otro callback y asi sucesivamente
//callback of hell, no es recomendable usarlo, es mejor utilizar funciones auxiliares y pasarlas como argumentos

//PROMESAS
//Objeto que encapsula una operacion permitiendo definir acciones a tomar luego de finalizar dicha operacion, segun el resultado de la misma
//a diferencia de los callbacks se utilizan 2 manejadores en vez de solo 1

//Estados de una promesa (unresolved, resolved, rejected)
//El estado inicial es pending, una vez que la operacion se resuelve el estado pasa a:
//resolve (then)
//rejected (catch)

//Ejemplo
new Promise ((resolve, rejected) => {
  if (divisor == 0) {
    rejected('no se puede dividir por 0')
  } else {
    resolve(dividiendo / divisor)
  }
});

dividir(12, 2)
  .then((resultado) => { 
    console.log(`La division es ${resultado}`) 
  })
  .catch((error) => { 
    console.log(`Error ${error}`) 
  });

//Encadenamiento de promesas
//una llamada a promise.then() devuelve otra promesa para que podamos llamar al siguiente .then()
Promise.resolve(20)
  .then(x => x + 1) // 21
  .then( x2 => x2 * 2) // 42
  .then( x3 => {
    if (x3 == 22) throw `Error`
    else return 80;
  })
  .then(x4 => 30) // 30
  .then(x5 => x5 / 2) // 15
  .then(console.log) // imprimir 15
  .catch(console.log)
;

//renderiza la funcion, el throw lo deja pasara en el 1er renderizado y luego vuelve a renderizar la funcion para darle accion al throw
//Funcion bloqueante vs no-bloqueante