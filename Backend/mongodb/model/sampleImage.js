const mongoose = require('mongoose')

const schema = mongoose.Schema({

	file: {
		type: Buffer,
		// contentType: String,
	}, 
	contentType: {
		type: String
	}

})

module.exports = mongoose.model('SampleImage', schema)