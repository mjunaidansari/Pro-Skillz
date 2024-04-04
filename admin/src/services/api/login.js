import axios from "axios"
import config from '../../config/config'

const baseUrl = `${config.apiUrl}/api/login/admin`

const login = async credetials => {

	const response = await axios.post(baseUrl, credetials)
	return response.data

}

export default { login }