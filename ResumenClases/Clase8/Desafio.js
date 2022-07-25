const express = require('express');
const { Router } = express;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const personas = [];
const mascotas = [];

const routerPersona = Router();
const routerMascota = Router();

//Rutas para personas
routerPersona.get('/', (req, res) => {
  res.json(personas);
});

routerPersona.post('/', (req, res) => {
  //1-
  //const nombre = req.body.name;
  //const apellido = req.body.apellido;
  //const edad = req.body.edad;
  //personas.push({nombre, apellido, edad})
  //2-
  //const {nombre, apellido, edad} = req.body
  //personas.push({nombre, apellido, edad})
  //3-
  const persona = req.body
  personas.push(persona);
  res.json(personas);
});

//Rutas para mascotas
routerMascota.get('/', (req, res) => {
  res.json(mascotas);
});

routerMascota.post('/', (req, res) => {
  //1-
  //const nombre = req.body.name;
  //const raza = req.body.raza;
  //const edad = req.body.edad;
  //mascotas.push({nombre, raza, edad})
  //2-
  //const {nombre, raza, edad} = req.body
  //mascotas.push({nombre, raza, edad})
  //3-
  const mascota = req.body
  mascotas.push(mascota);
  res.json(mascota);
});

app.use('/personas', routerPersona);
app.use('/mascotas', routerMascota);

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor escucjando en puerto ${PORT}`);
});

server.on("error", error => console.log(`Error: ${error}`));