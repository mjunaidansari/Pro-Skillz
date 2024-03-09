import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import userServices from "../services/user"

import Loading from '../components/Loading'

const UserProfileCard = ({ user }) => {

	const dateOptions = { 
		year: 'numeric', 
		month: '2-digit', 
		day: '2-digit' 
	};

	console.log(user)

	return (
		<div className="block row-span-3 bg-white rounded-2xl shadow-lg shadow-gray-400 h-fit">

			<div className="flex items-center justify-center mt-8">
				{user.profilePicture?(
					<img
						className="rounded-full w-52 h-52" 
						src={`data:${user.profilePicture.contentType};base64,${user.profilePicture.data}`} 
						alt="Rounded avatar"
					/>
				):(
					<img 
						className="w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full" 
						src="https://docs.material-tailwind.com/img/face-1.jpg" 
						alt="Rounded avatar"
					/>
				)}
			</div>
			<div className="relative mt-10 mb-10 p-3"> 
				<table className="w-full">
					<UserInFoLine title={"Firstname"} value={user.firstname}/>
					<UserInFoLine title={"Lastname"} value={user.lastname}/>
					<UserInFoLine title={"Phone"} value={user.phone}/>
					<UserInFoLine title={"ID"} value={user._id}/>
					<UserInFoLine title={"Created On"} value={new Date(user.createdAt).toLocaleDateString('en-US', dateOptions)}/>
					<UserInFoLine title={"Last Updated"} value={new Date(user.updatedAt).toLocaleDateString('en-US', dateOptions)}/>
				</table>
			</div>
		</div>
	)

}

const UserInFoLine = ({title, value}) => {

	return (
		// <>
			<tr className="text-sm">
				<td className="font-bold pt-3">
					{title + ":"}					
				</td>
				<td className="pl-5 pt-3 text-left">
					{value}
				</td>
			</tr>
			// <div className="h-px bg-gray-400"></div>
		// </>
	)

}

const UserProfile = () => {

	const [user, setUser] = useState(null)
	const { id } = useParams();

	useEffect(() => {

		userServices
			.get(id)
			.then(result => setUser(result.data))
			.catch(error => console.log(error))

	}, [])

	console.log(user)

	return (

		<>
			{user?(
				<div className="grid grid-cols-3 grid-rows-3 grid-flow-row gap-10 h-full p-10">
					<UserProfileCard user={user}/>
					<div className="bg-black text-white col-span-2"> hello </div>
					<div className="bg-black text-white col-span-2"> hello </div>
					<div className="bg-black text-white col-span-2"> hello </div>
					{/* {id} */}
				</div>
			):(
				<Loading/>
			)}
		</>

	)

}

export default UserProfile