const mongoose = require('mongoose')

const schema = mongoose.Schema({

	name: {
		type: String,
		required: true,
		// enum: ['Plumber', 'Painter', 'Technician']
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

// schema.set('toJSON', {

// 	transform: (document, returnedObject) => {
// 		returnedObject.id = returnedObject._id.toString()
// 		delete returnedObject._id
// 		delete returnedObject.__v
// 		returnedObject.image.data = returnedObject.image.data.toString('base64')
// 		returnedObject.icon.data = returnedObject.icon.data.toString('base64')
// 	}

// })

module.exports = mongoose.model('ServiceCategory', schema)