import axios from "axios"

const instance = axios.create()

// this interceptor will intercept every request made through this instance
// by adding the bearer token in its authorization header
instance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('loggedProSkillzAdmin')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default instance