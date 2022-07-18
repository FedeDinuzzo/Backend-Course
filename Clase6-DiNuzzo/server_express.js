require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const Container = require('./Container')
const container = new Container('productos.json')

const server = app.listen(port, ()=>{
  console.log(`Server running on port: ${server.address().port}`)
})

app.on('error', (err) => {
  console.log(err)
})

app.get('/', (req, res) => {
  res.header('Content-Type', 'text/html; charset=UTF8')
    res.send(`
    <html>
    <head>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
        color: white;
        height: 100vh;
        width: 100vw;
        background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
      }
      .container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        justify-content: center;
        padding: $mb-3;
      }
      h1 {
        text-align: center;
        color: #ccc;
        font-size: 60px;
      }
      a {
      font-size: 26px;
        color: #999;
        text-decoration: none;
      }   
      p {
        font-size: 22px;
      }
      h3 {
        color: #abf;
      }
    </style>
    </head>
    <body>
      <div class="container">
        <h1 >Welcom to Express server</h1>
        <p>This server was created to be consumed as an API on the following endpoints:</p>
        <ul>
          <li><a href="/productos">/productos</a></li>
          <li><a href="/productoRandom">/productoRandom</a></li>
        </ul>
        <h3><b>NOTE:</b> This site is not created to be navigated by a person.</h3>
        <h4>${req.get('User-Agent')}</h4>
      </div>
    </body>
    </html
      `)
})

app.get('/productos', (req, res) => {
  res.header('Content-Type', 'application/json; charset=UTF8')
  container.getAll()
    .then((products)=>res.send(products))
})

app.get('/productoRandom', (req, res) => {
  res.header('Content-Type', 'application/json; charset=UTF8')
  container.getRandom()
    .then((product)=>res.send(product))
})

app.get('*', (req, res) => {
  res.sendStatus(404)
  throw new Error('Not found error')
})