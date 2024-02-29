import { MdDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaUsers, FaUserAstronaut } from "react-icons/fa";
import { FaUserNinja } from "react-icons/fa";

import Sidebar from "../components/Sidebar"
import SidebarItem from "../components/SidebarItem"

const MainPage = () => {

	return (
		<div>
			<Sidebar>
				<SidebarItem icon={<MdDashboard/>} text="Dashboard" active={true}/>
				<SidebarItem icon={<FaUsers/>} text="Users" active={false}/>
				<SidebarItem icon={<FaUserAstronaut/>} text="Providers" active={false}/>
				<SidebarItem icon={<IoIosSettings/>} text="Settings" active={false}/>
			</Sidebar>
		</div>
	)

}

export default MainPage