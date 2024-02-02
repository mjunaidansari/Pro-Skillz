import axios from "axios"

// const baseUrl = 'http://192.168.33.250:3000/api/otp'
// const baseUrl = 'http://192.168.0.104:3000/api/user'
const baseUrl = 'http://192.168.29.78:3000/api/user'

let token = null

const setToken = newToken => {
	token = `Bearer ${newToken}`
}

export default { setToken }