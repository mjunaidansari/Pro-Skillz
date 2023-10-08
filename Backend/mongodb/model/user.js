const mongoose = require('mongoose')

const schema = mongoose.Schema({

	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	passwordHash: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	},
	profilePicture: {
		data: Buffer,
		contentType: String
	},
	email: {
		type: String,
		required: true
	},
	address: {
		type: String
	}

})

module.exports = mongoose.model('User', schema)