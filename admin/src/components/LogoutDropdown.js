import { RiProfileLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";

const LogoutDropdown = ({hidden}) => {

	return (
		<ul className={`${hidden?"hidden":"block"} relative bg-indigo-800 text-white m-3 shadow-lg rounded-md overflow-hidden`}>
			<li className="flex items-center m-2 p-2 rounded-md cursor-pointer hover:bg-indigo-900">
				<RiProfileLine/>
				<label className="pl-2">
					Profile
				</label>
			</li>
			<li className="flex items-center m-2 p-2 rounded-md cursor-pointer hover:bg-indigo-900">
				<MdOutlineLogout/>
				<label className="pl-2">
					Logout
				</label>
			</li>
		</ul>
	)

}

export default LogoutDropdown