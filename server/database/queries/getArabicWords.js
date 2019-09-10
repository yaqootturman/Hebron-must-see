const dbConnention = require('../dbConnection')

const getArabicList = () => {
  return dbConnention
    .query('SELECT * FROM arabic_words;')
    .then(res => res.rows)
    .catch(err => {
      console.log(err)
    })
}
module.exports = { getArabicList }
