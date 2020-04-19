var express = require('express');
var router = express.Router();
var nomenclatures = require('./nomenclatures')
var users = require('./users')
var auth = require('./auth')

// redirect nomenclatures path to the nomenclatures router
router.use('/nomenclatures', nomenclatures)

// redirect users path to the users router
router.use('/users', users)

router.use('/auth', auth)

module.exports = router
