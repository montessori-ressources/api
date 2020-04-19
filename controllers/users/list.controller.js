const User = require('../../models/user.model');


module.exports = async(req, res, next) => {
  try {
    let users = await User.find()
    res.set('Content-Range', `items 0-${users.length}/${users.length}`);
    res.json(users.map(user => user.transform()))
  }
  catch(err) {
    return next(err)
  }
}
