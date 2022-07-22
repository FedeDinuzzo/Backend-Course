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

//no se
app.get('/api/sumar?num1=a&num2=b', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  res.json({resultado : parseInt(a) + parseInt(b)});
});

//no se
app.get('/api/operacion/a+b', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  res.json({resultado : parseInt(a) + parseInt(b)});
});


app.post('/api', (req, res) => {
  //Objeto body de la peticicion
  //req.doby;
  res.json({mensaje: "ok post"});
});

app.put('/api/:id', (req, res) => {
  //const id = req.params.id

  //Objeto body de la peticicion
  //req.doby;

  //modificar el usuario con el id
  res.json({mensaje: "ok put"});
});

app.delete('/api/:id', (req, res) => {
  //const id = req.params.id
  //borrar el usuario con el id
  res.json({mensaje: "ok delete"})
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
})

server.on("error", error => console.log(`Error en el servidor ${error}`));