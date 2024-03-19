const serviceCategoryRouter = require('express').Router()

const { json } = require('body-parser');
const ServiceCategory = require('../../mongodb/model/serviceCategory')

serviceCategoryRouter.get('/', async (req, res) => {

	const action = req.query.action;

	console.log("This is action : ", action);

	if (req.query.action === 'name') {
		const serviceCategories = await ServiceCategory.find({}, { "name": 1 })

		res.status(200).json(serviceCategories)
	}
	else {
		const serviceCategories = await ServiceCategory
			.find({})
		// .populate('services')

		// converting images data to base64 for objects having images
		const serviceCategories64 = serviceCategories.map(serviceCategory => {

			if (serviceCategory.image.data) {
				const serviceCategory64 = {
					...serviceCategory.toObject(),
					image: {
						data: serviceCategory.image.data.toString('base64'),
						contentType: serviceCategory.image.contentType
					},
					icon: {
						data: serviceCategory.icon.data.toString('base64'),
						contentType: serviceCategory.icon.contentType
					},
				}
				return serviceCategory64
			} else {
				return serviceCategory
			}

		})
		res.json(serviceCategories64)
	}
})

serviceCategoryRouter.get('/:id', async (req, res) => {

	const serviceCategory = await ServiceCategory
		.findById(req.params.id)
		.populate('services')

	if (serviceCategory) {

		const serviceCategory64 = {
			...serviceCategory.toObject(),
			image: {
				data: serviceCategory.image.data.toString('base64'),
				contentType: serviceCategory.image.contentType
			},
			icon: {
				data: serviceCategory.icon.data.toString('base64'),
				contentType: serviceCategory.icon.contentType
			},

		}
		res.json(serviceCategory64)

	}
	else
		res.status(400).end()

})

serviceCategoryRouter.delete('/:id', async (req, res) => {

	await ServiceCategory.findByIdAndDelete(req.params.id)
	res.status(204).end()

})

serviceCategoryRouter.post('/', async (req, res) => {

	const { name } = req.body

	const serviceCategory = new ServiceCategory({
		name,
		services: []
	})

	const savedServiceCategory = await serviceCategory.save()
	res.status(201).json(savedServiceCategory)

})

serviceCategoryRouter.put('/:id', async (req, res) => {

	const { name, service, icon } = req.body

	const serviceCategory = await ServiceCategory.findById(req.params.id)

	if (!serviceCategory)
		return res
			.status(404)
			.json({
				error: 'Service Category not found!'
			})

	if (name) serviceCategory.name = name
	if (service) serviceCategory.services = serviceCategory.services.concat(service)
	if (icon) serviceCategory.icon = icon

	const updatedServiceCategory = await serviceCategory.save()
	res.json(updatedServiceCategory)

})


serviceCategoryRouter.put('/icon/:id', async (req, res) => {

	const { imageBase64, contentType } = req.body

	const serviceCategory = await ServiceCategory.findById(req.params.id)

	if (!serviceCategory)
		return res
			.status(404)
			.json({
				error: 'Service Category not found!'
			})

	const imageBuffer = Buffer.from(imageBase64, 'base64')

	serviceCategory.icon = {
		data: imageBuffer,
		contentType
	}

	const updatedServiceCategory = await serviceCategory.save()
	res.json(updatedServiceCategory)

})

serviceCategoryRouter.put('/image/:id', async (req, res) => {

	const { imageBase64, contentType } = req.body

	const serviceCategory = await ServiceCategory.findById(req.params.id)

	if (!serviceCategory)
		return res
			.status(404)
			.json({
				error: 'Service Category not found!'
			})

	const imageBuffer = Buffer.from(imageBase64, 'base64')

	serviceCategory.image = {
		data: imageBuffer,
		contentType
	}

	const updatedServiceCategory = await serviceCategory.save()
	res.json(updatedServiceCategory)

})

module.exports = serviceCategoryRouter