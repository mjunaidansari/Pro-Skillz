import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'; 

import LoginPage from './pages/LoginPage';


const App = () => {

	/** HOOKS */

	const [admin, setAdmin] = useState(null)

	// hook to see if admin is already logged in
	useEffect(() => {
		const loggedAdmin = window.localStorage.getItem('loggedProSkillzAdmin')
		if(loggedAdmin) {
			setAdmin(JSON.parse(loggedAdmin))
		}
	})

	/** FUNCTIONS */
	
	// handle logout
	const handleLogout = () => {
		window.localStorage.removeItem('loggedProSkillzAdmin')
        setAdmin(null)
	} 

	/** COMPONENTS */

	// sample comp
	const LoggedIn = () => {
		return (
			<>
				{admin}
				<button onClick={handleLogout}>Logout</button>
			</>
		)
	}

	return (
	
	<>
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage setAdmin = {setAdmin}/>}/>
				<Route path="/main" element={<LoggedIn/>}/>
			</Routes>
			<Navigate exact from="/" to={admin ? "/main" : "/login"} />
		</Router>
	</>
		
	)

}

export default App;
