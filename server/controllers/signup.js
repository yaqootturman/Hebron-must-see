const bcrypt = require('bcrypt')
const addUser = require('../database/queries/addUser')
const addGuide = require('../database/queries/addGuide')

exports.signUp = (request, response) => {
  const { email, name, password, userType } = request.body
  console.log(email, name, password, userType, 'gggggg')

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log(err)
    }
    if (userType === 'user') {
      console.log('user')
      addUser(email, name, hash, (err, res) => {
        if (err) {
          console.log(err)
        } else {
          response.redirect('/')
        }
      })
    } else {
      const {
        type,
        photo,
        description,
        availability,
        phone,
        age,
        reviews
      } = request.body

      console.log(reviews, 'guide')
      addGuide(
        type,
        photo,
        description,
        availability,
        phone,
        age,
        reviews,
        name,
        email,
        hash,
        (err, res) => {
          if (err) {
            console.log(err)
          } else {
            response.redirect('/')
          }
        }
      )
    }
  })
}
