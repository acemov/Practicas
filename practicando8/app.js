const express = require('express');
const app = express();

const {cursosImportados} = require('./cursos.js')

app.get('/', function (req, res) {
    res.send("mi primer servidor")
})

app.get('/api/cursos', function (req, res) {
    res.send(cursosImportados)
})


app.listen(3000, () => {
    console.log('todo bien')
})
