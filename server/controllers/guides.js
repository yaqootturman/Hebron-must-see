const { getGuidesQuery } = require("../database/queries/guidesAndUsers")

exports.getGuides = (req, res, next) => {
    getGuidesQuery()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            next(err)
        })
}
