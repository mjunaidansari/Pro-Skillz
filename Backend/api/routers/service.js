const serviceRouter = require('express').Router()

const User = require('../../mongodb/model/user')
const ServiceProvider = require('../../mongodb/model/serviceProvider')
const Service = require('../../mongodb/model/service')
const serviceCategory = require('../../mongodb/model/serviceCategory')

serviceRouter.get('/', async (req, res) => {

	const services = await Service
		.find({})
	// .populate({
	// 	path: 'provider'
	// })

	const services64 = services.map(service => {

		if (service.image.data) {
			const service64 = {
				...service.toObject(),
				image: {
					data: service.image.data.toString('base64'),
					contentType: service.image.contentType
				}
			}
			return service64
		} else {
			return service
		}

	})

	res.json(services64)

})

serviceRouter.get('/:id', async (req, res) => {

	const service = await Service
		.findById(req.params.id)
		.populate({
			path: 'provider'
		})
	if (service) {

		const service64 = {
			...service.toObject(),
			image: {
				data: service.image.data.toString('base64'),
				contentType: service.image.contentType
			}
		}
		res.json(service64)
	}
	else
		res.status(400).end()

})

serviceRouter.delete('/:id', async (req, res) => {

	const user = req.user

	if (!user)
		return res
			.status(401)
			.json({
				error: 'Invalid User!'
			})

	const serviceProvider = await ServiceProvider.findOne({ user: user.id })

	if (!serviceProvider)
		return res
			.status(401)
			.json({
				error: 'Service Provdier not found!'
			})

	await Service.findByIdAndDelete(req.params.id)
	res.status(204).end()

})

serviceRouter.post('/', async (req, res) => {

	const user = req.user
	console.log(user)

	const { name, description, serviceCharge, serviceCategoryName } = req.body

	if (!user)
		return res
			.status(401)
			.json({
				error: 'Invalid User!'
			})

	const serviceProvider = await ServiceProvider.findOne({ user: user.id })

	if (!serviceProvider)
		return res
			.status(401)
			.json({
				error: 'Service Provdier not found!'
			})

	const serviceCategoryNow = await serviceCategory.findOne({ name: serviceCategoryName })

	const service = new Service({
		provider: serviceProvider._id,
		name,
		description,
		serviceCharge
	})

	const savedService = await service.save()
	serviceCategoryNow.services = serviceCategoryNow.services.concat(savedService._id)
	await serviceCategoryNow.save()

	res
		.status(201)
		.json(savedService)

})

serviceRouter.put('/:id', async (req, res) => {

	const { name, description, serviceCharge } = req.body
	const user = req.user

	if (!user)
		return res
			.status(401)
			.json({
				error: 'Invalid User!'
			})

	const serviceProvider = await ServiceProvider.findOne({ user: user.id })

	if (!serviceProvider)
		return res
			.status(401)
			.json({
				error: 'Service Provdier not found!'
			})

	const service = await Service.findById(req.params.id)

	if (!service)
		return res
			.status(401)
			.json({
				error: 'Service not found!'
			})

	if (name) service.name = name
	if (description) service.description = description
	if (serviceCharge) service.serviceCharge = serviceCharge

	console.log(name, service)

	const updatedService = await service.save()
	res.json(updatedService)

})

serviceRouter.put('/image/:id', async (req, res) => {

	const { imageBase64, contentType } = req.body
	const user = req.user

	if (!user)
		return res
			.status(401)
			.json({
				error: 'Invalid User!'
			})

	const serviceProvider = await ServiceProvider.findOne({ user: user.id })

	if (!serviceProvider)
		return res
			.status(401)
			.json({
				error: 'Service Provdier not found!'
			})

	const service = await Service.findById(req.params.id)

	if (!service)
		return res
			.status(401)
			.json({
				error: 'Service not found!'
			})

	const imageBuffer = Buffer.from(imageBase64, 'base64')

	service.image = {
		data: imageBuffer,
		contentType
	}

	const updatedService = await service.save()
	res.json(updatedService)

})

module.exports = serviceRouter