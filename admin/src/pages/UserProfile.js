import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import userServices from "../services/api/user"
import bookedServicesApi from "../services/api/bookedServices";

import Loading from '../components/Loading'
import UserProfileCard from "../components/UserProfile/UserProfileCard";
import UserBookedServicesTableCard from "../components/UserProfile/UserBookedServicesTableCard";
import UserCartCard from "../components/UserProfile/UserCartCard";
import UserRecentServiceCard from "../components/UserProfile/UserRecentServiceCard";

const UserProfile = () => {

	const [user, setUser] = useState(null)
	const [bookedServices, setBookedServices] = useState(null)
	const [users, setUsers] = useState(null)

	const { id } = useParams()

	// fetching user information
	useEffect(() => {

		userServices
			.get(id)
			.then(result => setUser(result.data))
			.catch(error => console.log(error))

	}, [])

	// fetching booked services
	useEffect(() => {

		bookedServicesApi
			.getWithUserId(id)
			.then(result => setBookedServices(result.data))
			.catch(error => console.log(error))

	}, [])

	console.log(bookedServices)

	useEffect(() => {

		userServices
			.getAll()
			.then(result => setUsers(result.data))
			.catch(error => console.log(error))

	}, [])

	if(user!==null) console.log(users)

	return (

		<>
			{user?(
				<div className="grid grid-cols-3 grid-rows-3 grid-flow-row gap-10 p-10 ">
					<UserProfileCard user={user}/>
					<UserCartCard/>
					<UserRecentServiceCard/>
					{bookedServices?<UserBookedServicesTableCard bookedServices={bookedServices}/>:<Loading/>}
					{/* <div className="bg-black text-white col-span-2"> hello </div> */}
					{/* {id} */}
				</div>
			):(
				<Loading/>
			)}
		</>

	)

}

export default UserProfile