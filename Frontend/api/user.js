import axios from "axios"

const baseUrl = 'http://192.168.29.78:5000/api/user'

let token = null

const setToken = newToken => {
	token = `Bearer ${newToken}`
}

export default { setToken }