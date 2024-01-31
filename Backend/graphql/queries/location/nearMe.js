const Location = require('../../../mongodb/model/location')

const typeDefs = `
	type Query {
		nearMe(coordinates: [Float]!): [Location]
	}
`

const resolvers = {
	Query: {
		nearMe: async (root, args) => {
			const coordinates = args.coordinates
			console.log('Coordinates: ', coordinates)

			return Location.aggregate([{
				// location: {
					$geoNear: {
						near: { type: 'Point', coordinates},
						spherical: true,
						// maxDistance: 2000,
						distanceField: 'calcDistance',
						distanceMultiplier: 0.001
					}
				// }
			}])

			// return Location.find({
			// 	location: {
			// 		$near: {
			// 			$geometry: { type: 'Point', coordinates},
			// 			maxDistance: 2000
			// 		}
			// 	}
			// })

		}
	}
}

module.exports = {
	typeDefs,
	resolvers
}