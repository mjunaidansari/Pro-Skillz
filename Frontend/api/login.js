import axios from "axios"

// const baseUrl = 'http://192.168.33.250:3000/api/otp'
// const baseUrl = 'http://192.168.0.104:3000/api/login'
import { API_HOST } from "@env";
const baseUrl = `${API_HOST}/api/login`

let token = null

const setToken = (newToken) => {
	token = `Bearer ${newToken}`
}

const user = async (credentials) => {
	const response = await axios.post(`${baseUrl}/user`, credentials)
	return response.data
}

export default { setToken, user }