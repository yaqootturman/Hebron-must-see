const express = require('express')
const router = express.Router()
const { signUp } = require('./signup')
const { Guideadd } = require('./addGuide')
const { getPlaces } = require('./places')

router.post('/signup', signUp)
router.post('/signup', Guideadd)
router.get('/places', getPlaces)

module.exports = router
