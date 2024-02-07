const typeDefs = `

	type ServiceCard {
		id: ID!
		provider: ID!
		name: String!
		description: String!
		serviceCharge: Int!
		providerName: String!
	}

`

const resolvers = {}

module.exports = {
	typeDefs,
	resolvers
}