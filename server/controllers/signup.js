const bcrypt = require('bcrypt')
const addUser = require('../database/queries/addUser')
const addGuide = require('../database/queries/addGuide')

exports.signUp = (req, res, next) => {
  const { name, email, password, userType } = req.body

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log(err)
    }

    if (userType === 'user') {
      addUser(name, email, hash)
        .then(result => {
          res.json(result)
        })
        .catch(err => {
          next(err)
        })
    } else {
      const { type, photo, description, availability, phone, age } = req.body

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
          res.json(result)
        })
        .catch(err => {
          next(err)
        })
    }
  })
}
