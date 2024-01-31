const Location = require('../../../mongodb/model/location')
const ServiceCategory = require('../../../mongodb/model/serviceCategory')
const Service = require('../../../mongodb/model/service')
const ServiceProvider = require('../../../mongodb/model/serviceProvider')
const User = require('../../../mongodb/model/user')

const typeDefs = `
	type Query {
		filterLocation(serviceCategoryName: String!): [Location]!
	}
`

const resolvers = {
	Query: {
		filterLocation: async (root, args)=> {
			
			//getting service category name from the argument 
			const { serviceCategoryName } = args

			// finding service based on the name
			const serviceCategory = await ServiceCategory.findOne({ name: serviceCategoryName })

			// extracting the service IDs of that category
			const serviceIds = serviceCategory.services.map(service => service.toString())

			// retrieving all the services
			const services = await Service.find({
				_id: {
					$in: serviceIds
				}
			})

			// extracting the provider IDs from the services
			const providerIds = services.map(service => service.provider.toString())

			// retrieving all the providers
			const providers = await ServiceProvider.find({
				_id: {
					$in: providerIds
				}
			})

			// extracting the user IDs of providers
			const userIds = providers.map(provider => provider.user.toString())

			// retrieving all the users
			const users = await User.find({
				_id: {
					$in: userIds
				}
			})

			// finding locations based on the userrIds
			const locations = await Location.find({
				user: {
					$in: userIds
				}
			})
			
			return locations
		}
	}
}

module.exports = {
	typeDefs,
	resolvers
}