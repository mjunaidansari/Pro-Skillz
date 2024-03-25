import axios from "axios"
import { API_HOST } from "@env";

const baseUrl = `${API_HOST}/api/user`

let token = null

const setToken = newToken => {
	token = `Bearer ${newToken}`
}

export default { setToken }