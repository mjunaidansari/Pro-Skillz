const Location = require('../../../mongodb/model/location')

const typeDefs = `
	type Query {
		locationCount: Int!
	}
`

const resolvers = {
	Query: {
		locationCount: async () => Location.collection.countDocuments()
	}
}

module.exports = {
	typeDefs,
	resolvers
}