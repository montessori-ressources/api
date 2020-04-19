var express = require('express');
var router = express.Router();
var v11 = require('./v1.1')

// the root is redirecting to the Swagger documentation
router.get('/', function(req, res, next) {
  // redirect to doc
  res.redirect('api-docs')
})

// redirect v1 to the v1 router
router.use('/v1.1', v11)

module.exports = router
