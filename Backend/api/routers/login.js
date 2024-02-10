const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../../mongodb/model/user')
const Admin = require('../../mongodb/model/admin')

const { JWT_SECRET } = require('../../config/config')

const verifyOtp = (userOtp, otp) => userOtp === otp

// to create jwt token for user login
loginRouter.post('/user', async (req, res) => {

	const { phone, userOtp } = req.body

	const user = await User.findOne({
		phone,
		role: {
			$in: ['user']
		}
	})
	console.log("user: ", user)

	if (!(user && verifyOtp(userOtp, user.otp)))
		return res.status(401).json({
			error: 'Invalid OTP'
		})

	const userForToken = {
		phone,
		id: user._id
	}

	const token = jwt.sign(userForToken, JWT_SECRET, { expiresIn: '365d' })

	res
		.status(200)
		.send({ token })

})

// to create jwt token for service provider login
loginRouter.post('/serviceProvider', async (req, res) => {

	const { phone, password } = req.body

	const user = await User.findOne({
		phone,
		role: {
			$in: ['serviceProvider']
		}
	})

	const passwordCorrect = user === null
		? false
		: await bcrypt.compare(password, user.passwordHash)

	if (!(user && passwordCorrect))
		return res.status(401).json({
			error: 'Invalid phone number or password'
		})

	const userForToken = {
		phone,
		id: user._id
	}

	const token = jwt.sign(userForToken, JWT_SECRET, { expiresIn: '365d' })

	res
		.status(200)
		.send({
			token,
			phone: phone
		})

})

// to create jwt token for admin login
loginRouter.post('/admin', async (req, res) => {

	const { username, password } = req.body

	const admin = await Admin.findOne({username})

	const passwordCorrect = admin === null
		? false
		: await bcrypt.compare(password, admin.passwordHash)

	if (!(admin && passwordCorrect))
		return res.status(401).json({
			error: 'Invalid username or password'
		})

	const adminForToken = {
		username,
		id: admin._id,
		isAdmin: true
	}

	const token = jwt.sign(adminForToken, JWT_SECRET, { expiresIn: '365d' })

	res
		.status(200)
		.send({token})

})

loginRouter.post('/verifyUser', async (req, res) => {

	const user = req.user

	if (!user)
		return res
			.status(401)
			.json({
				error: 'Invalid User!'
			})

	res
		.status(200)
		.json({
			status: 'verified',
			user
		})

})

loginRouter.post('/serviceProvider/alternate', async (req, res) => {

	const { firstname, password } = req.body

	const user = await User.findOne({
		firstname,
		role: {
			$in: ['serviceProvider']
		}
	})
	console.log(user)

	const passwordCorrect = user === null
		? false
		: await bcrypt.compare(password, user.passwordHash)

	if (!(user && passwordCorrect))
		return res.status(401).json({
			error: 'Invalid phone number or password'
		})

	const userForToken = {
		phone: user.phone,
		id: user._id
	}

	const token = jwt.sign(userForToken, JWT_SECRET, { expiresIn: '365d' })

	res
		.status(200)
		.send({
			token,
			phone: user.phone
		})

})

module.exports = loginRouter