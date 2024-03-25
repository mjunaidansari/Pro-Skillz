import { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";

import LogoutDropdown from "./LogoutDropdown";

import { SidebarContext } from "./Sidebar";

const Logout = ({name}) => {

	const [hidden, setHidden] = useState(true)
	const { expanded } = useContext(SidebarContext)
	const dropdownRef = useRef(null)

	const toggleVisibility = () => setHidden(!hidden)
	
	// to handle click outside the component
	const handleClickOutside = (event) => {
		if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
			setHidden(true)
		}
	}

	// to close the dropdown if user clicks outside the component
	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
	
		// Cleanup function to remove event listener when the component unmounts
		return () => {
		  document.removeEventListener("click", handleClickOutside);
		};
	  }, []);

	return (
		<div 
			className={`${expanded?"block text-gray-300":"hidden"}`} 
			ref={dropdownRef}
		>
			<LogoutDropdown hidden={hidden}/>
			<div 
				className={`
					flex items-center m-3 p-3 hover:bg-indigo-800 hover:text-white cursor-pointer rounded-md 
					${hidden?"bg-none":"bg-indigo-800 text-white"}
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