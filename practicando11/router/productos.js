const express = require('express')
const router = express.Router()

const productos = require("../controllers/productosControllers.js")

router.get("/id",productos.nombre)

module.exports= router