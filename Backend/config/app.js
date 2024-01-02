const express = require('express')
const cors = require('cors')

const bodyParser = require('body-parser')

const middleware = require('../api/utils/middleware') 

// routers
const testRouter = require('../api/routers/test')
const otpRouter = require('../api/routers/otp')
const loginRouter = require('../api/routers/login')
const serviceProviderRouter = require('../api/routers/serviceProvider')
const userRouter = require('../api/routers/user')
const serviceRouter = require('../api/routers/service')
const serviceCategoryRouter = require('../api/routers/serviceCatergory')
const cartRouter = require('../api/routers/cart')
const reviewRouter = require('../api/routers/review')
const locationRouter = require('../api/routers/location')

const sampleImageRouter = require('../api/routers/sampleImage')

require('express-async-errors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)
app.use(middleware.userExtractor)

app.use('/api/test', testRouter)
app.use('/api/otp', otpRouter)
app.use('/api/login', loginRouter)
app.use('/api/user', userRouter)
app.use('/api/serviceProvider', serviceProviderRouter)
app.use('/api/service', serviceRouter)
app.use('/api/serviceCategory', serviceCategoryRouter)
app.use('/api/carts', cartRouter)
app.use('/api/review', reviewRouter)
app.use('/api/location', locationRouter)

app.use('/api/image', sampleImageRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app