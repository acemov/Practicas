const express = require('express')
const app = express()

const rutaProductos = require('./router/productos.js')

app.use(express.static('./public'))

app.set('view engine', 'ejs')

app.listen(3000,function(){
    console.log('server open');
})

// rutas
app.use("/deRuta",rutaProductos)