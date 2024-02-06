const mongoose = require('mongoose')

const schema = mongoose.Schema({

	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	service: 
	{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Service'
	},
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
	serviceCharge: {
		type: Number,
	},
	status: {
		type: String,
		enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed', 'Rescheduled', 'Refunded']
	}

})

module.exports = mongoose.model('bookedService', schema)