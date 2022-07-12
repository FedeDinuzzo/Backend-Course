const express = require('express');
const app = express();
let visitas = 0;

app.get('/', (req, res) => {
  res.send("<h1 style='color: blue'>Bienvenidos a la ruta raiz</h1>");
})

app.get('/visitas', (req, res) => {
  visitas++;
  res.send(`La cantidad de visitas es ${visitas}`);
})

app.get('/fyh', (req, res) => {
  const fechaYHora = new Date(Date.now()).toLocaleString();
  res.send(`Fecha y Hora actual: ${fechaYHora}`);
})


const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
})

server.on("error", error => console.log(`Error en el servidor ${error}`));

//https://glitch.com/edit/#!/hello-express?path=README.md%3A1%3A0