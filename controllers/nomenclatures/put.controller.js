const Nomenclature = require('../../models/nomenclature.model');


module.exports = async(req, res, next) => {
  try {
    let nomenclature = await Nomenclature.findOne({_id: req.params.id})

    //update fields
    for (var field in Nomenclature.schema.paths) {
       if ((field !== '_id') && (field !== '__v') && (field !== 'id')) {
          if (req.body[field] !== undefined) {
             nomenclature[field] = req.body[field];
          }
       }
    }

    nomenclature.updated = Date.now()
    await nomenclature.save()
    res.json({msg: "Object " + req.params.id + " updated."})
  }
  catch(err) {
    return next(err)
  }
}
