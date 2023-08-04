const express = require('express');
const app = express();

app.get('/practicando8/cursos/:', function (req, res) {
    let id = req.params.id
    if (id.lengt === null) {
        return res.send("no hay id")
    } else {
        return res.send("la id es: ", id)
    }
})