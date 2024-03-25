import axios from 'axios'
import config from '../../config/config'

const baseUrl = `${config.apiUrl}/api/carts`

console.log(`${baseUrl}/user/`)

const getWithUserId = (id) => axios.get(`${baseUrl}/user/${id}`)

export default { getWithUserId }