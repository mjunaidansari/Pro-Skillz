import { Route, Routes, Link} from 'react-router-dom';

import { MdDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaUsers, FaUserAstronaut } from "react-icons/fa";

import Sidebar from "../components/Sidebar"
import SidebarItem from "../components/SidebarItem"
import SamplePage from './SamplePage';

const MainPage = () => {

	return (
		<div className='flex w-full h-full'>
			<Sidebar>
				<SidebarItem icon={<MdDashboard/>} text="Dashboard" path="dashboard" active={true}/>
				<SidebarItem icon={<FaUsers/>} text="Users" path="users" active={false}/>
				<SidebarItem icon={<FaUserAstronaut/>} text="Providers" path="providers" active={false}/>
				<SidebarItem icon={<IoIosSettings/>} text="Settings" path="settings" active={false}/>
			</Sidebar>
			<div className='w-full h-dvh bg-black'>
				<Routes>
					<Route path="/main/dashboard" Component={<SamplePage title={"Dashboard"} index/>}/>
					<Route path="/main/users" element={<SamplePage title={"Users"}/>}/>
					<Route path="/main/providers" element={<SamplePage title={"Providers"}/>}/>
					<Route path="/main/settings" element={<SamplePage title={"Settings"}/>}/>
				</Routes>
			</div>
		</div>
	)

}

export default MainPage