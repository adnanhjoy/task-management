import React, { useState } from 'react';
import { RiMenuFold2Fill, RiMenuFold3Fill } from 'react-icons/ri';
import author from '../../assets/author.webp'
import { IoIosArrowDown, IoMdArrowDropup } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../../redux/auth/authSlice';

const Topbar = ({ collapsed, toggleCollapsed }) => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(userLoggedOut({}))
    }
    return (
        <div className='bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between relative'>
            <button
                type="primary"
                onClick={toggleCollapsed}
                className='text-[#1A1E25] text-xl'
            >
                {collapsed ? <RiMenuFold2Fill /> : <RiMenuFold3Fill />}
            </button>
            <div className='flex items-center gap-x-2'>
                <img className='w-8 h-8 rounded-full' src={author} alt="author" />
                <button onClick={() => setOpenDropdown(!openDropdown)} className='flex items-center gap-1 hover:bg-gray-100 p-1 rounded'>Admin <IoIosArrowDown /></button>
            </div>

            <div className={`absolute bg-white rounded border right-4 top-16 w-28 py-2 ${openDropdown ? 'block' : 'hidden'}`}>
                <ul className='relative'>
                    <IoMdArrowDropup className='absolute -top-7 right-0 text-3xl text-gray-500' />
                    <li className='hover:bg-gray-100 cursor-pointer px-2 py-1'>Profile</li>
                    <li className='hover:bg-gray-100 cursor-pointer px-2 py-1'>Settings</li>
                    <li onClick={handleSignOut} className='hover:bg-gray-100 cursor-pointer px-2 py-1'>Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default Topbar;