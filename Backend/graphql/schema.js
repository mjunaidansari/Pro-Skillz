const { merge } = require('lodash')

// types
const test = require('../graphql/types/test')
const location = require('../graphql/types/location')

// queries
const allObj = require('../graphql/queries/allObj')
const objCount = require('../graphql/queries/objCount')
const locationCount = require('../graphql/queries/location/locationCount')
const allLocations = require('../graphql/queries/location/allLocations')
const nearMe = require('../graphql/queries/location/nearMe')

// mutations
const editObj = require('../graphql/mutations/editObj')

const typeDefs = [
	test.typeDefs,
	objCount.typeDefs,
	allObj.typeDefs,
	editObj.typeDefs,
	location.typeDefs,
	locationCount.typeDefs,
	allLocations.typeDefs,
	nearMe.typeDefs
]

const resolvers = merge(
	test.resolvers,
	objCount.resolvers,
	allObj.resolvers,
	editObj.resolvers,
	location.resolvers,
	locationCount.resolvers,
	allLocations.resolvers,
	nearMe.resolvers
)

module.exports = {
	typeDefs,
	resolvers
}