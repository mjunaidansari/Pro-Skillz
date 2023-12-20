const reviewRouter = require('express').Router()

const Review = require('../../mongodb/model/review')

// to get all the reviews
reviewRouter.get('/', async (req, res) => {

	const reviews = await Review
							.find({})

	const user = req.user
	console.log(user.id)
	res.json(reviews)

})

// to get a single review by id
reviewRouter.get('/:id', async (req, res) => {

	const review = await Review
							.findById(req.params.id)
	if(review)
		res.json(review)
	else
		res.status(400).end()

})

// for a specific service
reviewRouter.get('/service/:id', async (req, res) => {

	const reviews = await Review
							.find({ service: req.params.id })

	if(reviews)
		res.json(reviews)
	else
		res.status(404).end()

})

// for a specific user
reviewRouter.get('/user/:id', async (req, res) => {

	const reviews = await Review 
							.find({ reviewer: req.params.id })
	
	if(reviews)
		res.json(reviews)
	else
		res.status(404).end()

})

// add a review
reviewRouter.post('/', async(req, res) => {

	const user = req.user
	const {service, rating, comment} = req.body

	if (!user)
	return res
			.status(401)
			.json({
				error: 'Invalid User!'
			})

	const review = new Review({
		reviewer: user.id,
		service,
		rating,
		comment
	})

	const savedReview = await review.save()
	res.status(201).json(savedReview)	

})

reviewRouter.put('/:id', async (req, res) => {

	const user = req.user
	const {rating, comment} = req.body
	
	if (!user)
	return res
			.status(401)
			.json({
				error: 'Invalid User!'
			})

	const review = await Review.findById(req.params.id)

	if (!review)
		return res
				.status(401)
				.json({
					error: 'Review not found!'
				})
	
	if (rating) review.rating = rating
	if (comment) review.comment = comment

	const updatedReview = await review.save()
	res.json(updatedReview)

})

// delete a review
reviewRouter.delete('/:id', async (req, res) => {

	const user = req.user
	
	if(!user) 
		return res
				.status(401)
				.json({
					error: 'Invalid User!'
				})
	
	await Review.findByIdAndDelete(req.params.id)
	res.status(204).end()

})

module.exports = reviewRouter