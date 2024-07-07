import React from 'react';
import { HiOutlineArchiveBoxArrowDown, HiOutlineArchiveBoxXMark } from 'react-icons/hi2';

const ProjectsTable = ({ archive }) => {
    return (
        <div className='bg-white mt-5 rounded-md'>
            <div className='p-4 border-b last:border-none flex items-center justify-between hover:cursor-pointer'>
                <div className='flex items-center gap-x-2'>
                    <p className='h-2 w-2 bg-red-600 rounded-full'></p>
                    <h1 className='uppercase'>New Project</h1>
                </div>
                {archive === 'archive' ? <HiOutlineArchiveBoxXMark className='text-red-500' /> : <HiOutlineArchiveBoxArrowDown />}
            </div>
            <div className='p-4 border-b last:border-none flex items-center justify-between hover:cursor-pointer'>
                <div className='flex items-center gap-x-2'>
                    <p className='h-2 w-2 bg-green-600 rounded-full'></p>
                    <h1 className='uppercase'>New Project</h1>
                </div>
                {archive === 'archive' ? <HiOutlineArchiveBoxXMark className='text-red-500' /> : <HiOutlineArchiveBoxArrowDown />}
            </div>
            <div className='p-4 border-b last:border-none flex items-center justify-between hover:cursor-pointer'>
                <div className='flex items-center gap-x-2'>
                    <p className='h-2 w-2 bg-blue-600 rounded-full'></p>
                    <h1 className='uppercase'>New Project</h1>
                </div>
                {archive === 'archive' ? <HiOutlineArchiveBoxXMark className='text-red-500' /> : <HiOutlineArchiveBoxArrowDown />}
            </div>
        </div>
    );
};

export default ProjectsTable;