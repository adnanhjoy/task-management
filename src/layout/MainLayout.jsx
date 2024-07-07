import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/sidebar/Sidebar';
import Topbar from '../shared/topbar/Topbar';

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div className='flex'>
            <div className={`ease-in-out duration-500 ${collapsed ? 'w-16' : 'w-64'}`}>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Topbar
                    collapsed={collapsed}
                    toggleCollapsed={toggleCollapsed} />
                <div className='p-4 min-h-[90.5vh] bg-[#f4f4f4]'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;