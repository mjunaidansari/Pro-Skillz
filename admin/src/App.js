import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'; 

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';


const App = () => {

	/** HOOKS */

	const [admin, setAdmin] = useState({name: "junaid"})

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
	// const LoggedIn = () => {
	// 	return (
	// 		<>
	// 			{admin}
	// 			<button onClick={handleLogout}>Logout</button>
	// 		</>
	// 	)
	// }

	return (
	<Router>
	{/* <Navigate exact from="/" to={admin ? "/main" : "/login"} /> */}
	<Navigate exact from="/" to="/main" />
		<Routes>
			<Route path="/login" element={<LoginPage setAdmin = {setAdmin}/>}/>
			{/* <Route path="/main" element={<LoggedIn/>}/> */}
			<Route path="/main/*" element={<MainPage/>}>
				<Route path='/dashboard' element={<UsersPage/>}/>
				<Route path='/users' element={<UsersPage/>}/>
				<Route path='/providers' element={<UsersPage/>}/>
				<Route path='/settings' element={<UsersPage/>}/>
			</Route>
			<Route path="/users" element={<LoginPage/>}/>
		</Routes>
	</Router>
		
	)

}

export default App;
