import React, { useState } from 'react';
import { IoFolderOutline } from 'react-icons/io5';
import ProjectsTable from '../../components/projectsTable/ProjectsTable';
import { HiOutlineArchiveBoxArrowDown } from 'react-icons/hi2';
import CreateProjects from '../../components/projects/CreateProjects';

const ProjectsPage = () => {
    const [archive, setArchive] = useState('active')
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-medium'>Projects</h1>
                <div className='flex items-center gap-x-3'>
                    <button onClick={() => setArchive('active')} className={`flex items-center gap-1 text-sm px-2 py-1.5 rounded-md ${archive === 'active' ? 'bg-gray-200' : ''}`}><IoFolderOutline /> Active</button>
                    <button onClick={() => setArchive('archive')} className={`flex items-center gap-1 text-sm px-2 py-1.5 rounded-md ${archive === 'archive' ? 'bg-gray-200' : ''}`}><HiOutlineArchiveBoxArrowDown /> Archived</button>
                    <CreateProjects />
                </div>
            </div>
            <ProjectsTable archive={archive} />
        </div>
    );
};

export default ProjectsPage;