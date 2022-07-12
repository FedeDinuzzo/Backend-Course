//Framework minimalista
//API rest
//Modulo Express
const express = require('express');

const app = express();

//Configuracion peticion GET
app.get('/', (req, res) => {
  res.send({ mensaje: 'Bienvenidos a la ruta raiz' });
})

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
})

//ejemplo de conexion con evento de error
server.on("error", error => console.log(`Error en el servidor ${error}`));

