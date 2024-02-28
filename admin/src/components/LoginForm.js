import backgroundImage from '../images/login-bg.jpg'

const LoginForm = (props) => {

	const { handleLogin, username, setUsername, password, setPassword } = props

	return (
		<>
		<div className="min-h-screen flex flex-col items-center my-auto bg-cover" style={{backgroundImage: `url(${backgroundImage})`}}>
			{/* <div className="my-auto"> */}
				<label className="block font-bold text-2xl mb-4 mt-32">Login</label>
				<form className="w-3/12"  onSubmit={handleLogin}>
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
					<input
						id="password"
						type="password"
						name="password"
						value={password}
						onChange={({ target }) => setPassword(target.value)}
						className="block border-2 border-gray-400 pl-2 py-1 w-full rounded-md focus:border-black"
						/>
					<button
						id="login-button"
						type="submit"
						className="bg-blue-400 py-1 px-8 mt-6 rounded-full"
					>Login</button>
				</form>
			{/* </div> */}
		</div>
		</>

		// <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        //     <div className="max-w-md w-full space-y-8">
        //         <div>
        //             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        //         </div>
        //         <form onSubmit={handleLogin} className="mt-8 space-y-6" >
        //             <input type="hidden" name="remember" value="true" />
        //             <div className="rounded-md shadow-sm -space-y-px">
        //                 <div>
		// 					<label htmlFor="username" className="sr-only">Username</label>
		// 					<input id="username" name="username" value={username} onChange={({ target }) => setUsername(target.value)} type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
		// 				</div>
        //                 <div>
        //                     <label htmlFor="password" className="sr-only">Password</label>
        //                     <input id="password" name="password"  value={password} onChange={({ target }) => setPassword(target.value)} type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
        //                 </div>
        //             </div>

        //             <div className="flex items-center justify-between">
        //                 <div className="flex items-center">
        //                     <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
        //                     <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
        //                         Remember me
        //                     </label>
        //                 </div>

        //                 <div className="text-sm">
        //                     <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
        //                         Forgot your password?
        //                     </a>
        //                 </div>
        //             </div>

        //             <div>
        //                 <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        //                     <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        //                         <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        //                             <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v1.586L5.707 6.293a1 1 0 00-1.414 1.414l4.5 4.5a1 1 0 001.414 0l4.5-4.5a1 1 0 00-1.414-1.414L11 5.586V4a1 1 0 00-1-1z" clipRule="evenodd" />
        //                             <path fillRule="evenodd" d="M4 8a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd" />
        //                         </svg>
        //                     </span>
        //                     Sign in
        //                 </button>
        //             </div>
        //         </form>
        //     </div>
        // </div>

	)

}

export default LoginForm