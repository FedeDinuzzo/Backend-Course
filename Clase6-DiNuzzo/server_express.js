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
                }
                h1 {
                    color: #3366dd;
                }
            </style>
            </head>
            <body>
            <h1>Bienvenido al Server Express!</h1>
            <br>
            <p>Este servidor esta pensado para consumirse como API en los siguientes endpoints:</p>
            <ul>
                <li><a href="/productos">/productos</a></li>
                <li><a href="/productoRandom">/productoRandom</a></li>
            </ul>
            <br>
            <p>*NOTA: Este sitio no esta pensado para ser navegado por una persona.</p>
            <p>${req.get('User-Agent')}</p>
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