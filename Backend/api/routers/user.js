const userRouter = require('express').Router()
const path = require('path')

const User = require('../../mongodb/model/user')

userRouter.get('/', async (req, res) => {

	const users = await User.find({ role: "user"})
	
	const users64 = users.map(user => {
		if(user.profilePicture) {
			const user64 = {
				...user.toObject(),
				profilePicture: {
					data: user.profilePicture.data.toString('base64'),
					contentType: user.profilePicture.contentType
				}
			}
			return user64
		} else {
			return user
		}
	})

	res.status(200).json(users64)

})

userRouter.get('/testHTML', async (req, res) => {

	res.sendFile(path.join(__dirname, '../requests/user/addProfilePicture.html'))

})

userRouter.get('/:id', async (req, res) => {

	// const user = await User.findById(req.params.id)
	const user = await User.findById(req.params.id).populate('recentServices', {name: 1, serviceCharge: 1})
	if (user)
		if(user.profilePicture) {
			const user64 = {
				...user.toObject(),
				profilePicture: {
					data: user.profilePicture.data.toString('base64'),
					contentType: user.profilePicture.contentType
				}
			}
			res.json(user64)
		} else {
			res.json(user)
		}
	else
		res.status(400).end()

})

userRouter.delete('/:id', async (req, res) => {

	await User.findByIdAndDelete(req.params.id)
	res.status(204).end()

})

userRouter.put('/:id', async (req, res) => {

	const { firstname, lastname, email, address } = req.body

	const user = await User.findById(req.params.id)

	if (!user)
		return res
			.status(404)
			.json({
				error: "User not found!"
			})

	if (firstname) user.firstname = firstname;
	if (lastname) user.lastname = lastname;
	if (email) user.email = email;
	if (address) user.address = address;
	user.updatedAt = Date.now()

	const updatedUser = await user.save()
	res.json(updatedUser)
})

// to add service to recent services
userRouter.post('/recentServices', async (req, res) => {

    const user = req.user
	const { serviceId } = req.body

	if (!user)
		return res
			.status(401)
			.json({
				error: 'Invalid User!'
			})

	if (user.recentServices.includes(serviceId))
			return res.json(user)

	user.recentServices.push(serviceId)
	const updatedUser = await user.save()
	
	res.json(updatedUser)


})

userRouter.post('/image', async (req, res) => {

	const user = req.user
	const { imageBase64, contentType } = req.body

	if(!user) 
		return res
			.status(404)
			.json({
				error: 'User not found!'
			})

	const imageBuffer = Buffer.from(imageBase64, 'base64')

	user.profilePicture = {
		data: imageBuffer,
		contentType
	}

	const savedUser = await user.save()
	res.json(savedUser)

})

userRouter.get('/image', async (req, res) => {

	const user = req.user 

	if(!user) 
		return res
			.status(404)
			.json({
				error: 'User not found!'
			})

	const imageData = {
		data: user.profilePicture.data.toString('base64'),
		contentType: user.profilePicture.contentType
	}

	res.json(imageData)

})


module.exports = userRouter