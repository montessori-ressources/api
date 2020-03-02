var express = require('express');
var router = express.Router();
var nomenclatures = require('./nomenclatures')
var auth = require('./auth')

// redirect nomenclatures path to the nomenclatures router
router.use('/nomenclatures', nomenclatures)

router.use('/auth', auth)

module.exports = router
