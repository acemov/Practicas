const express = require("express")
const app = express()

// llamamos a la ruta (solo a una)
const deRuta = require("./routers/deRuta.js")

//para abrir el server
app.listen(3000,function(){
    console.log("server abierto")
})

// haciendo la ruta, y yendo a deRuta
app.use("/deRuta",deRuta)
