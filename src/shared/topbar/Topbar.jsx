import React from 'react';
import { RiMenuFold2Fill, RiMenuFold3Fill } from 'react-icons/ri';

const Topbar = ({ collapsed, toggleCollapsed }) => {
    return (
        <div className='bg-white shadow-sm border-b p-4'>
            <button
                type="primary"
                onClick={toggleCollapsed}
                className='text-[#1A1E25] text-xl'
            >
                {collapsed ? <RiMenuFold2Fill /> : <RiMenuFold3Fill />}
            </button>
        </div>
    );
};

export default Topbar;