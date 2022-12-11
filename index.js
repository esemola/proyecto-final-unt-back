const express = require('express') //require es una función que permite cargar módulos de Node const app = express() //Se inicializa express en una variable llamada app
const app = express() // se inicializa express en una variable llamada app
require('dotenv').config()
const routes = require('./src/routes/index')
const cors = require('cors');
app.use(cors({origin: ['http://localhost:3000'] }));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
