import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useCreateTeamMutation, useUpdateTeamMutation } from '../../redux/about/aboutApi';
import { LiaEdit } from 'react-icons/lia';

const CreateMember = ({ teamMember }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id, name, email, password, role } = teamMember || {};
    const [teamMembers, setTeamMembers] = useState({
        name: name ? name : '',
        email: email ? email : '',
        password: password ? password : '',
        role: role ? role : ''
    });
    const [addTeamMembers] = useCreateTeamMutation();
    const [updateTeamMembers] = useUpdateTeamMutation();


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        id ? updateTeamMembers(id, teamMembers) : addTeamMembers(teamMembers);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setTeamMembers(prevMembers => ({
            ...prevMembers,
            [name]: value
        }));
    };


    return (
        <div>
            {
                email ?
                    <button onClick={showModal} className='bg-cyan-700 px-2 py-1.5 rounded-s text-white'>
                        <LiaEdit />
                    </button> :
                    <button onClick={showModal} className='bg-blue-600 px-2 py-1.5 text-sm text-white rounded-md'>Create Member</button>
            }

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
                <form>
                    <label>Name</label>
                    <input
                        name="name"
                        onChange={handleChange}
                        className='block w-full border outline-none p-2 rounded mb-4'
                        type="text"
                        placeholder='Name'
                        defaultValue={name}
                    />
                    <label>Email</label>
                    <input
                        name="email"
                        onChange={handleChange}
                        className='block w-full border outline-none p-2 rounded mb-4'
                        type="text"
                        placeholder='Email'
                        defaultValue={email}
                    />
                    <label>Password</label>
                    <input
                        name="password"
                        onChange={handleChange}
                        className='block w-full border outline-none p-2 rounded mb-4'
                        type="text"
                        placeholder='Password'
                    />
                    <label>Role</label>
                    <select
                        name="role"
                        onChange={handleChange}
                        value={role}
                        className='block w-full border outline-none p-2 rounded mb-4'
                    >
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Member">Member</option>
                    </select>
                </form>
            </Modal>
        </div>
    );
};

export default CreateMember;
