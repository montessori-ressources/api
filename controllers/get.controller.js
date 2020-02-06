const Nomenclature = require('../models/nomenclature.model');


module.exports = (req, res, next) => {
  Nomenclature.findOne({_id: req.params.id}, (err, docs) => {
    if (err) {
      return next(err)
    }
    res.json(docs)
  })
}
