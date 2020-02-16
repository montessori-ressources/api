var express = require('express');
var router = express.Router();
var v1 = require('./v1')
var nomenclatures = require('./nomenclatures')

// the root is redirecting to the Swagger documentation
router.get('/', function(req, res, next) {
  // redirect to doc
  res.redirect('api-docs')
})

// redirect v1 to the v1 router
router.use('/v1', v1)

// redirect nomenclature to the nomenclature router (to remove)
router.use('/nomenclatures', nomenclatures)

module.exports = router
