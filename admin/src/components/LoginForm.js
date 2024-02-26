import { useState } from "react"
import { useNavigate } from "react-router-dom" 

import loginServices from '../services/login' 

const LoginForm = (props) => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const {setAdmin} = props

	const handleLogin = async (event) => {

		event.preventDefault()

		try {
			const admin = await loginServices.login({
				username, password
			})
			
			window.localStorage.setItem(
				'loggedProSkillzAdmin', JSON.stringify(admin.token)
			)
			console.log(admin)
			setAdmin(admin.token)
			setUsername('')
			setPassword('')
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