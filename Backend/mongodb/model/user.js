const mongoose = require('mongoose')

const schema = mongoose.Schema({

	firstname: {
		type: String,
	},
	lastname: {
		type: String,
	},
	email: {
		type: String
	},
	phone: {
		type: String,
		required: true
	},
	passwordHash: {
		type: String
	},
	role: {
		type: String,
		required: true, 
		enum: ['user', 'serviceProvider']
	},
	address: {
		type: String
	},
	otp: {
		type: String
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	profilePicture: {
		data: Buffer,
		contentType: String,
	},
	recentServices: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Service',
		}
	]

})

schema.set('toJSON', {

	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}

})

module.exports = mongoose.model('User', schema)