import axios from "axios"
import { API_HOST } from "@env"

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