import React from 'react'
import Navbar from '../../Components/hotelOwner/Navbar'
import SideBar from '../../Components/hotelOwner/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>

            {/* Top Navbar */}
            <Navbar />

            {/* Sidebar + Content */}
            <div className='flex flex-1'>

                {/* Sidebar */}
                <SideBar />

                {/* Main Content */}
                <div className='flex-1 p-6 md:p-10 overflow-y-auto'>
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default Layout