const Nomenclature = require('../../models/nomenclature.model');


module.exports = async(req, res, next) => {
  try {
    let docs = await Nomenclature.find()
    res.set('Content-Range', `items 0-${docs.length}/${docs.length}`);
    res.json(docs.map(doc => doc.transform()))
  }
  catch(err) {
    return next(err)
  }
}
