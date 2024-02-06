const bookedServicesRouter = require('express').Router()

const BookedServices = require('../../mongodb/model/bookedServices')
const Service = require('../../mongodb/model/service')

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

// route to create a booked service object
bookedServicesRouter.post('/', async (req, res) => {

	user = req.user
	const { services, payment, deliveryDates, status } = req.body
	
	if(!user)
		return res
				.status(401)
				.json({
					error: "Invalid User!"
				})

	const serviceObjects = await Service.find({
		_id: {
			$in: services
		}
	}) 

	const bookedServices = []

	// creating an object of each service 
	serviceObjects.forEach(service => {

		const bookedService = {
			user: user.id,
			service: service._id,
			payment,
			deliveryDates: deliveryDates.map(date => new Date(date)),
			serviceCharge: service.serviceCharge,
			status
		}

		bookedServices.push(bookedService)

	});
	
	const savedBookedServices = await BookedServices.insertMany(bookedServices);

	res
		.status(201)
		.json(savedBookedServices)

})

module.exports = bookedServicesRouter