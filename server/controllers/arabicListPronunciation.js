const forvoApi = require('forvo')

const getArabicListPronunciation = (req, res, next) => {
  const forvo = forvoApi.default({ key: process.env.FORVO_KEY })

  forvo.pronouncedWordsSearch({ search: encodeURI(req.params.sentence), language: 'ar' })
    .then(result =>
      res.json(result.items)
    )
    .catch(err => {
      next(err)
    })
}

module.exports = { getArabicListPronunciation }
