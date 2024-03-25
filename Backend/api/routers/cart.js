const cartRouter = require('express').Router()

const Cart = require('../../mongodb/model/cart')
const Service = require('../../mongodb/model/service')
const User = require('../../mongodb/model/user')

cartRouter.get('/', async (req, res) => {

	const user = req.user

	if (user) {

		const cart = await Cart.findOne({ user: user.id })
		return res.status(200).json(cart)

	}

	res.status(404).json({
		error: 'Cart not found!'
	})


	// const carts = await Cart
	// 	.find({})

	// res.status(200).json(carts)

})

// getting cart of user with user id
cartRouter.get('/user/:id', async (req, res) => {

	const user = await User.findById(req.params.id)

	if (user) {

		const cart = await Cart.findOne({ user: user.id }).populate('services', {name: 1, serviceCharge: 1})
		return res.status(200).json(cart)

	}

	res.status(404).json({
		error: 'Cart not found!'
	})

})

cartRouter.delete('/:id', async (req, res) => {

	const user = req.user

	if (!user)
		return res
			.status(401)
			.json({
				error: "Invalid User!"
			})

	await Cart.findByIdAndDelete(req.params.id)

})

cartRouter.post('/', async (req, res) => {

	const user = req.user

	if (!user)
		return res
			.status(401)
			.json({
				error: "Invalid User!"
			})

	const cart = new Cart({
		user: user.id,
		services: [],
		totalPrice: 0
	})

	const savedCart = await cart.save()
	res.json(savedCart)

})

cartRouter.put('/', async (req, res) => {

	const user = req.user
	const { serviceId } = req.body

	console.log("This is service ID from be : ", serviceId);

	if (!user)
		return res
			.status(401)
			.json({
				error: 'Invalid User!'
			})

	const cart = await Cart.findOne({ user: user.id })

	if (!cart)
		return res
			.status(404)
			.json({
				error: 'Cart Not Found!'
			})

	const service = await Service.findById(serviceId)

	// console.log("service id akjsdjkl asd: ", service._id);

	// checking if the given service is already present in the cart
	if (cart.services.includes(serviceId)) {
		return res.json(cart)
	}

	// adding service to the cart
	cart.services.push(serviceId)
	// incrementing total price of the cart
	cart.totalPrice += service.serviceCharge
	// updating time stamp
	cart.timeStamp = Date.now()

	const updatedCart = await cart.save()

	console.log(updatedCart)
	res.json(updatedCart)

})

cartRouter.delete('/', async (req, res) => {

	const user = req.user
	const { serviceId } = req.body

	if (!user)
		return res
			.status(401)
			.json('Invalid User!')


	const cart = await Cart.findOne({ user: user.id })

	if (!cart)
		return res
			.status(404)
			.json('Cart Not Found!')

	const service = await Service.findById(serviceId)

	// removing the specified service
	const updatedServices = cart.services.filter(service => service.toString() !== serviceId)
	cart.services = updatedServices
	// decrementing its cost
	cart.totalPrice -= service.serviceCharge

	const updatedCart = await cart.save()
	res.json(updatedCart)

})

module.exports = cartRouter