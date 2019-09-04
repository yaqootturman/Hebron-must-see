const express = require('express')
const router = express.Router()
const { getPlaces } = require('./places')

router.get('/places', getPlaces)

module.exports = router
