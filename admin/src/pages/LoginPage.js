import { useState } from "react"
import { useNavigate } from "react-router-dom" 

import LoginForm from "../components/LoginForm"
import loginServices from '../services/login' 

const LoginPage = (props) => {

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
		<LoginForm
			handleLogin={handleLogin}
			username={username}
			setUsername={setUsername}
			password={password}
			setPassword={setPassword}
		/>
	)

}

export default LoginPage