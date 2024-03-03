import { RiProfileLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";

const LogoutDropdown = ({hidden}) => {

	return (
		<ul className={`${hidden?"hidden":"block"} relative bg-indigo-800 text-gray-300 m-3 shadow-lg rounded-md overflow-hidden`}>
			<li className="flex items-center m-2 p-2 rounded-md cursor-pointer hover:bg-indigo-900 hover:text-white">
				<RiProfileLine/>
				<label className="pl-2">
					Profile
				</label>
			</li>
			<li className="flex items-center m-2 p-2 rounded-md cursor-pointer hover:bg-indigo-900 hover:text-white">
				<MdOutlineLogout/>
				<label className="pl-2">
					Logout
				</label>
			</li>
		</ul>
	)

}

export default LogoutDropdown