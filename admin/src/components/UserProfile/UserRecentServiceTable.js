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

const TableRow = ({id, name, serviceCharge}) => {

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
				{serviceCharge}
			</td>
			<td className="px-6 py-4 text-right">
				<Link to={`/main/users/${id}`} className="font-medium text-blue-600 hover:underline">View Service</Link>
				{/* <ServicePopover/> */}
			</td>
		</tr>
	)	

}

const UserRecentServiceTable = ({ recentServices }) => {

	return (

		<div className="relative my-5 h-64 overflow-scroll">
			<table className="w-full text-sm text-left rtl:text-right text-gray-400 overflow-y-auto">
				<thead className="text-xs text-gray-700 uppercase bg-white border-b-2">
					<tr>
						<TableHead name={"Name"} imp={true}/>
						<TableHead name={"Charge"}/>
						<TableHead imp={true}/>
					</tr>
				</thead>
				<tbody>

					{recentServices.map(recentService => (
						<TableRow
							key={recentService._id}
							id={recentService._id}
							// image={bookedService.service.image}
							name={recentService.name}
							serviceCharge={recentService.serviceCharge}

						/> 
					))}

				</tbody>
			</table>
		</div>

	)

}

export default UserRecentServiceTable