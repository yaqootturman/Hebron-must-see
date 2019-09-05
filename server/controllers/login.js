const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { getPassword } = require('../database/queries/getPassword')

const SECRET = process.env.SECRET

const createToken = (email, secret) => {
  return sign({ email }, secret)
}

exports.login = (req, res) => {
  const { email, password } = req.body

  getPassword(email, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      if (result) {
        const hash = result.password
        bcrypt
          .compare(password, hash)
          .then(() => createToken(email, SECRET))
          .then(token => {
            res
              .cookie('token', token, { maxAge: 900000, httpOnly: true })
              .json({ status: 'success', token })
          })
          .catch(err => console.log(err))
      } else {
        res.status(401).json({ message: 'incorrect email or password' })
      }
    }
  })
}
