const dbConnection = require('../dbConnection')

const getPlacesQuery = () => {
  return dbConnection
    .query('select * from places;')
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = { getPlacesQuery }
