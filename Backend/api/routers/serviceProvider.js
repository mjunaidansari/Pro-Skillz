const bcrypt = require('bcrypt')
const serviceProviderRouter = require('express').Router()

const ServiceProvider = require('../../mongodb/model/serviceProvider')
const User = require('../../mongodb/model/user')
const Location = require('../../mongodb/model/location')

serviceProviderRouter.get('/', async (req, res) => {

	const serviceProviders = await ServiceProvider
								.find({})
								// .populate('user', {
								// 	firstame: 1,
								// 	lastname: 1,
								// 	email: 1,
								// 	phone: 1,
								// 	address: 1
								// })

	const serviceProviders64 = serviceProviders.map(serviceProvider => {

		if(serviceProvider.profilePicture.data) {
			const serviceProvider64 = {
				...serviceProvider.toObject(),
				profilePicture: {
					data: serviceProvider.profilePicture.data.toString('base64'),
					contentType: serviceProvider.profilePicture.contentType
				}
			}
			return serviceProvider64
		} else {
			return serviceProvider
		}

	})

	res.json(serviceProviders64)

})

serviceProviderRouter.get('/:id', async (req, res) => {

	const serviceProvider = await ServiceProvider.findById(req.params.id)

	if (serviceProvider){
		if(serviceProvider.profilePicture){
			const serviceProvider64 = {
				...serviceProvider.toObject(),
				profilePicture: {
					data: serviceProvider.profilePicture.data.toString('base64'),
					contentType: serviceProvider.profilePicture.contentType
				}
			}
			res.json(serviceProvider64)
		} else {
			res.json(serviceProvider)
		}
	}
	else 
		res.status(400).end()

})

serviceProviderRouter.post('/', async (req, res) => {

	const { firstname, lastname, phone, email, password, categories, coordinates } = req.body

	// const userExists = await User.findOne({
	// 								phone, 
	// 								role: {
	// 									$in: ['serviceProvider']
	// 								}
	// 							})

	// if (userExists)
	// 	return res
	// 		.status(409)
	// 		.json({
	// 			error: "A user with this phone number already exists"
	// 		})

	const saltRounds = 10
	const passwordHash = await bcrypt.hash(password, saltRounds)
	
	const user = new User({
		firstname,
		lastname,
		phone,
		email,
		passwordHash,
		role: "serviceProvider"
	})
	
	const savedUser = await user.save()

	const serviceProvider = new ServiceProvider({
		user: savedUser._id,
		categories,
		allowed: false,
	})

	const savedServiceProvider = await serviceProvider.save()

	const location = new Location({
		user: savedUser._id,
		location: {
			type: 'Point',
			coordinates,
		},
		locationName: savedUser.firstname
	})

	const savedLocation = await location.save()

	res.status(201).json({
		savedUser, savedServiceProvider, savedLocation
	})

})

serviceProviderRouter.put('/image', async (req, res) => {

	const user = req.user
	const { imageBase64, contentType } = req.body

	if(!user)
		return res
			.status(404)
			.json({
				error: 'User not found!'
			})

	const serviceProvider = await ServiceProvider.findOne({user: user.id})

	if(!serviceProvider)
		return res
				.status(404)
				.json({
					error: 'User not found!'
				})

	const imageBuffer = Buffer.from(imageBase64, 'base64')

	serviceProvider.profilePicture = {
		data: imageBuffer,
		contentType
	}
	
	const updatedServiceProvider = await serviceProvider.save()
	res.json(updatedServiceProvider)

})

serviceProviderRouter.get('/image', async (req, res) => {

	const user = req.user
	if(!user)
		return res
			.status(404)
			.json({
				error: 'User not found!'
			})

	const serviceProvider = await ServiceProvider.findOne({user: user.id})

	if(!serviceProvider)
		return res
				.status(404)
				.json({
					error: 'User not found!'
				})

	const imageData = {
		data: serviceProvider.profilePicture.data.toString('base64'),
		contentType: serviceProvider.profilePicture.contentType
	}
	
	res.json(imageData)

})

module.exports = serviceProviderRouter