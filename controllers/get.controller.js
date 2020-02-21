const Nomenclature = require('../models/nomenclature.model');


module.exports = async(req, res, next) => {
  try {
    let doc = await Nomenclature.findOne({_id: req.params.id})
    res.json(doc)
  }
  catch(err) {
    return next(err)
  }
}
