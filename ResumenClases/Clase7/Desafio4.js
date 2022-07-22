const express = require('express');
const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

const frase = "Frase inicial";

app.get('/api/frase/', (req, res) => {
  res.json({frase: frase});
});

//no se
app.get('/api/frase/:pos', (req, res) => {
  const buscada = req.params.buscada;
  const fraseDividida = frase.split(" ");
  //split separar las plabras en cada espacio
  if (isNaN(buscada)) {
    res.json({error: "Error el parametro no es un numero"});
  } 
  if (buscada < 1 || buscada > fraseDividida.length) {
    res.json({error: "Error el numero se encuentra fuera de rango"});
  }
  const frase = fraseDividida[ parseInt(buscada) - 1 ];
  res.json({buscada: buscada});
});

app.post('/api/palabras/', (req, res) => {
  const agregada = req.body.agregada;
  frase = `${frase} ${agregada}`;
  const pos = frase.split(" ").length;
  res.json({
    agregada: agregada,
    pos: pos
  })
});

app.put("/api/palabras/:pos", (req, res) => {
  const pos = parseInt(req.params.pos);
  const palabra = req.body.palabra;
  let fraseDividida = frase.split(" ");
  const anterior = fraseDividida[pos];

  fraseDividida[pos] = palabra;
  fraseDividida.join(" "); //Actualizacion de la palabra

  const actualizada = palabra;
  res.json({
    actualizada: actualizada,
    anterior: anterior
  })
})

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
});

server.on("error", error => console.log(`Error en el servidor ${error}`));