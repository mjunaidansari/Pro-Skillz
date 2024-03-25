const UserInfoLine = ({title, value}) => {

	return (
		<tr className="text-sm hover:bg-indigo-50 rounded-lg">
			<td className="font-bold py-2 pl-2">
				{title + ":"}	
			</td>
			<td className="pl-5 py-2 text-left">
				{value}
			</td>
		</tr>
	)

}

const UserProfileCard = ({ user }) => {

	const dateOptions = { 
		year: 'numeric', 
		month: '2-digit', 
		day: '2-digit' 
	};

	return (
		<div className="block row-span-3 bg-white rounded-2xl shadow-lg hover:shadow-2xl shadow-gray-400 h-fit">

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

			<div className="text-lg font-bold mx-10 mt-10">
				User's Profile
				<div className="h-px bg-gray-400"></div>
			</div>

			<div className="relative mt-5 mb-10 px-10"> 
				<table className="w-full">
					<UserInfoLine title={"Firstname"} value={user.firstname}/>
					<UserInfoLine title={"Lastname"} value={user.lastname}/>
					<UserInfoLine title={"Phone"} value={user.phone}/>
					<UserInfoLine title={"ID"} value={user._id}/>
					<UserInfoLine title={"Created On"} value={new Date(user.createdAt).toLocaleDateString('en-US', dateOptions)}/>
					<UserInfoLine title={"Last Updated"} value={new Date(user.updatedAt).toLocaleDateString('en-US', dateOptions)}/>
				</table>
			</div>
		</div>
	)

}

export default UserProfileCard