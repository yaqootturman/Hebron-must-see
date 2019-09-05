const dbConnection = require('../db_connection.js')

const getPassword = (email, cb) => {
  const query = 'SELECT password FROM users where email=$1'
  dbConnection.query(query, [email], (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res.rows[0])
    }
  })
}

module.exports = { getPassword }
