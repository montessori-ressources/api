const Nomenclature = require('../../models/nomenclature.model');


module.exports = async (req, res, next) => {
  try {
    let ret = await Nomenclature.findOneAndRemove({_id: req.params.id})
    res.json({msg: "Object " + req.params.id + " deleted."})
  }
  catch(err) {
    return next(err)
  }
}
