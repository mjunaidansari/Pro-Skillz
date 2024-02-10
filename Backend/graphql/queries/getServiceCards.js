const Service = require('../../mongodb/model/service')
const ServiceProvider = require('../../mongodb/model/serviceProvider')
const ServiceCategory = require('../../mongodb/model/serviceCategory')
const User = require('../../mongodb/model/user')
const Location = require('../../mongodb/model/location')


const typeDefs = `
	type Query {
		getServiceCards(serviceCategoryName: String!): [ServiceCard]!
	}
`

const resolvers = {
	Query: {
		getServiceCards: async (root, args) => {

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

			// extracting provider IDs from services
			const providerIds = services.map(service => service.provider.toString())

			// retrieving all the providers
			const providers = await ServiceProvider.find({
				_id: {
					$in: providerIds
				}
			})

			// extracting the user IDs of providers
			const userIds = providers.map(provider => provider.user.toString())

			// finding locations based on the userIds
			const locations = await Location.find({
				user: {
					$in: userIds
				}
			})

			// retrieving all the users
			const users = await User.find({
				_id: {
					$in: userIds
				}
			})


			// console.log(services[1])
			// console.log(providers[1])
			// console.log(users[1])
			// console.log(locations[1])
			console.log(providerIds, userIds)
			console.log(services.length, providers.length, users.length, locations.length)

			// creating a merged object
			const returnObj = services.map(service => {
				// finding the index of provider 
				const i = providers.findIndex(provider => provider._id.toString() === service.provider.toString())

				obj = {
					...service.toObject(),
					id: service._id.toString(),
					providerName: users[i].firstname + ' ' + users[i].lastname,
					location: locations[i].location,
				}

				return obj
			})


			console.log(returnObj)

			return returnObj

		}
	}
}

module.exports = {
	typeDefs,
	resolvers
}