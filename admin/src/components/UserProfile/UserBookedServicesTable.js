import { Link } from "react-router-dom";
import { FaSort } from "react-icons/fa";

const TableHead = ({name, sort, imp}) => {

	return (
		<th scope="col" className={`px-6 py-3 ${imp?"":"max-sm:hidden"} sticky`}>
			<div className="flex items-center gap-1">
				{name}
				{sort && (<span className="cursor-pointer">
					<FaSort/>
				</span>)}
			</div>
		</th>
	)

}

const TableRow = ({id, image, name, bookingDate, deliveryDate, status, serviceCharge}) => {

	return (
		<tr className="bg-white border-b text-gray-600 max-sm:text-xs hover:bg-indigo-50">
			<th scope="row" className="px-6 py-4 max-sm:pl-3 font-medium text-gray-900 whitespace-nowrap">
				<div className="flex items-center">
					{/* {image?(
						<img 
							className="w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full" 
							src={`data:${image.contentType};base64,${image.data}`} 
							alt="Rounded avatar"
						/>
					):(
						<img 
							className="w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full" 
							src="https://docs.material-tailwind.com/img/face-1.jpg" 
							alt="Rounded avatar"
						/>
					)} */}
					<label className="max-sm:ml-2">
						{name}
					</label>
				</div>
			</th>
			<td className="px-6 py-4 max-sm:hidden">
				{bookingDate}
			</td>
			<td className="px-6 py-4 max-sm:hidden">
				{deliveryDate}
			</td>
			<td className="px-6 py-4 max-sm:hidden">
				{status}
			</td>
			<td className="px-6 py-4 max-sm:hidden">
				{serviceCharge}
			</td>
			<td className="px-6 py-4 text-right">
				<Link to={`/main/users/${id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Profile</Link>
			</td>
		</tr>
	)	

}

const UserBookedServicesTable = ({ bookedServices }) => {

	const dateOptions = { 
		year: 'numeric', 
		month: '2-digit', 
		day: '2-digit' 
	}

	return (

		<div className="relative overflow-y-auto my-5 h-64 scro">
			<table className="w-full text-sm text-left rtl:text-right text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-white border-b-2">
					<tr>
						<TableHead name={"Name"} imp={true}/>
						<TableHead name={"Booking Date"}/>
						<TableHead name={"Delivery Date"}/>
						<TableHead name={"Status"}/>
						<TableHead name={"Charge"}/>
						<TableHead imp={true}/>
					</tr>
				</thead>
				<tbody>
					{bookedServices.map(bookedService => (
						<TableRow
							key={bookedService._id}
							id={bookedService._id}
							image={bookedService.service.image}
							name={bookedService.service.name}
							bookingDate={new Date(bookedService.bookingDate).toLocaleDateString('en-US', dateOptions)}
							deliveryDate={new Date(bookedService.deliveryDates[0]).toLocaleDateString('en-US', dateOptions)}
							status={bookedService.status}
							serviceCharge={bookedService.serviceCharge}

						/> 
					))}

					{bookedServices.map(bookedService => (
						<TableRow
							key={bookedService._id}
							id={bookedService._id}
							image={bookedService.service.image}
							name={bookedService.service.name}
							bookingDate={new Date(bookedService.bookingDate).toLocaleDateString('en-US', dateOptions)}
							deliveryDate={new Date(bookedService.deliveryDates[0]).toLocaleDateString('en-US', dateOptions)}
							status={bookedService.status}
							serviceCharge={bookedService.serviceCharge}

						/> 
					))}

					{bookedServices.map(bookedService => (
						<TableRow
							key={bookedService._id}
							id={bookedService._id}
							image={bookedService.service.image}
							name={bookedService.service.name}
							bookingDate={new Date(bookedService.bookingDate).toLocaleDateString('en-US', dateOptions)}
							deliveryDate={new Date(bookedService.deliveryDates[0]).toLocaleDateString('en-US', dateOptions)}
							status={bookedService.status}
							serviceCharge={bookedService.serviceCharge}

						/> 
					))}

				</tbody>
			</table>
		</div>

	)

}

export default UserBookedServicesTable