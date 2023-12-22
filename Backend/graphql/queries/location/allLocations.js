const Location = require('../../../mongodb/model/location')

const typeDefs = `
	type Query {
		allLocations: [Location]!
	}
`

const resolvers = {
	Query: {
		allLocations: async () => Location.find({})
	}
}

module.exports = {
	typeDefs,
	resolvers
}