import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Sidebar from "../components/core/Dashboard/Sidebar"

const Dashboard = () => {
    const { loading: authLoading } = useSelector((state) => state.auth);
    const { loading: profileLoading } = useSelector((state) => state.profile);

    if (profileLoading || authLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Sidebar */}
            <Sidebar className="w-full lg:w-1/5 relative" />

            {/* Main Content */}
            <div className='flex-1 overflow-auto'>
                <div className='flex flex-col mx-auto w-full lg:w-11/12 max-w-[1000px] py-10 px-4 sm:px-6'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
