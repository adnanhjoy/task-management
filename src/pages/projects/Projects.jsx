import React from 'react';
import { IoArchiveOutline, IoFolderOutline } from 'react-icons/io5';

const ProjectsPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-medium'>Projects</h1>
                <div className='flex items-center gap-x-3'>
                    <button className='flex items-center gap-1 text-sm bg-gray-200 px-2 py-1.5 rounded-md'><IoFolderOutline /> Active</button>
                    <button className='flex items-center gap-1 text-sm bg-gray-200 px-2 py-1.5 rounded-md'><IoArchiveOutline /> Archived</button>
                    <button className='bg-blue-600 px-2 py-1.5 text-sm text-white rounded-md'>Create Project</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;