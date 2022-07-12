const http = require('http');

const server = http.createServer((peticion, respuesta) => {
  const fechaYHora = new Date(Date.now());
  const hora = fechaYHora.getHours();
  let saludo;
  if (hora >= 6 && hora <= 12) {
    saludo = 'Buenos Dias';
  } else if (hora >= 13 && hora <= 19) {
    saludo = 'Buenas Tardes';
  } else if (hora >= 20 && hora <= 5) {
    saludo = 'Buenas Noche';
  }

  respuesta.end(saludo);
});

const conectedServer = server.listen(3000 , () => {
  console.log(`Servidor HTTP escuchando en el puerto ${conectedServer.address().port}`);
})