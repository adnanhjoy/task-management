import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { FcFullTrash } from 'react-icons/fc';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { useDeleteTeamMutation } from '../../redux/about/aboutApi';

const DeleteModal = ({ deleteId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteMembers] = useDeleteTeamMutation()

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        deleteMembers(deleteId);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={showModal} className='bg-red-600 px-2 py-1.5 rounded-r text-white'>
                <RiDeleteBin7Line className='' />
            </button>
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" danger onClick={handleOk}>
                        Delete
                    </Button>
                ]}
            >
                <div className='flex flex-col items-center'>
                    <FcFullTrash className='text-9xl' />
                    <h1 className='text-2xl font-medium'>Are you sure ?</h1>
                </div>
            </Modal>
        </div>
    );
};

export default DeleteModal;
