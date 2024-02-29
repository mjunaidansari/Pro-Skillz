import { createContext, useState } from "react"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Logout from "./Logout";

export const SidebarContext = createContext()

const Sidebar = ( {children} ) => {

	const [expanded, setExpanded] = useState(true)

	const toggleExpanded = () => {
		setExpanded(!expanded)
	}

	return (

		<aside className={`h-screen bg-gradient-to-tr from-indigo-500 to-indigo-700 ${expanded?"w-56":"w-16"}`}>
			<nav className="h-full flex flex-col border-r shadow-sm">
				
				{/* logo and button */}
				<div className="p-4 pb-2 flex justify-between items-center">
					<img
						src="https://img.logoipsum.com/243.svg"
						className={`overflow-hidden transition-all ${
						expanded ? "w-32" : "w-0"
						}`}
						alt=""
					/>
					<button className="pr-2 text-white" onClick={toggleExpanded}>
						{expanded? <FaChevronLeft/>: <FaChevronRight/>}
					</button>
				</div>

				<SidebarContext.Provider value={{expanded}}>
					{/* nav links */}
					<ul className="flex-1 px-3 overflow-y-auto">{children}</ul>
					{/* admin and logout */}
					<Logout name={"Junaid Ansari"}/>
				</SidebarContext.Provider>

			</nav>
		</aside>

	)

} 

export default Sidebar