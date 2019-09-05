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
  email,
  hash
) => {
  return dbConnection
    .query(
      `with newrecord(id) as (INSERT INTO users 
        (name,email,password) values ($8,$9,$10) returning user_id)
        INSERT INTO guides (type , photo , description , availability , phone , 
          age , reviews , user_id) values
           ($1,$2,$3,$4,$5,$6,$7,(select id from newrecord))`,
      [
        type,
        photo,
        description,
        availability,
        phone,
        age,
        reviews,
        name,
        email,
        hash
      ]
    )
    .then(res => res.rows)
}
module.exports = addGuide
