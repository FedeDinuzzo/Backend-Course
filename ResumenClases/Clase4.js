//SETTIMEOUT
setTimeout(function, milliseonds, param1, param2, ...)

setTimeout(() => {
  console.log("Hola");
}, 3000);
//Se ejecuta de forma asincrona

console.log("hola 2");
//veriamos primero el hola 2


//SETINTERVAL, funciona como el setTimeout pero lo ejecuta una y otra vez cada vez que se cumple el tiempo indicado
setInterval(() => {
  console.log("Me ejecuto varias veces");
}, 500);

//CLEARINTERVAL, lo borra
let i = 0;

const intervalo1 = setInterval(() => {
  console.log("");
  if(i == 5) {
    clearInterval(intervalo1);
  }
  i++;
}, 500);

console.log("Este es un mensaje exterior");
clearInterval(intervalo1);

//EJERCICIO EN CLASE
function mostrarLetras(cadena, time, cb) {
  let i = 0;
  const imprimir = setInterval(() => {
    if (cadena[i] != undefined){
      console.log(cadena[i])
    } else {
      cb();
      clearInterval(imprimir);
    }
    i++;
  }, time);
}

const fin = () => console.log("Termine");

mostrarLetras("Hola", 0, fin);
mostrarLetras("Adios", 250, fin);
mostrarLetras("Buenas", 500, fin);




//NODEJS FS MODULE

//ejercicioFS
const fs = require("fs"); //modulo que trae node.js

//Leer archivos de forma sincrona
const data = fs.readFileSync("./files/archivo1.txt", "utf-8");
console.log(data);

//Sobreescribir un archivo
fs.writeFileSync("./files/archivo3.txt", "BIENVENIDOS\nCODERS")

//Agregar contenidos a un archivo
fs.appendFileSync("./files/archivo3.txt", "Hola");

//Borrar un archivo
fs.unlinkSync("./files/arcihvo3.txt");


//Ejemplo
const fs = require("fs");

const funcionGuardar = () => {
  const date = new Date(Date.now()).toLocaleString();
  fs.writeFileSync("./fyh.txt", date);
}

const funcionLeer = () => {
  //Manejo de errores
  try {
    const data = fs.radFyleSync("./fyh.txt", "utf-8");
    console.log(data);
  } catch (err) {
    throw new Error("El archivo no ha sido encontro");
  }
}

funcionGuardar();
funcionLeer();


//ASYNC Function
//Se diferencian ya que el fs es con Callbacks
const fs = requiere("fs");

fs.readFile("./files/archivo1.txt", "utf-8", (err, data) => {
  if (err) {
    //ocurrio algun error
  } else {
    console.log(data);
  }
})


//Crear una carpeta
fs.mkdir(ruta, error => {
  if (error){

  } else {
    console.log('carpeta creada!');
  }
})

//Leer el contenido de una carpeta
fs.readdir(ruta, (error, nombres) => {
  if (error){

  } else {
    console.log(nombres);
  }
})


//Sobreescribir un archivo con promesa
async function escribir() {
  try {
    await fs.promises.writeFile('/ruta/al/archivo', 'TEXTO DE PRUEBA\n')
    console.log('Guardado!')
  }
  catch (err) {
    //Hubo un error hacer algo
  }
}

escribir();
