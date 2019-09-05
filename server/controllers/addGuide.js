const addGuide = require('../database/queries/addGuide')
exports.Guideadd = (request, response) => {
  const {
    type,
    photo,
    description,
    availability,
    phone,
    age,
    reviews,
    name
  } = request.body

  addGuide(
    type,
    photo,
    description,
    availability,
    phone,
    age,
    reviews,
    name,
    (err, res) => {
      if (err) {
        console.log(err)
      } else {
        response.redirect('/')
      }
    }
  )
}
