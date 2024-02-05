const bookedServicesRouter = require('express').Router()

const BookedServices = require('../../mongodb/model/bookedServices')

// route to get all the current booked services
bookedServicesRouter.get('/', async (req, res) => {

	const bookedServices = await BookedServices
											.find({})
	res.json(bookedServices)

}) 

// route to get all the booked services of a specific user through token
bookedServicesRouter.get('/user', async (req, res) => {

	user = req.user

	if(!user)
		return res
				.status(401)
				.json({
					error: "Invalid User!"
				})

	const bookedServices = await BookedServices
											.find({user: user.id})
	res.status(200).json(bookedServices)

})

// route to get all the booked services of a specific user through user id
bookedServicesRouter.get('/user/:id', async (req, res) => {

	const bookedServices = await BookedServices
											.find({user: req.params.id})
	res.status(200).json(bookedServices)

})

// route to get specific booked service using booked service id
bookedServicesRouter.get('/service/:id', async (req, res) => {

	const bookedService = await BookedServices.findById(req.params.id)

	if (bookedService) 
		res.json(bookedService)
	else
		res.status(404).end()

})

