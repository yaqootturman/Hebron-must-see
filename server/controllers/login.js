const bcrypt = require('bcrypt')
const { sign, verify } = require('jsonwebtoken')
const cookie = require('cookie')
const alert = require('alert-node')
const getPassword = require('../database/queries/getPassword')

const SECRET = process.env.SECRET

exports.postLogin = (req, res) => {
  const { email, password } = req.body
  getPassword(email, (err, result) => {
    console.log('the result is ', result)

    if (err) {
      console.log(err)
    } else {
      console.log('result', result)
      console.log('password', password)
      bcrypt.compare(password, result.password, (err, isMatch) => {
        if (err) {
          console.log(err)
        } else {
          if (!isMatch) {
            alert('your password uncorrect')
          } else {
            const token = sign(
              {
                Email: email
              },
              SECRET
            )
            res.cookie('token', token, { httpOnly: true })
            res.json({ login: true })
          }
        }
      })
    }
  })
}
