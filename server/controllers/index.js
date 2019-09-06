const express = require('express')
const router = express.Router()
const { signUp } = require('./signup')
const { getPlaces } = require('./places')
const { getGuides } = require('./guides')

router.post('/signup', signUp)
router.get('/places', getPlaces)
router.get('/guides', getGuides)

module.exports = router
