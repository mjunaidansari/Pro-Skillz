import axios from "axios"

const baseUrl = 'http://192.168.29.78:3000/api/user'

import axios from "axios"

let token = null

const setToken = newToken => {
	token = `Bearer ${newToken}`
}

export default { setToken }