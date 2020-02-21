const Nomenclature = require('../models/nomenclature.model');


module.exports = async(req, res, next) => {
  try {
    let docs = await Nomenclature.find()
    res.json(docs)
  }
  catch(err) {
    return next(err)
  }
}
