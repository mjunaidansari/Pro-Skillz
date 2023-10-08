const mongoose = require('mongoose')

const schema = mongoose.Schema({

	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	description: {
		type: String,
	},
	avgRating: {
		type: Number
	}

})

module.exports = mongoose.model('ServiceProvider', schema)