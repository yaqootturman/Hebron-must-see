const { getArabicList } = require('../database/queries/getArabicWords')

exports.getArabicWords = (req, res, next) => {
  getArabicList()
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      next(err)
    })
}
