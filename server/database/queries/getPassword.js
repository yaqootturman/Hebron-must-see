const databaseConnection = require('../db_connection.js')
const getPassword = (email, cb) => {
  const query = 'SELECT password ,user_id FROM users where email=$1'
  databaseConnection.query(query, [email], (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res.rows[0])
    }
  })
}
module.exports = getPassword
