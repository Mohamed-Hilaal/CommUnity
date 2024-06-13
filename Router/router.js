const express = require('express')
const router = express.Router()
const authRouter = require('./authentications/auth');

router.use('/auth', authRouter)

module.exports = router
