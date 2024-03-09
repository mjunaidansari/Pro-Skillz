import { createContext, useEffect, useState } from "react"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Logout from "./Logout";

export const SidebarContext = createContext()

const Sidebar = ( {expanded, setExpanded, children} ) => {

	// const [expanded, setExpanded] = useState(true)

	const toggleExpanded = () => {
		setExpanded(!expanded)
	}

	// checking the width of screen to hide the sidebar
	const checkViewportWidth = () => {

		const viewportWidth = window.innerWidth || document.documentElement.clientWidth
		const min = 600;

		if(viewportWidth < min) {
			setExpanded(false)
		}

	}

	useEffect(() => {
		checkViewportWidth()
	}, [])

	return (

		<aside className={`fixed h-dvh bg-gradient-to-tr from-indigo-500 to-indigo-700 ${expanded?"w-56":"w-16"}`}>
			<nav className="h-full w-full flex flex-col border-r shadow-sm">
				
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
					<div className="flex-1 px-3 overflow-y-auto text-gray-300">{children}</div>
					{/* admin and logout */}
					<Logout name={"Junaid Ansari"}/>
				</SidebarContext.Provider>

			</nav>
		</aside>

	)

} 

export default Sidebar