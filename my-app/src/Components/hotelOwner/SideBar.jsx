import React from 'react'
import Dashboard from '../../Pages/hotelOwner/Dashboard'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

    const SideBarLinks = [
        { name: "Dashboard", path: "/Owner", icon: assets.dashboardIcon },
        { name: "Add Room", path: "/Owner/add-room", icon: assets.addIcon },
        { name: "List Room", path: "/Owner/list-room", icon: assets.listIcon },
    ]



    return (
        <div className='w-64 h-full border-r border-gray-200'>
            {SideBarLinks.map((item, index) => (
                <NavLink className={({ isActive }) => `flex items-center px-3 py-3 md:px-8 gap-3 
                ${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600"
                        : "hover:bg-gray-100/90 border-white text-gray-700"}`}
                    to={item.path} key={index} end="/owner">
                        <img className='min-w-6 min-h-6' src={item.icon} alt={item.name} />
                        <p className='md:block hidden text-center'>{item.name}</p>

                </NavLink>
            ))}
        </div>
    )
}

export default SideBar
