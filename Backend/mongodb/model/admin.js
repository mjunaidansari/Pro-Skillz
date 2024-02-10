const mongoose = require('mongoose')

const schema = mongoose.Schema({

	username: {
		type: String,
		required: true,
		unique: true
	},
	passwordHash: {
		type: String,
		required: true
	},
	fullName: {
		type: String,
		required: true
	}

})

module.exports = mongoose.model('Admin', schema)