require('dotenv').config()

const API_PORT = process.env.API_PORT
const GRAPHQL_PORT = process.env.GRAPHQL_PORT

module.exports = { API_PORT, GRAPHQL_PORT }