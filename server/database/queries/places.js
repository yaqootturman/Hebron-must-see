const dbConnection = require("../dbConnection")

const getPlacesQuery = () => {
    return dbConnection.query("select * from places;").then(res => res.rows)
}

module.exports = { getPlacesQuery }
