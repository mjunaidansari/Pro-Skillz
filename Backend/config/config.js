require('dotenv').config()

const API_PORT = process.env.API_PORT
const GRAPHQL_PORT = process.env.GRAPHQL_PORT
const MONGODB_URI = process.env.MONGODB_URI
const OTP_API_KEY = process.env.OTP_API_KEY

module.exports = { 
	API_PORT, 
	GRAPHQL_PORT,
	MONGODB_URI, 
	OTP_API_KEY
}