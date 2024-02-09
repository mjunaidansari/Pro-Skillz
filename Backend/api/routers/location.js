const locationRouter = require('express').Router()

const Location = require('../../mongodb/model/location')

// to get all locations
locationRouter.get('/', async (req, res) => {

	const locations = await Location
								.find({})
	res.json(locations)

})

// to get specific location
locationRouter.get('/:id', async (req, res) => {

	// const user = req.user

	// if (!user)
	// 	return res
	// 			.status(401)
	// 			.json({
	// 				error: 'Invalid User!'
	// 			})
	
	const location = await Location.findById(req.params.id)

	if(location)
		res.json(location)
	else
		res.status(400).end()

})

// to get location of specific user with id
locationRouter.get('/user/:id', async (req, res) => {

	console.log(req.params.id)
	const location = await Location.findOne({ user: req.params.id })
	console.log(location)

	if(location)
		res.json(location)
	else
		res.status(400).end()

})

// to add a location
locationRouter.post('/', async (req, res) => {

	const user = req.user
	const { location, locationName } = req.body

	if (!user)
		return res
				.status(401)
				.json({
					error: 'Invalid User!'
				})
	
	const loc = new Location({
		user: user.id,
		location,
		locationName
	})

	const savedLocation = await loc.save()
	res.status(201).json(savedLocation)

})

// to update a location
locationRouter.put('/:id', async (req, res) => {

	const user = req.user
	const { location, locationName } = req.body

	// if (!user)
	// 	return res
	// 			.status(401)
	// 			.json({
	// 				error: 'Invalid User!'
	// 			})
	
	const loc = await Location.findById(req.params.id)
	console.log(loc)

	if(!loc)
		return res
				.status(401)
				.json({
					error: 'Location not Found!'
				})

	if (location) loc.location = location
	if (locationName) loc.locationName = locationName

	const updatedLocation = await loc.save()
	res.json(updatedLocation)
	
})

// to delete a location
locationRouter.delete('/:id', async (req, res) => {

	const user = req.user

	if (!user)
		return res
				.status(401)
				.json({
					error: 'Invalid User!'
				})
	
	await Location.findByIdAndDelete(req.params.id)
	res.status(204).end()

})

module.exports = locationRouter