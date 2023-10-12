const baseUrl = 'http://192.168.5.192:3000/api/user'

let token = null

const setToken = newToken => {
	token = `Bearer ${token}`
}

export default { setToken }