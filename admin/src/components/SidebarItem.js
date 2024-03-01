import { useContext } from "react"
import { SidebarContext } from "./Sidebar";
import { IoSettings } from "react-icons/io5";

const SidebarItem = ({icon, text, active}) => {

	const { expanded } = useContext(SidebarContext)

	return (
		<>
		<li className={`
			relative flex items-center py-2 px-3 my-1
			font-medium text-white rounded-md cursor-pointer
			transition-colors
			${active
				// ? "bg-gradient-to-tr from-indigo-800 to-indigo-900"
				? "bg-indigo-800"
				: "hover:bg-indigo-800"
			}
		`}>
			<div>
				{icon}
			</div>
			<span className={`
				overflow-hidden transition-all
				${expanded? "w-52 ml-3 visible":"w-0 invisible"}
			`}>
				{text}
			</span>

		</li>
		</>
	)

}

export default SidebarItem