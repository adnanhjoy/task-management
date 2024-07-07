import React from 'react';
import { Menu } from 'antd';
import { items } from './items';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className='bg-[#1A1E25]'>
            <Link className='flex items-center justify-center py-2.5 border-b-gray-500 border-opacity-20 border-b'>
                <h1 className='text-white text-3xl font-semibold'>DIU</h1>
            </Link>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
                items={items}
                className='min-h-[90.8vh] bg-[#1A1E25] custom-menu'
            />
        </div>
    );
};

export default Sidebar;