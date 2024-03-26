import { useState } from "react"

import { IoEye } from "react-icons/io5" 
import { IoEyeOff } from "react-icons/io5" 

import backgroundImage from '../images/login-bg.jpg'

const LoginForm = (props) => {

	const [passwordVisible, setPasswordVisible] = useState(false)

	const { handleLogin, username, setUsername, password, setPassword, loginError, setLoginError } = props

	return (
		
		<div className="min-h-screen flex flex-col items-center my-auto bg-cover" style={{backgroundImage: `url(${backgroundImage})`}}>
			{/* <div className="my-auto"> */}
				<label className="block font-bold text-2xl mb-4 mt-32">Login</label>
				<form className="w-3/12 max-sm:w-2/3"  onSubmit={handleLogin}>
					<label className="block font-serif pb-2 pt-4">Username:</label>
					<input 
						id="username"
						type="text" 
						name="username" 
						value={username} 
						placeholder="Username"
						onChange={({ target }) => setUsername(target.value)}
						className="block border-2 border-gray-400 pl-2 py-1 w-full rounded-md focus:border-black"
					/>
					<label className="block font-serif pb-2 pt-4">Password:</label>
					<div className="relative">
						<input
							id="password"
							type={passwordVisible? "text":"password"}
							name="password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
							className="block border-2 border-gray-400 pl-2 py-1 w-full rounded-md focus:border-black "
						/>
						<button
							type="button"
							onClick={() => setPasswordVisible(!passwordVisible)}
							className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
						>
							{passwordVisible?(
								<IoEyeOff/>
							):(
								<IoEye/>
							)}
						</button>
					</div>
					{loginError!='' && (
						<div className="relative mb-2">
							<label className="block absolute right-0 text-red-500 text-xs max-sm:text-[10px]">
							{loginError}
							</label>
						</div>
					)}
					<button
						id="login-button"
						type="submit"
						onClick={handleLogin}
						className="bg-blue-400 py-1 px-8 mt-6 rounded-full max-sm:w-full"
					>Login</button>
				</form>
			{/* </div> */}
		</div>

	)

}

export default LoginForm