import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useCreateProjectMutation } from '../../redux/project/projectApi';
import toast from 'react-hot-toast';

const CreateProjects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [selectedColor, setSelectedColor] = useState('#f44336');
    const [addProject, { isLoading, isSuccess }] = useCreateProjectMutation();

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        const formData = {
            name: projectName,
            color: selectedColor,
            status: 'active'
        }
        addProject(formData)
        setIsModalOpen(false)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const colors = [
        '#f44336', '#ffeb3b', '#cddc39', '#03a9f4',
        '#8bc34a', '#4caf50', '#009688', '#00bcd4',
        '#2196f3', '#3f51b5', '#673ab7', '#9c27b0', '#e91e63'
    ];

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success('Project Addedd Successfull');
        }
    }, [isSuccess])

    return (
        <div>
            <button onClick={showModal} className='bg-blue-600 px-2 py-1.5 text-sm text-white rounded-md'>Create Project</button>
            <Modal
                title="Create Projects"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        {isLoading ? 'Creating..' : 'Create Project'}
                    </Button>
                ]}
            >
                <label>Name</label>
                <input onChange={(e) => setProjectName(e.target.value)} value={projectName} className='block w-full border outline-none p-2 rounded mb-4' type="text" placeholder='Name' />
                <label>Color</label>
                <div style={{ margin: '10px 0' }} className='flex items-center'>
                    {colors.map(color => (
                        <span
                            key={color}
                            onClick={() => handleColorClick(color)}
                            className={`w-6 h-6 m-1 cursor-pointer rounded text-white flex items-center justify-center`}
                            style={{
                                backgroundColor: color,
                            }}
                        >
                            {selectedColor === color ? <FaCheck /> : ''}
                        </span>
                    ))}
                </div>
            </Modal>
        </div>
    );
};

export default CreateProjects;