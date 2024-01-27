const serviceCategoryRouter = require('express').Router()

const ServiceCategory = require('../../mongodb/model/serviceCategory')

serviceCategoryRouter.get('/', async (req, res) => {

	const serviceCategories = await ServiceCategory
										.find({})
										// .populate('services')

	res.json(serviceCategories)
})

serviceCategoryRouter.get('/:id', async (req, res) => {

	const serviceCategory = await ServiceCategory
									.findById(req.params.id)
									.populate('services')
	
	if(serviceCategory) 
		res.json(serviceCategory)
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
	
	if(!serviceCategory) 
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

	if(!serviceCategory) 
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

	if(!serviceCategory) 
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