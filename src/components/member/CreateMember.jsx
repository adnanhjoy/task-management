import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const CreateMember = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState('');

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        console.log('Project Created:', projectName, selectedColor);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <button onClick={showModal} className='bg-blue-600 px-2 py-1.5 text-sm text-white rounded-md'>Create Member</button>
            <Modal
                title="Create Member"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Create Member
                    </Button>
                ]}
            >
                <label>Name</label>
                <input onChange={(e) => setProjectName(e.target.value)} value={projectName} className='block w-full border outline-none p-2 rounded mb-4' type="text" placeholder='Name' />
                <label>Email</label>
                <input onChange={(e) => setProjectName(e.target.value)} value={projectName} className='block w-full border outline-none p-2 rounded mb-4' type="text" placeholder='Email' />
                <label>Password</label>
                <input onChange={(e) => setProjectName(e.target.value)} value={projectName} className='block w-full border outline-none p-2 rounded mb-4' type="text" placeholder='Password' />
                <label>Role</label>
                <select name="" id="" className='block w-full border outline-none p-2 rounded mb-4'>
                    <option value="">Admin</option>
                    <option value="">Manager</option>
                    <option value="">Member</option>
                </select>

            </Modal>
        </div>
    );
};

export default CreateMember;