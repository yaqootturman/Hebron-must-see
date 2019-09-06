const bcrypt = require('bcrypt')
const addUser = require('../database/queries/addUser')
const addGuide = require('../database/queries/addGuide')

exports.signUp = (request, response, next) => {
  const { email, name, password, userType } = request.body

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log(err)
    }

    if (userType === 'user') {
      addUser(email, name, hash)
        .then(result => {
          response.json(result)
        })
        .catch(err => {
          next(err)
        })
    } else {
      const {
        type,
        photo,
        description,
        availability,
        phone,
        age
      } = request.body

      addGuide(
        type,
        photo,
        description,
        availability,
        phone,
        age,
        name,
        email,
        hash
      )
        .then(result => {
          response.json(result)
        })
        .catch(err => {
          next(err)
        })
    }
  })
}
