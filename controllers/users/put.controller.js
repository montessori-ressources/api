const User = require('../../models/user.model');


module.exports = async(req, res, next) => {
  try {
    let user = await User.findOne({_id: req.params.id})

    //update fields
    for (var field in User.schema.paths) {
       if ((field !== '_id') && (field !== '__v') && (field !== 'id')) {
          if (req.body[field] !== undefined) {
             user[field] = req.body[field];
          }
       }
    }
    await user.save()
    res.json({msg: "Object " + req.params.id + " updated."})
  }
  catch(err) {
    return next(err)
  }
}
