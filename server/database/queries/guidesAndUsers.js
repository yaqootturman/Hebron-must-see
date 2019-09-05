const dbConnection = require("../dbConnection")

const getGuidesQuery = () => {
    return dbConnection
        .query(
            "select * from guides inner join users on guides.id = users.user_id;"
        )
        .then(res => res.rows)
}

module.exports = { getGuidesQuery }
