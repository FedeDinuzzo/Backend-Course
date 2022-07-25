//Clase Router
//Ruteo en Express
//Se utiliza cuando se desdea crear un nuevo objeto enrutador para manejar solicitudes

const { text } = require('express');
const express = require('express');
const { Router } = express;

const app = express();
const router = Router();

router.get('/recurso', (req, res) => {
  res.send('get ok');
});

router.post('/recurso', (req, res) => {
  res.send('post ok');
});

app.use('/api', router);
app.listen(8080);


//Servidor de Archivos Estaticos Express
express.static

app.use(express.static('public'));

//Utilizar multiples directorios:
app.use(express.static('public'));
app.use(express.static('files'));

//Prefijo virtual, debemos especificar el path de acceso de montaje para el directorio estatico
app.use('/public', express.static('public'));
//Lo que nos devolveria:
// localhost:3000/public/text.txt

//Path absoluto
//Devuelve la ruta completa, es mas seguro
app.use('/public', express.static(__dirname + 'public'));


//MIDDLEWARE funcion intermediaria
//recibe: req, next (se puede repetir), res
next()

//Nivel de aplicacion
//la funcion se ejecuta cada vez que la app recibe una solicitud
const app = express();

app.use(function (req, res, next) {
  console.log('Time', Date.now());
  next();
});

//Nivel de ruta
//Una o multiples funciones en procesos de atencion de rutas
function miMiddleware1(req,res,next) {
  req.miAporte1 = 'dato aportado 1';
  next();
};

function miMiddleware2(req,res,next) {
  req.miAporte2 = 'dato aportado 2';
  next();
};

app.get('/miruta', miMiddleware1, miMiddleware2, (req, res) => {
  let { miAporte1, miAporte2 } = req;
  res.send({ miAporte1, miAporte2});
});

//Nivel de router
//El codigo se ejecuta en cada peticion de la ruta
const app = express();
const router = express.Router();

router.use(function (req, res, next) {
  console.log('Time', Date.now());
  next();
});

//Manejo de errores
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something Broke!');
});

//Incorporado
app.use(express.static('public', options));
//objeto options puede tener las propiedades:
//dotfiles, etag, extensions, index, lastModified, maxAge, redirect, setHeaders

//De terceros
// $npm i cookie-parser
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

//Load the cookie-parsing Middleware
app.use(cookieParser());