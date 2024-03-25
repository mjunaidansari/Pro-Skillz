import { useState, useEffect } from "react"

import UsersTable from "../components/UserProfile/UsersTable"
import Loading from "../components/Loading"

import userServices from "../services/api/user"


const UsersPage = () => {
	
	const [users, setUsers] = useState(null)

	useEffect(() => {

		userServices
			.getAll()
			.then(result => setUsers(result.data))
			.catch(error => console.log(error))
		

	}, [])

	return (
		<div className="h-full px-10 py-7 max-sm:px-5">
			{users?<UsersTable users={users}/>:<Loading/>}
		</div>
	)

}

export default UsersPage