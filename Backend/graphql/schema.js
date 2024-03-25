const { merge } = require('lodash')

// types
const test = require('../graphql/types/test')
const location = require('../graphql/types/location')
const serviceCard = require('../graphql/types/serviceCard')
const entityCount = require('../graphql/types/entityCount')

// queries
const allObj = require('../graphql/queries/allObj')
const objCount = require('../graphql/queries/objCount')
const locationCount = require('../graphql/queries/location/locationCount')
const allLocations = require('../graphql/queries/location/allLocations')
const nearMe = require('../graphql/queries/location/nearMe')
const filterLocation = require('../graphql/queries/location/filterLocation')
const getServiceCards = require('../graphql/queries/getServiceCards')
const getEntityCount = require('./queries/admin/getEntityCount')

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
	nearMe.typeDefs,
	filterLocation.typeDefs,
	serviceCard.typeDefs,
	getServiceCards.typeDefs,
	entityCount.typeDefs,
	getEntityCount.typeDefs

]

const resolvers = merge(
	test.resolvers,
	objCount.resolvers,
	allObj.resolvers,
	editObj.resolvers,
	location.resolvers,
	locationCount.resolvers,
	allLocations.resolvers,
	nearMe.resolvers,
	filterLocation.resolvers,
	serviceCard.resolvers,
	getServiceCards.resolvers,
	getEntityCount.resolvers,
)

module.exports = {
	typeDefs,
	resolvers
}