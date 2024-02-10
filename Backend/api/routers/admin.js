const bcrypt = require('bcrypt')
const adminRouter = require('express').Router()

const Admin = require('../../mongodb/model/admin')

// getting all the admins
adminRouter.get('/', async (req, res) => {

	const admin = req.admin
	
	if(!admin) 
		return res.status(401).end()

	const admins = await Admin.find({})

	res.json(admins)

})

// getting single admin
adminRouter.get('/:id', async (req, res) => {

	const admin = await Admin.findById(req.params.id)
	
	if(admin)
		res.json(admin)
	else
		res.status(404).end()

})

// creating an admin
adminRouter.post('/', async (req, res) => {

	const {username, password, fullName} = req.body

	const saltRounds = 10
	const passwordHash = await bcrypt.hash(password, saltRounds)

	const admin = Admin({
		username,
		passwordHash,
		fullName
	})

	const savedAdmin = await admin.save()

	res.status(201).send(savedAdmin)

})

module.exports = adminRouter