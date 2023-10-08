require('dotenv').config()

const API_PORT = process.env.API_PORT
const GRAPHQL_PORT = process.env.GRAPHQL_PORT
const MONGODB_URI = process.env.MONGODB_URI

module.exports = { 
	API_PORT, 
	GRAPHQL_PORT,
	MONGODB_URI
}