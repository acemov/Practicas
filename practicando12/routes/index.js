var express = require('express');
var router = express.Router();
let indexController = require("../controllers/nombresControllers.js")
/* GET home page. */
router.get('/', indexController.user)
router.get('/search', indexController.search)
module.exports = router;
