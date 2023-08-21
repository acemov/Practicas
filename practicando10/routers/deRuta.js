//importamos express y a router le asignamos el el metodo router de express
const express = require("express")
const router = express.Router()

// llamamos al controlador
const deRutaController = require("../controllers/deRutaControllers.js")

router.get("/tamoActivo",deRutaController.detalle)

module.exports= router