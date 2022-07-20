const express = require('express');
const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));
//interpretar automaticamente mensajes json en formato urlencoded

app.get('/api/sumar/:a/:b', (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  res.json({resultado : parseInt(a) + parseInt(b)});
});

app.post('/api', (req, res) => {
  res.json({mensaje: "ok post"});
});

app.put("/api");
app.delete("/api");

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
})

server.on("error", error => console.log(`Error en el servidor ${error}`));