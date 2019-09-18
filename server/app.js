const router = require('./controllers')
const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const { error500 } = require('./middleware/error500')

const app = express()
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/api', router)
app.use(error500)

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  })
}

module.exports = app
