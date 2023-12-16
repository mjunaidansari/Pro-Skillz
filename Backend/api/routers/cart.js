const cartRouter = require('express').Router()

const Cart = require('../../mongodb/model/cart')
const Service = require('../../mongodb/model/service')

cartRouter.get('/', async (req, res) => {

	const user = req.user

	if(user) {
		
		const cart = await Cart.findOne({ user: user.id })
		res.status(200).json(cart)

	}


	const carts = await Cart
						.find({})

	res.status(200).json(carts)

})

cartRouter.delete('/:id', async (req, res) => {

	const user = req.user

	if(!user)
		return res
				.status(401)
				.json({
					error: "Invalid User!"
				})
	
	await Cart.findByIdAndDelete(req.params.id)

})

cartRouter.put('/', async (req, res) => {

	const user = req.user
	const { serviceId } = req.body

	if(!user)
		return res
				.status(401)
				.json({
					error: 'Invalid User!'
				})

	const cart = await Cart.findOne({ user: user.id })
	
	if(!cart) 
		return res
				.status(401)
				.json({
					error: 'Cart Not Found!'
				})

	const service = await Service.findById(serviceId)

	console.log('User: ', user)
	console.log('Cart: ', cart)
	console.log('Service: ', service)

	// adding service to the cart
	cart.services.push(service)
	// incrementing total price of the cart
	cart.totalPrice += service.serviceCharge

	const updatedCart = await cart.save()

	console.log(updatedCart)
	res.json(updatedCart)

})

module.exports = cartRouter