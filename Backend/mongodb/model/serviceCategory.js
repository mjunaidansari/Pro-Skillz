const mongoose = require('mongoose')

const schema = mongoose.Schema({

	name: {
		type: String,
		required: true,
		enum: ['Plumber', 'Painter', 'Technician']
	},
	services: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Service'
		}
	],
	icon: {
		data: Buffer,
		contentType: String,
	},
	image: {
		data: Buffer,
		contentType: String
	}

})

module.exports = mongoose.model('ServiceCategory', schema)