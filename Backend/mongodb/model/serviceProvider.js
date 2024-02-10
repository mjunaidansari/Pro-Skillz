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
	categories: [
		{
			type: String,
		}
	],
	ratings: [
		{
			type: Number,
			min: 1,
			max: 5
		}
	],
	verified: {
		type: Boolean
	},
	allowed: {
		type: Boolean,
	},
	profilePicture: {
		data: Buffer,
		contentType: String
	}

})

// schema.set('toJSON', {
	
// 	transform: (document, returnedObject) => {
// 		returnedObject.id = returnedObject._id.toString()
// 		delete returnedObject._id
// 		delete returnedObject.__v
// 		imageData = returnedObject.profilePicture.data
// 		returnedObject.image.data = imageData.toString('base64')
// 		// returnedObject.image.data = returnedObject.profilePicture.data.toString('base64')
// 	}

// })

module.exports = mongoose.model('ServiceProvider', schema)