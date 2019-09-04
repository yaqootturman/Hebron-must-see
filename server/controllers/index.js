const express = require('express')
const router = express.Router()
const { signUp } = require('./signup')
const { getPlaces } = require('./places')

router.post('/signup', signUp)

router.get('/places', getPlaces)

module.exports = router
