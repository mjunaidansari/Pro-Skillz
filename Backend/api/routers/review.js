// change the routers of getting for service and for user


const path = require('path')
const reviewRouter = require('express').Router()

const Review = require('../../mongodb/model/review')

// to get all the reviews
reviewRouter.get('/', async (req, res) => {

	const reviews = await Review
							.find({})
							.populate('reviewer', {
								firstname: 1,
								lastname: 1
							})

	// const user = req.user
	// console.log(user.id)

	const reviews64 = reviews.map(review => {

		if(review.images) {
			const review64 = {
				...review.toObject(),
				images: review.images.map(image => {
					return {data: image.data.toString('base64'), contentType: image.contentType}
				})
			}
			return review64
		} else {
			return review
		}
		
	})

	res.json(reviews64)

})

// html page for test requests
reviewRouter.get('/testHTML', async (req, res) => {
	res.sendFile(path.join(__dirname, '../requests/reviews/addWithImage.html'))
})

// to get a single review by id
reviewRouter.get('/:id', async (req, res) => {

	const review = await Review
							.findById(req.params.id)
	if(review){
		if(review.images){
			const review64 = {
				...review.toObject(),
				images: review.images.map(image => {
					return {data: image.data.toString('base64'), contentType: image.contentType}
				})
			}
			res.json(review64)
		} else {
			res.json(review)
		}
	}
	else
		res.status(400).end()

})

// for a specific service
reviewRouter.get('/service/:id', async (req, res) => {

	const reviews = await Review
							.find({ service: req.params.id })
							.populate('reviewer', {
								firstname: 1,
								lastname: 1
							})

	if(reviews){
		
		const reviews64 = reviews.map(review => {

			if(review.images) {
				const review64 = {
					...review.toObject(),
					images: review.images.map(image => {
						return {data: image.data.toString('base64'), contentType: image.contentType}
					})
				}
				return review64
			} else {
				return review
			}

		})

		res.json(reviews64)
	}
	else
		res.status(404).end()

})

// for a specific user
reviewRouter.get('/user/:id', async (req, res) => {

	const reviews = await Review 
							.find({ reviewer: req.params.id })
	
	if(reviews){
		
		const reviews64 = reviews.map(review => {

			if(review.images) {
				const review64 = {
					...review.toObject(),
					images: review.images.map(image => {
						return {data: image.data.toString('base64'), contentType: image.contentType}
					})
				}
				return review64
			} else {
				return review
			}

		})

		res.json(reviews64)
	}
	else
		res.status(404).end()

})

// add a review
reviewRouter.post('/', async(req, res) => {

	const user = req.user
	const {service, rating, comment, images} = req.body

	if (!user)
	return res
			.status(401)
			.json({
				error: 'Invalid User!'
			})

	const imagesBuffer = images.map(image => {
		return {
			data: Buffer.from(image.data, 'base64'),
			contentType: image.contentType
		}
	})

	const review = new Review({
		reviewer: user.id,
		service,
		rating,
		comment,
		images: imagesBuffer
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