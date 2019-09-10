const express = require('express')
const router = express.Router()
const { getPlaces } = require('./places')
const { login } = require('./login')
const { getGuides } = require('./guides')
const { signUp } = require('./signup')
const { isAuthenticated } = require('../middleware/auth')

router.get('/places', isAuthenticated, getPlaces)
router.post('/login', login)
router.post('/signup', signUp)
router.get('/guides', getGuides)

module.exports = router
