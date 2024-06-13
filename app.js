const express = require('express')
const app = express()
const router = require('./Router/router')

app.use('/', router)

module.exports = app