const typeDefs = `
	type Location {
		id: ID!
		user: String!
		location: LocJson!
		locationName: String!,
		calcDistance: Float!
	}

	type LocJson {
		type: String!
		coordinates: [Float]!
	}
`

const resolvers = {
	Location: {
		location: (root, args) => root.location
	}
}

module.exports = {
	typeDefs,
	resolvers
}