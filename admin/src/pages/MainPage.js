import {Switch, Route, Routes} from 'react-router-dom';

import { MdDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaUsers, FaUserAstronaut } from "react-icons/fa";
import { FaUserNinja } from "react-icons/fa";

import Sidebar from "../components/Sidebar"
import SidebarItem from "../components/SidebarItem"
import UsersPage from './UsersPage';

const MainPage = () => {

	return (
		<div>
			{/* <div> */}
				<Sidebar>
					<SidebarItem icon={<MdDashboard/>} text="Dashboard" path="dashboard" active={true}/>
					<SidebarItem icon={<FaUsers/>} text="Users" path="users" active={false}/>
					<SidebarItem icon={<FaUserAstronaut/>} text="Providers" path="providers" active={false}/>
					<SidebarItem icon={<IoIosSettings/>} text="Settings" path="settings" active={false}/>
				</Sidebar>
			{/* </div> */}
			{/* <div>
				<Routes>
					<Route path='/main/dashboard' element={<UsersPage/>}/>
					<Route path='/main/users' element={<UsersPage/>}/>
					<Route path='/main/providers' element={<UsersPage/>}/>
					<Route path='/main/settings' element={<UsersPage/>}/>
				</Routes>
			</div> */}
		</div>
	)

}

export default MainPage