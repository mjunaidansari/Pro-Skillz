import { useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom";

import { SidebarContext } from "./Sidebar";

const SidebarItem = ({icon, text, path}) => {

	const location = useLocation()
	const isActive = location.pathname === `/main/${path}`

	const { expanded } = useContext(SidebarContext)

	return (
		<>
		<Link
			to={`/main/${path}`} 
			className={`
				relative flex items-center py-2 px-3 my-1
				font-medium rounded-md cursor-pointer
				${isActive
					? "bg-indigo-800 text-white"
					: "hover:text-white hover:bg-indigo-800 "
				}
			`}
		>
			<div>
				{icon}
			</div>
			<span className={`
				overflow-hidden transition-all
				${expanded? "w-52 ml-3 visible":"w-0 invisible"}
			`}>
				{text}
			</span>

		</Link>
		</>
	)

}

export default SidebarItem