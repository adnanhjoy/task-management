import { Button, Modal, Tooltip } from 'antd';
import React, { useState } from 'react';
import { MdOutlineAddRoad } from 'react-icons/md';
import author from '../../assets/author.webp'
import { useGetAllTeamQuery } from '../../redux/about/aboutApi';
import { useAssignProjectWithTeamMembersMutation } from '../../redux/project/projectApi';

const AssignMembersModal = ({ projectId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: teamMembers } = useGetAllTeamQuery();
    const [teamMember, setTeamMember] = useState();
    const [assignMembers] = useAssignProjectWithTeamMembersMutation();


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        const data = {
            projectId,
            teamMemberId: teamMember

        }

        assignMembers(data)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleTeamMember = (id) => {
        setTeamMember(id)
    }
    return (
        <div>
            <Tooltip placement='bottom' title='Add/Remove Members'>
                <button onClick={showModal} className='border border-dashed border-gray-400 p-1 rounded-full text-gray-600'>
                    <MdOutlineAddRoad />
                </button>
            </Tooltip>
            <Modal
                title="Team Members"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Save
                    </Button>
                ]}
            >

                <div className='border rounded-md'>
                    <input className='w-full rounded-md p-2 outline-none border-b' placeholder='Search' type="text" name="" id="" />
                    <div className='max-h-60 overflow-x-auto'>
                        {
                            teamMembers?.data?.map(member =>
                                <button
                                    key={member?.id}
                                    className='flex items-center gap-2 p-2 border-b last:border-none'
                                    onClick={() => handleTeamMember(member?.id)}
                                >
                                    <img className='w-8 h-8 rounded-full' src={author} alt="author" />
                                    <div>
                                        <h1 className='font-medium mb-0'>{member?.name}</h1>
                                        <p>{member?.email}</p>
                                    </div>
                                </button>
                            )
                        }
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AssignMembersModal;