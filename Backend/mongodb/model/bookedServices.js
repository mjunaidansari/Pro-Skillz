const mongoose = require('mongoose')

const schema = mongoose.Schema({

	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	services: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Service'
		}
	],
	payment: {
		type: String, //will be replaced by payment object id
	},
	bookingDate: {
		type: Date,
		default: Date.now,
	},
	deliveryDates: [
		{
			type: Date
		}
	],
	totalPrice: {
		type: Number,
	}

})

module.exports = mongoose.model('bookedServices', schema)