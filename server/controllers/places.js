const { getPlacesQuery } = require('../database/queries/places')

exports.getPlaces = (req, res, next) => {
  getPlacesQuery()
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      next(err)
    })
}
