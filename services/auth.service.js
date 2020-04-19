const ROLES = {
  admin: 'ADMIN',
  user: 'USER'
}

const checkIsInRole = (...roles) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Wrong role'});
  }

  const hasRole = roles.find(role => req.user.role === role)
  if (!hasRole) {
    return res.status(401).json({ message: 'Wrong role'});
  }

  return next()
}

module.exports = {
  ROLES: ROLES,
  checkIsInRole: checkIsInRole
}
