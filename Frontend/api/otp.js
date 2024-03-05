import axios from "axios"
import { API_HOST } from "@env"

// const baseUrl = 'http://192.168.33.250:3000/api/otp'
// const baseUrl = 'http://192.168.0.104:3000/api/otp'
// const baseUrl = 'http://192.168.164.192:5000/api/otp'
const baseUrl = `${API_HOST}/api/otp`

let token = null

const setToken = newToken => {
	token = `Bearer ${newToken}`
}

const generate = async phone => {
	console.log(`${baseUrl}/generate`)
	const response = await axios.post(`${baseUrl}/generate`, { phone })
	console.log(response.data)
	return response.data
}

export default { setToken, generate }