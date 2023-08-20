const express = require('express');
const app = express();

const cursosImportados = require('./cursos.js')

// PARA HACER CORRRER EL SERVIDOR
app.listen(3000, () => {
    console.log('todo bien')
})

// PARA HACER LAS RUTAS
app.get('/', function (req, res) {
    res.send("mi primer servidor")
})

app.get('/cursos', function (req, res) {
    res.send(cursosImportados)
})


app.get("/probando",function(req,res){
    res.send("probando")
})
