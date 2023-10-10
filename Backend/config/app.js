const express = require('express')
const cors = require('cors')

const middleware = require('../api/utils/middleware') 

// routers
const testRouter = require('../api/routers/test')
const otpRouter = require('../api/routers/otp')
const loginRouter = require('../api/routers/login')

require('express-async-errors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)
app.use(middleware.userExtractor)

app.use('/api/test', testRouter)
app.use('/api/otp', otpRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app