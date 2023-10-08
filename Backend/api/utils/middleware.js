const { response } = require("../../config/app")

// middleware for logging requiests
const requestLogger = (req, res, next) => {
	console.log('Method: ', req.method)
	console.log('Path: ', req.path)
	console.log('Body: ', req.body)
	console.log('---------')
	next()
}

// middleware for unknown endpoints
const unknownEndpoint = (req, res) => {
	res.status(404).send({
		error: 'Unknown Endpoint'
	})
}



// middleware for error handling
const errorHandler = (error, req, res, next) => {

	console.log(error.message)

	if(error.name === 'ValidationError')
		return response.status(400).json({error: error.message})

}

module.exports = {
	requestLogger,
	unknownEndpoint,
	errorHandler
}