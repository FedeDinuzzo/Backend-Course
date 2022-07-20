//Protocolo HTTP

//Codigos de estado HTTP
//1xx (informativo)
//2xx (exito)
//3xx (redireccion)
//4xx (error cliente)
//5xx (error servidor)

//API interfaz para comunicar aplicaciones

//REST Transferencia de eStado REpresentacional
//representacion = modelo o estructura
//estado = datos
//transferir = envio de datos con estructura
//lo que mas se utiliza es XML y JSON

//API REST es un tipo de API que no dispone de interfaz grafica
//se utiliza exclusivamente para comunicar sistemas mediante el protocolo HTTP

//Peticiones HTTP comunes:
//POST GET PUT DELETE
//CRUD: CREATE READ UPDATE DELETE

//interfaz uniforme 
//URI uniform resource identifier, identificador unico para facilitar el acceso a la informacion
//Utilizacion de hipermedios, es posible navegar de un recurso REST a muchos otros

const express = require('express');
const app = express();

//Ejemplo de peticion GET con parametros de busqueda
app.get('/', (req, res) => {
  console.log(req.query);
  res.json({mensaje: "hola"});
})

//Ejemplo de peticion GET con identificador
app.get('/usuario/:id', (req, res) => {
  console.log(req.params.id);
  res.json({idUsuario: req.params.id});
})

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
})

server.on("error", error => console.log(`Error en el servidor ${error}`));
