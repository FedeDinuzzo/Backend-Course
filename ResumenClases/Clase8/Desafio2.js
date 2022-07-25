const express = require('express');
const { Router } = express;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//ingresara al directorio public y mostrara en la URL lo que contenga el archivo pedido
app.use(express.static('public'));
//ejemplo: (obviar la ruta public, ya que express busca los archivo relativos que hay en el directorio)
//http://localhost:3000/text.txt

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

server.on("error", error => console.log(`Error: ${error}`));