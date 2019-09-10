const express = require('express')
const router = express.Router()
const { getPlaces } = require('./places')
const { login } = require('./login')
const { getGuides } = require('./guides')
const { isAuthenticated } = require('../middleware/auth')

router.get('/places', getPlaces, isAuthenticated)
router.post('/login', login)
router.get('/guides', getGuides)

module.exports = router
