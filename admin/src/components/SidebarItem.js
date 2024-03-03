import { useContext } from "react"
import { SidebarContext } from "./Sidebar";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const SidebarItem = ({icon, text, path, active}) => {

	const { expanded } = useContext(SidebarContext)

	return (
		<>
		<Link to={`/main/${path}`} className={`
			relative flex items-center py-2 px-3 my-1
			font-medium rounded-md cursor-pointer
			${active
				? "bg-indigo-800 text-white"
				: "hover:text-white hover:bg-indigo-800 "
			}
		`}>
			<div>
				{icon}
			</div>
			<span className={`
				overflow-hidden transition-all
				${expanded? "w-52 ml-3 visible":"w-0 invisible"}
			`}>
				{/* <Link to={`/main/${path}`}>{text}</Link> */}
				{/* <Link to="/users">{text}</Link> */}
				{text}
			</span>

		</Link>
		</>
	)

}

export default SidebarItem