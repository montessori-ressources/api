var express = require('express');
var router = express.Router();
var nomenclatures = require('./nomenclatures')

// redirect nomenclatures path to the nomenclatures router
router.use('/nomenclatures', nomenclatures)

module.exports = router
