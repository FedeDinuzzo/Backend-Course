//Clase Router
//Ruteo en Express
//Se utiliza cuando se desdea crear un nuevo objeto enrutador para manejar solicitudes

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