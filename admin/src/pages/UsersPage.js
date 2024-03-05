import { useState, useEffect } from "react"

import UsersTable from "../components/UsersTable"
import Loading from "../components/Loading"

import userServices from "../services/user"


const UsersPage = () => {
	
	const [users, setUsers] = useState(null)

	useEffect(() => {

		userServices
			.getAll()
			.then(result => setUsers(result.data))
			.catch(error => console.log(error))
		

	}, [])

	console.log(users)

	return (
		<div className="bg-gray-300 h-full px-10 py-7 max-sm:px-5">
			{users? <UsersTable users={users}/> : <Loading/>}
			{/* <Loading></Loading> */}
		</div>
	)

}

export default UsersPage