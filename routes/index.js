var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // redirect to doc
  res.redirect('api-docs');
});


module.exports = router;
