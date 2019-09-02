const router = require('./router')
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', router)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})
module.exports = app
