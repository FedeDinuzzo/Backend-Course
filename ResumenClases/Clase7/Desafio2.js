const express = require('express');
const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));
//interpretar automaticamente mensajes json en formato urlencoded

app.post('/api/usuario', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
})

server.on("error", error => console.log(`Error en el servidor ${error}`));