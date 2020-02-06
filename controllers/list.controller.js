const Nomenclature = require('../models/nomenclature.model');


module.exports = (req, res, next) => {
  Nomenclature.find((err, docs) => {
    if (err) {
      return next(err)
    }
    res.json(docs)
  })
}
