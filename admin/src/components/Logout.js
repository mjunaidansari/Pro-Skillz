import { useState, useContext, useEffect } from "react";
import { FaUser } from "react-icons/fa";

import LogoutDropdown from "./LogoutDropdown";

import { SidebarContext } from "./Sidebar";


const Logout = ({name}) => {

	const [hidden, setHidden] = useState(false);

	const toggleVisibility = () => setHidden(!hidden)

	const { expanded } = useContext(SidebarContext)

	// to automatically close logout dropdown when sidebar is closed
	useEffect(() => {
		if(expanded===false && hidden===false){
			toggleVisibility()
		}
	}, [expanded])

	return (
		<div className={`${expanded?"block":"hidden"}`}>
			<LogoutDropdown hidden={hidden}/>
			<div 
				className={`
					flex items-center m-3 p-3 hover:bg-indigo-800 text-white cursor-pointer 
					${expanded?"rounded-md":"rounded-full"}
					${hidden?"bg-none":"bg-indigo-800"}
				`} 
				onClick={toggleVisibility}
			>
				<FaUser/>
				<div className={`${expanded?"ml-3 visible":"w-0 invisible"}`}>
					{name}
				</div>
			</div>
		</div>
	)

}

export default Logout