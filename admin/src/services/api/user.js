// import axios from "../config/axiosConfig"
import axios from 'axios'
import config from '../../config/config'

const baseUrl = `${config.apiUrl}/api/user`

const getAll = () => axios.get(baseUrl)

const get = (id) => axios.get(`${baseUrl}/${id}`)

export default { getAll, get }