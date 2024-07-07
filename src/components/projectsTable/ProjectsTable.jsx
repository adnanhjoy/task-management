import React from 'react';
import { IoArchiveOutline } from 'react-icons/io5';

const ProjectsTable = () => {
    return (
        <div className='bg-white mt-5 rounded-md'>
            <div className='p-4 border-b last:border-none flex items-center justify-between hover:cursor-pointer'>
                <div className='flex items-center gap-x-2'>
                    <p className='h-2 w-2 bg-red-600 rounded-full'></p>
                    <h1 className='uppercase'>New Project</h1>
                </div>
                <IoArchiveOutline />
            </div>
            <div className='p-4 border-b last:border-none flex items-center justify-between hover:cursor-pointer'>
                <div className='flex items-center gap-x-2'>
                    <p className='h-2 w-2 bg-green-600 rounded-full'></p>
                    <h1 className='uppercase'>New Project</h1>
                </div>
                <IoArchiveOutline />
            </div>
            <div className='p-4 border-b last:border-none flex items-center justify-between hover:cursor-pointer'>
                <div className='flex items-center gap-x-2'>
                    <p className='h-2 w-2 bg-blue-600 rounded-full'></p>
                    <h1 className='uppercase'>New Project</h1>
                </div>
                <IoArchiveOutline />
            </div>
        </div>
    );
};

export default ProjectsTable;