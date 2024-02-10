const mongoose = require('mongoose')

const schema = mongoose.Schema({

	provider: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'ServiceProvider',
		required: true
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	serviceCharge: {
		type: Number,
		required: true
	},
	rating: {
		type: Number,
		min: 1,
		max: 5,
		default: 0
	},
	image: {
		data: Buffer,
		contentType: String
	}

})

module.exports = mongoose.model('Service', schema)