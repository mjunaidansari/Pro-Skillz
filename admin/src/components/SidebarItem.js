import { useContext, useState } from "react"
import { Link } from "react-router-dom";

import { IoSettings } from "react-icons/io5";

import { SidebarContext } from "./Sidebar";

const SidebarItem = ({icon, text, path}) => {

	const [active, setActive] = useState(true)

	const { expanded } = useContext(SidebarContext)

	return (
		<>
		<Link
			to={`/main/${path}`} 
			onClick={() => setActive(!active)}
			className={`
				relative flex items-center py-2 px-3 my-1
				font-medium rounded-md cursor-pointer
				${active
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