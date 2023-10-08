const { startStandaloneServer } = require('@apollo/server/standalone')

const app = require('./config/app')
const config = require('./config/config')

const apolloServer = require('./config/apolloServer')

app.listen(config.API_PORT, () => {
	console.log(`API Server running on port ${config.API_PORT}`)
})

startStandaloneServer(apolloServer, {
	listen: {port: config.GRAPHQL_PORT}
}).then(({url}) => {
	console.log(`GraphQL Server running on port ${config.GRAPHQL_PORT}`)
})