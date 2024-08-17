import React from 'react';
import ActionsButton from '../actionsButton/ActionsButton';
import { useGetAllTeamQuery } from '../../redux/about/aboutApi';

const MembersTable = () => {
    const { data: teamMembers } = useGetAllTeamQuery();

    return (
        <div className='mt-5'>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-md">
                    <thead>
                        <tr>
                            <th className="w-1/3 px-4 py-2 border-b text-start">Name</th>
                            <th className="w-1/3 px-4 py-2 border-b text-start">Email</th>
                            <th className="w-1/3 px-4 py-2 border-b text-start">Role</th>
                            <th className="w-1/3 px-4 py-2 border-b text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teamMembers?.data?.map(member =>
                                <tr key={member?.id}>
                                    <td className="w-1/3 px-4 py-2 border-b">{member?.name}</td>
                                    <td className="w-1/3 px-4 py-2 border-b text-start">{member?.email}</td>
                                    <td className="w-1/3 px-4 py-2 border-b text-start">{member?.role}</td>
                                    <td className="w-1/3 px-4 py-2 border-b"><ActionsButton deleteId={member?.id} /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MembersTable;