const mongoose = require('mongoose')

const schema = mongoose.Schema({

	fileId: {
		type: String
	}

})

module.exports = mongoose.model('SampleImage', schema)