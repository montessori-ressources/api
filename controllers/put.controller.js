const Nomenclature = require('../models/nomenclature.model');


module.exports = async(req, res, next) => {
  try {
    let nomenclature = await Nomenclature.findOne({_id: req.params.id})
    doc = req.body
    await nomenclature.save()
    res.json({msg: "Object " + req.params.id + " updated."})
  }
  catch(err) {
    return next(err)
  }
}
