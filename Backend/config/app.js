const express = require('express')
const cors = require('cors')

const middleware = require('../api/utils/middleware') 

// routers
const testRouter = require('../api/routers/test')
const otpRouter = require('../api/routers/otp')

require('express-async-errors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/test', testRouter)
app.use('/api/otp', otpRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app