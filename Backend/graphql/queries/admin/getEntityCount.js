const User = require('../../../mongodb/model/user')
const ServiceProvider = require('../../../mongodb/model/serviceProvider')
const ServiceCategory = require('../../../mongodb/model/serviceCategory')
const Service = require('../../../mongodb/model/service')


const typeDefs = `
	type Query {
		getEntityCount: [EntityCount]
	}
`

const resolvers = {
	Query: {
		getEntityCount: async () => {
			const users = await User.find({role: 'user'}).count()
			const providers = await ServiceProvider.count()
			const categories = await ServiceCategory.count()
			const services = await Service.count()

			obj =  [
				{
					name: 'Users',
					count: users
				},
				{
					name: 'Providers',
					count: providers
				},
				{
					name: 'Categories',
					count: categories
				},
				{
					name: 'Services',
					count: services
				},
			]

			console.log(obj)

			return obj
		}
	}
}

module.exports = {
	typeDefs,
	resolvers
}