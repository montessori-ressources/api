const ROLES = {
  admin: 'ADMIN',
  user: 'USER'
}

const checkIsInRole = (...roles) => (req, res, next) => {
  if (!req.user) {
    return res.send(401, 'Wrong role')
  }

  const hasRole = roles.find(role => req.user.role === role)
  if (!hasRole) {
    return res.send(401, 'Wrong role')
  }

  return next()
}

module.exports = {
  ROLES: ROLES,
  checkIsInRole: checkIsInRole
}
