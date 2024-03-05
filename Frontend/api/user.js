import axios from "axios"
import { API_HOST } from "@env";

// const baseUrl = 'http://192.168.164.192:5000/api/user'
const baseUrl = `${API_HOST}/api/user`

let token = null

const setToken = newToken => {
	token = `Bearer ${newToken}`
}

export default { setToken }