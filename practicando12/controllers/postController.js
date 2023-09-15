const fs = require('fs')
let crearControllers = {
    vista: function (req, res) {
        res.render("post.ejs")
    },
    creater: function (req, res) {
        let datos = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            email: req.body.email
        }
        // para todos los datos sin la lista ---> res.send(req.body)
        // para un dato en espesifico ---> res.send(req.body.email)
        // para ver los datos ---> res.send(datos)

        //una ves podamos guardar los datos, tal ves queramos llevar a la lista donde los datos ya estan agregados

        let archivoUsuarios = fs.readFileSync('./usuarios.json', { encoding: 'utf-8' })
        let usuarios;
        if (archivoUsuarios == '') {
            usuarios = []
        } else {
            usuarios = JSON.parse(archivoUsuarios)
        }
        usuarios.push(datos)

        usuariosJSON = JSON.stringify(usuarios)
        fs.writeFileSync('usuarios.json', usuariosJSON)

        res.redirect('/')
    }
}
module.exports = crearControllers