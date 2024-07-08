import { Tooltip } from 'antd';
import React from 'react';
import author from '../../assets/author.webp'
import AssignMembersModal from '../../components/myTask/AssignMembersModal';

const ProjectDetailsPage = () => {
    return (
        <div>
            <div className='flex items-center gap-x-56'>
                <div className='flex items-center gap-x-2'>
                    <p className='h-2 w-2 bg-red-600 rounded-full'></p>
                    <h1 className='uppercase text-xl font-medium'>New Project</h1>
                </div>
                <div className='flex items-center gap-x-1'>
                    <Tooltip placement='bottom' title='Adnan'>
                        <img className='w-6 h-6 rounded-full cursor-pointer' src={author} alt="author" />
                    </Tooltip>
                    <Tooltip placement='bottom' title='Joy'>
                        <img className='w-6 h-6 rounded-full cursor-pointer' src={author} alt="author" />
                    </Tooltip>
                    <Tooltip placement='bottom' title='Farhan'>
                        <img className='w-6 h-6 rounded-full cursor-pointer' src={author} alt="author" />
                    </Tooltip>
                    <AssignMembersModal />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;