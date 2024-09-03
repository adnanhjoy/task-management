import React from 'react';
import { HiOutlineArchiveBoxArrowDown, HiOutlineArchiveBoxXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useGetAllProjectQuery, useUpdateProjectMutation } from '../../redux/project/projectApi';
import toast from 'react-hot-toast';

const ProjectsTable = ({ archive }) => {
    const { data: projects } = useGetAllProjectQuery();
    const [updateProject, { isSuccess }] = useUpdateProjectMutation();

    const activeProjects = projects?.data?.filter(project => project?.status === 'active');
    const archivedProjects = projects?.data?.filter(project => project?.status === 'archived');


    const handleUpdateStatus = (data) => {
        updateProject({ id: data?.id, formData: { status: data?.status } })
        if (isSuccess) {
            toast.success(`status change to ${data?.status}`)
        }
    }


    return (
        <div className='bg-white mt-5 rounded-md'>
            {
                archive === 'archive' ?
                    <>
                        {
                            archivedProjects?.map(project =>
                                <div
                                    key={project?.id}
                                    className='p-4 border-b last:border-none flex items-center justify-between hover:cursor-pointer'
                                >
                                    <div className='flex items-center gap-x-2'>
                                        <p className='h-2 w-2 rounded-full' style={{ backgroundColor: project?.color }}></p>
                                        <h1 className='uppercase'>{project?.name}</h1>
                                    </div>
                                    <button onClick={() => handleUpdateStatus({ id: project?.id, status: 'active' })}><HiOutlineArchiveBoxXMark className='text-red-500' /></button>
                                </div>
                            )
                        }
                    </> :
                    <>
                        {
                            activeProjects?.map(project =>
                                <div
                                    key={project?.id}
                                    className='p-4 border-b last:border-none flex items-center justify-between hover:cursor-pointer'
                                >
                                    <Link to={`/projects/${project?.id}`} className='flex items-center gap-x-2'>
                                        <p className='h-2 w-2 rounded-full' style={{ backgroundColor: project?.color }}></p>
                                        <h1 className='uppercase'>{project?.name}</h1>
                                    </Link>
                                    <button onClick={() => handleUpdateStatus({ id: project?.id, status: 'archived' })}>
                                        <HiOutlineArchiveBoxArrowDown />
                                    </button>
                                </div>
                            )
                        }
                    </>
            }
        </div>
    );
};

export default ProjectsTable;