import { Tooltip } from 'antd';
import React from 'react';
import author from '../../assets/author.webp'
import AssignMembersModal from '../../components/myTask/AssignMembersModal';
import AddTask from '../../components/task/AddTask';
import { useParams } from 'react-router-dom';
import { useGetProjectWithTeamMembersQuery } from '../../redux/project/projectApi';

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const { data: project } = useGetProjectWithTeamMembersQuery(id);
    
    const { id: projectId, name, color, status } = project?.project || {};
    return (
        <div>
            <div className='flex items-center gap-x-56'>
                <div className='flex items-center gap-x-2'>
                    <p className='h-2 w-2 rounded-full' style={{ backgroundColor: color }}></p>
                    <h1 className='uppercase text-xl font-medium'>{name}</h1>
                </div>
                <div className='flex items-center gap-x-1'>
                    {
                        project?.teamMembers?.map(member =>
                            <Tooltip
                                key={member?.id}
                                placement='bottom'
                                title={member?.name}
                            >
                                <img className='w-6 h-6 rounded-full cursor-pointer' src={author} alt="author" />
                            </Tooltip>
                        )
                    }
                    <AssignMembersModal />
                </div>
            </div>
            <AddTask />
        </div>
    );
};

export default ProjectDetailsPage;