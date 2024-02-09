const getDistance = require('../functions/GetDistance')

const typeDefs = `

	type ServiceCard {
		id: ID
		provider: ID!
		name: String!
		description: String!
		serviceCharge: Int!
		rating: Int!
		image: ImageJson
		providerName: String!
		location: LocJson!
		distance(coordinates: [Float]!): Float!
	}

	type ImageJson {
		data: String!
		contentType: String!
	}

`

const resolvers = {
	ServiceCard: {
		distance: (root, args) => {

			const {coordinates} = args
			const distance = getDistance(coordinates, root.location.coordinates)
			return distance
		}
	}
}

module.exports = {
	typeDefs,
	resolvers
}