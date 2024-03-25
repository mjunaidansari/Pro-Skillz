import UserRecentServiceTable from "./UserRecentServiceTable"

const UserRecentServiceCard = ({ recentServices }) => {

	return (
		
		<div className="block col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-2xl shadow-gray-400">
			
			<div className="text-lg font-bold mx-10 mt-10">
				Recent Services
				<div className="h-px bg-gray-400"></div>
			</div>

			<div className="mx-10">
				<UserRecentServiceTable recentServices={recentServices}/>
			</div>
		</div>
	)

}

export default UserRecentServiceCard