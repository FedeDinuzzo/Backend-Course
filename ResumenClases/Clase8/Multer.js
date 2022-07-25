//Multer es un middleware de express
//Actua como un ayudante para la carga de archivos del tipo multipart/form-data
const express = require('express');
const app = express();
//Declaramos multer
const multer = require('multer');

app.use(express.urlencoded({extended: true}));

//Servir el codigo del cliente
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index2.html');
});

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

//Almacenamiento con Multer
//SET STORAGE
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

let upload = multer({ storage: storage });


//Upload a file
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const err = new Error("Please upload a file");
    err.httpStatusCode = 400;
    return next(err);
  }
  res.send(file);
});

//Upload multiple files
app.post('/uploadmultiple', upload.array('myFile', 12), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const err = new Error("Please upload files");
    err.httpStatusCode = 400;
    return next(err);
  }
  res.send(files);
});

server.on('error', error => console.log(`Error: ${error}`));