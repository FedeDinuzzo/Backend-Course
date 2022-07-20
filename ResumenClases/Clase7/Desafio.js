const express = require('express');
const app = express();

const frase = "Hola mundo como estan";

app.get('/api/frase/', (req, res) => {
  res.json({frase: frase});
});

app.get('/api/letras/:num', (req, res) => {
  const num = req.params.num;
  if (isNaN(num)) {
    //isNaN nos da vedrdadero si es un numero
    res.json({error: "Error el parametro no es un numero"});
    return //return termina la ejecucion del callback
  } 
  if (num < 1 || num > frase.length) {
    res.json({error: "Error el numero se encuentra fuera de rango"});
    return
  }
  const letra = frase[ parseInt(num) - 1 ];
  res.json({letra: letra});
});

app.get('/api/palabras/:num', (req, res) => {
  const num = req.params.num;
  const fraseDividida = frase.split(" ");
  //split separar las plabras en cada espacio
  if (isNaN(num)) {
    res.json({error: "Error el parametro no es un numero"});
  } 
  if (num < 1 || num > fraseDividida.length) {
    res.json({error: "Error el numero se encuentra fuera de rango"});
  }
  const palabra = fraseDividida[ parseInt(num) - 1 ];
  res.json({palabra: palabra});
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
})

server.on("error", error => console.log(`Error en el servidor ${error}`));
