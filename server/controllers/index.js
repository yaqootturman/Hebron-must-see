const express = require('express')
const router = express.Router()
const { getPlaces } = require('./places')
const { postLogin } = require('./login')

router.get('/places', getPlaces)
router.post('/login').post(postLogin)

module.exports = router
