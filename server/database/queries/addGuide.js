const dbConnection = require('../dbConnection')
const addGuide = (
  type,
  photo,
  description,
  availability,
  phone,
  age,
  review,
  cb
) => {
  dbConnection.query(
    'INSERT INTO guides(type,photo,description,availability,phone,age,review INNER JOIN users ON  users.User_id = Guides.User_id) values ($1,$2,$3)',
    [type, photo, description, availability, phone, age, review],
    (err, res) => {
      if (err) {
        console.log(err)
      } else cb(null, { msg: 'success' })
    }
  )
}
module.exports = addGuide
