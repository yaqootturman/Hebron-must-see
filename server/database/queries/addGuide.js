const dbConnection = require('../dbConnection')
const addGuide = (
  type,
  photo,
  description,
  availability,
  phone,
  age,
  reviews,
  name,

  cb
) => {
  dbConnection.query(
    'INSERT INTO guides (type , photo , description , availability , phone , age , reviews , user_id) values ($1,$2,$3,$4,$5,$6,$7,(select user_id from users where name=$8))',
    [type, photo, description, availability, phone, age, reviews, name],
    (err, res) => {
      if (err) {
        console.log(err)
      } else cb(null, { msg: 'success' })
    }
  )
}
module.exports = addGuide
