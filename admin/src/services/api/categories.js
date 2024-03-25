import axios from 'axios'
import config from '../../config/config'

const baseUrl = `${config.apiUrl}/api/serviceCategory`

// const getWithUserId = (id) => axios.get(`${baseUrl}/user/${id}`)

const getAll = () => axios.get(baseUrl)

export default { getAll }