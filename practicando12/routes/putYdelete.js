var express = require('express');
var router = express.Router();
let putYdeleteController = require("../controllers/putYdeleteController.js")
/* GET home page. */
router.get('/edit/:idUser', putYdeleteController.edit)
router.put('/edit/', putYdeleteController.put)
router.delete('/delete/:idUser', putYdeleteController.delete)

module.exports = router;