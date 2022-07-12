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


//interfaz uniforme
//utilizacion de hipermedios
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({mensaje: "hola"});
})

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
})

server.on("error", error => console.log(`Error en el servidor ${error}`));