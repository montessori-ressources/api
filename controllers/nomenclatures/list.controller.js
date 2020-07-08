const Nomenclature = require('../../models/nomenclature.model');


module.exports = async(req, res, next) => {
  try {
    let docs = await Nomenclature.find()
    if(req.query.range !== undefined) {
      let range = JSON.parse(req.query.range);
      res.set('Content-Range', `items ${range[0]}-${range[1]}/${docs.length}`);
      docs = docs.slice(range[0], range[1])
    }
    res.json(docs.map(doc => doc.transform()))
  }
  catch(err) {
    return next(err)
  }
}
