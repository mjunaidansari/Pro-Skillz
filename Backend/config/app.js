const express = require('express')
const cors = require('cors')

const middleware = require('../api/utils/middleware')
const config = require('../config/config')

// routers
const testRouter = require('../api/routers/test')


const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/test', testRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app