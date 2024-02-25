import { useState } from "react"

import loginServices from '../services/login' 

const LoginForm = (props) => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	// const {setUser, setErrorMessage} = props

	const handleLogin = async (event) => {

		event.preventDefault()

		try {
			const admin = await loginServices.login({
				username, password
			})
			console.log(admin)
		} catch(exception) {
			console.log(exception)
		}

	}

	return (
		<>
		<form onSubmit={handleLogin}>
			Username: <input 
				id="username"
				type="text" 
				name="username" 
				value={username} 
				onChange={({ target }) => setUsername(target.value)}
			/>
			Password: <input

				id="password"
				type="password"
				name="password"
				value={password}
				onChange={({ target }) => setPassword(target.value)}
			/>
			<button
				id="login-button"
				type="submit"
			>Login</button>
		</form>
		</>
	)

}

export default LoginForm