const User = require('../../models/user.model');


module.exports = async(req, res, next) => {
  try {
    let doc = await User.findOne({_id: req.params.id})
    res.json(doc.transform())
  }
  catch(err) {
    return next(err)
  }
}
