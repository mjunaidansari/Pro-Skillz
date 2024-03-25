import { useState, useEffect } from "react";
import userServices from "../../services/api/user"
import { Link } from "react-router-dom";

import { FaSort } from "react-icons/fa";

const TableHead = ({name, sort, imp}) => {

	return (
		<th scope="col" className={`px-6 py-3 ${imp?"":"max-sm:hidden"}`}>
			<div className="flex items-center gap-1">
				{name}
				{sort && (<span className="cursor-pointer">
					<FaSort/>
				</span>)}
			</div>
		</th>
	)

}

const TableRow = ({id, profilePicture, firstname, lastname, phone, createdAt, updatedAt}) => {

	return (
		<tr className="bg-white border-b text-gray-600 max-sm:text-xs hover:bg-indigo-50">
			<th scope="row" className="px-6 py-4 max-sm:pl-3 font-medium text-gray-900 whitespace-nowrap">
				<div className="flex items-center">
					{profilePicture?(
						<img 
							className="w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full" 
							src={`data:${profilePicture.contentType};base64,${profilePicture.data}`} 
							alt="Rounded avatar"
						/>
					):(
						<img 
							className="w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full" 
							src="https://docs.material-tailwind.com/img/face-1.jpg" 
							alt="Rounded avatar"
						/>
					)}
					<label className="ml-6 max-sm:ml-2">
						{firstname + " " + lastname}
					</label>
				</div>
			</th>
			<td className="px-6 py-4 max-sm:hidden">
				{phone}
			</td>
			<td className="px-6 py-4 max-sm:hidden">
				{createdAt}
			</td>
			<td className="px-6 py-4 max-sm:hidden">
				{updatedAt}
			</td>
			<td className="px-6 py-4 text-right">
				<Link to={`/main/users/${id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Profile</Link>
			</td>
		</tr>
	)	

}

const UsersTable = ({ users }) => {

	const dateOptions = { 
		year: 'numeric', 
		month: 'long', 
		day: 'numeric' 
	};

	return (

		<div className="relative overflow-x-auto shadow-lg shadow-black/5 rounded-lg">
			<table className="w-full text-sm text-left rtl:text-right text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-white border-b-2">
					<tr>
						<TableHead name={"Name"} imp={true}/>
						<TableHead name={"Phone Number"}/>
						<TableHead name={"Date Created"}/>
						<TableHead name={"Date Updated"}/>
						<TableHead imp={true}/>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<TableRow
							key={user._id}
							id={user._id}
							profilePicture={user.profilePicture}
							firstname={user.firstname}
							lastname={user.lastname}
							phone={user.phone}
							createdAt={new Date(user.createdAt).toLocaleDateString('en-US', dateOptions)}
							updatedAt={new Date(user.updatedAt).toLocaleDateString('en-US', dateOptions)}
						/> 
					))}

				</tbody>
			</table>
		</div>

	)

}

export default UsersTable