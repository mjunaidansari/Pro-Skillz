import { useEffect } from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';

import { MdDashboard, MdHomeRepairService } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaUsers, FaUserAstronaut } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";

import Sidebar from "../components/Sidebar"
import SidebarItem from "../components/SidebarItem"
import SamplePage from './SamplePage'
import Dashboard from './Dashboard'
import UsersPage from './UsersPage'
import UserProfile from './UserProfile'

const MainPage = () => {

	const navigate = useNavigate();

	useEffect(() => {
		navigate('/main/dashboard');
	}, [])

	return (
		<div className='flex'>
			<Sidebar>
				<SidebarItem icon={<MdDashboard/>} text="Dashboard" path="dashboard"/>
				<SidebarItem icon={<FaUsers/>} text="Users" path="users"/>
				<SidebarItem icon={<FaUserAstronaut/>} text="Providers" path="providers"/>
				<SidebarItem icon={<BiSolidCategoryAlt/>} text="Categories" path="categories"/>
				<SidebarItem icon={<MdHomeRepairService/>} text="Services" path="services"/>
				<SidebarItem icon={<IoIosSettings/>} text="Settings" path="settings" />
			</Sidebar>
			<div className='w-full bg-gray-300'>
			{/* <div> */}
				<Routes>
					<Route path="/dashboard" element={<Dashboard/>}/>
					<Route path="/users" element={<UsersPage/>}/>
					<Route path="/users/:id" element={<UserProfile/>}/>
					<Route path="/providers" element={<SamplePage title={"Providers"}/>}/>
					<Route path="/categories" element={<SamplePage title={"Categories"}/>}/>
					<Route path="/services" element={<SamplePage title={"Services	"}/>}/>
					<Route path="/settings" element={<SamplePage title={"Settings"}/>}/>
				</Routes>
			</div>
		</div>
	)

}

export default MainPage