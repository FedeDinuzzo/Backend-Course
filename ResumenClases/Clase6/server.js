//PRIMER SERVIDOR

//Protocolo HTTP
//EL modulo HTTP es nativo de Node.js

const http = require('http');

const server = http.createServer((peticion, respuesta) => {
  respuesta.end('Hola Mundo');
});

//El servidor escucha el puerto elegido
//listen() tambien recibe una funcion callback que sirve para hacer cosas una vez que el servidro se inicio
const conectedServer = server.listen(8080 , () => {
  console.log(`Servidor HTTP escuchando en el puerto ${conectedServer.address().port}`);
})

//para ver el hola mundo en consola
//curl -X GET localhost:8080