const dbConnection = require('../db_connection')

const getPlacesQuery = () => {
	return dbConnection.query('select * from places;').then((res) => res.rows)
}

module.exports = { getPlacesQuery }
