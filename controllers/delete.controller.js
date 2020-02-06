const Nomenclature = require('../models/nomenclature.model');


module.exports = (req, res, next) => {
  Nomenclature.findOneAndRemove({_id: req.params.id}, (err, docs) => {
    if (err) {
      return next(err)
    }
    res.json({msg: "Object " + req.params.id + " deleted."})
  })
}
