import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { SidebarContext } from "./Sidebar";


const Logout = ({name}) => {

	const { expanded } = useContext(SidebarContext)

	return (
		<div className={`flex items-center m-3 p-3 hover:bg-indigo-800 text-white ${expanded?" rounded-md":"rounded-full"}`} onClick={() => console.log("clicked")}>
			<FaUser/>
			<div className={`${expanded?"ml-3 visible":"w-0 invisible"}`}>
				{name}
			</div>
		</div>
	)

}

export default Logout