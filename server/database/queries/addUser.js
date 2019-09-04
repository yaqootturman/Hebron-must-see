const dbConnection = require('../db_connection')
const addUser = (name, email, password, cb) => {
  dbConnection.query(
    'INSERT INTO users (name,email,password) values ($1,$2,$3)',
    [name, email, password],
    (err, res) => {
      if (err) {
        console.log(err)
      } else cb(null, { msg: 'success' })
    }
  )
}
module.exports = addUser
