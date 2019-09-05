const express = require('express')
const router = express.Router()
const { getPlaces } = require('./places')
const { login } = require('./login')

router.get('/places', getPlaces)
router.post('/login', login)

module.exports = router
