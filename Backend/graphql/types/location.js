const getDistance = require('../functions/GetDistance')

const typeDefs = `
	type Location {
		id: ID!
		user: String!
		location: LocJson!
		locationName: String!
		calcDistance(coordinates: [Float]!): Float!
	}

	type LocJson {
		type: String!
		coordinates: [Float]!
	}
`

const resolvers = {
	Location: {
		location: (root, args) => root.location,
		calcDistance: (root, args) => {

			// getting the coordinates of the starting point from args
			const { coordinates } = args
			
			const distance = getDistance(coordinates, root.location.coordinates)
			return distance

		}
	}
}

module.exports = {
	typeDefs,
	resolvers
}