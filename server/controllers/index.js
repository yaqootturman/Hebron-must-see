const express = require('express')
const router = express.Router()
const { getPlaces } = require('./places')
const { login } = require('./login')
const { isAuthenticated } = require('../middleware/auth')

router.get('/places', isAuthenticated, getPlaces)
router.post('/login', login)

module.exports = router
