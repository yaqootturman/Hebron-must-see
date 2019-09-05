const { verify } = require('jsonwebtoken')
const { SECRET } = process.env

exports.isAuthenticated = (req, res, next) => {
  if (req.cookies && req.cookies.token) {
    const { token } = req.cookies
    return verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: 'error',
          message: 'unauthorised'
        })
      }
      return next()
    })
  } else {
    return res.status(401).json({ status: 'fail', message: 'unauthorised' })
  }
}
