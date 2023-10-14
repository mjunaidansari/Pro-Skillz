const serviceCategoryRouter = require('express').Router()

const User = require('../../mongodb/model/user')
const ServiceCategory = require('../../mongodb/model/serviceCategory')
const ServiceProvider = require('../../mongodb/model/serviceProvider')
const Service = require('../../mongodb/model/service')
const serviceCategory = require('../../mongodb/model/serviceCategory')

serviceCategoryRouter.get('/', async (req, res) => {

	const serviceCategories = await ServiceCategory
										.find({})
										.populate('services')

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

	if (name) serviceCategory.name = name
	if (service) serviceCategory.services = serviceCategory.services.concat(service)
	if (icon) serviceCategory.icon = icon

	const updatedServiceCategory = await serviceCategory.save()
	res.json(updatedServiceCategory)

})

module.exports = serviceCategoryRouter