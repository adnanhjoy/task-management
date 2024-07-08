import { Button, Modal, Tooltip } from 'antd';
import React, { useState } from 'react';
import { MdOutlineAddRoad } from 'react-icons/md';
import author from '../../assets/author.webp'

const AssignMembersModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
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
                        <div className='flex items-center gap-2 p-2 border-b last:border-none'>
                            <img className='w-8 h-8 rounded-full' src={author} alt="author" />
                            <div>
                                <h1 className='font-medium mb-0'>Adnan Hossain</h1>
                                <p>adnanhjoy@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 p-2 border-b last:border-none'>
                            <img className='w-8 h-8 rounded-full' src={author} alt="author" />
                            <div>
                                <h1 className='font-medium mb-0'>Adnan Hossain</h1>
                                <p>adnanhjoy@gmail.com</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AssignMembersModal;