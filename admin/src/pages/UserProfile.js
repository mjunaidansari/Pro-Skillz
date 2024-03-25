import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import userServices from "../services/api/user"
import bookedServicesApi from "../services/api/bookedServices"
import cartServices from "../services/api/cart"

import Loading from '../components/Loading'
import UserProfileCard from "../components/UserProfile/UserProfileCard";
import UserBookedServicesTableCard from "../components/UserProfile/UserBookedServicesTableCard";
import UserCartCard from "../components/UserProfile/UserCartCard";
import UserRecentServiceCard from "../components/UserProfile/UserRecentServiceCard";

import ServicePopover from "../components/ServicePopover";

const UserProfile = () => {

	const [user, setUser] = useState(null)
	const [bookedServices, setBookedServices] = useState(null)
	const [cart, setCart] = useState(null)

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

	// fetching cart items
	useEffect(() => {

		cartServices
			.getWithUserId(id)
			.then(result => setCart(result.data))
			.catch(error => console.log(error))

	}, [])

	if(user!==null) console.log(user)

	return (

		<>
			{user?(
				<div className="grid grid-cols-3 grid-flow-row gap-10 p-10 ">
					<UserProfileCard user={user}/>
					{cart?(<UserCartCard cart={cart}/>):<Loading/>}
					{user.recentServices?(<UserRecentServiceCard recentServices={user.recentServices}/>):<Loading/>}
					{bookedServices?<UserBookedServicesTableCard bookedServices={bookedServices}/>:<Loading/>}
				</div>
			):(
				<Loading/>
			)}
		</>

	)

}

export default UserProfile