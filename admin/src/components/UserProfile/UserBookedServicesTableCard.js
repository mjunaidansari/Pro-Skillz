import UserBookedServicesTable from "./UserBookedServicesTable"


const UserBookedServicesTableCard = ({ bookedServices }) => {

	return (

		<div className="block col-span-3 bg-white rounded-2xl shadow-lg hover:shadow-2xl shadow-gray-400">
			
			<div className="text-lg font-bold mx-10 mt-10">
				Booked Services
				<div className="h-px bg-gray-400"></div>
			</div>

			<div className="mx-10">
				<UserBookedServicesTable bookedServices={bookedServices}/>
			</div>

		</div>

	)

}

export default UserBookedServicesTableCard