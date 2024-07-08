import React from 'react';
import ActionsButton from '../actionsButton/ActionsButton';

const MembersTable = () => {
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
                        <tr>
                            <td className="w-1/3 px-4 py-2 border-b">John Doe</td>
                            <td className="w-1/3 px-4 py-2 border-b text-start">a@gmail.com</td>
                            <td className="w-1/3 px-4 py-2 border-b text-start">Admin</td>
                            <td className="w-1/3 px-4 py-2 border-b"><ActionsButton /></td>
                        </tr>
                        <tr>
                            <td className="w-1/3 px-4 py-2 border-b">Jane Smith</td>
                            <td className="w-1/3 px-4 py-2 border-b text-start">aa@gmail.com</td>
                            <td className="w-1/3 px-4 py-2 border-b text-start">Manager</td>
                            <td className="w-1/3 px-4 py-2 border-b"><ActionsButton /></td>
                        </tr>
                        <tr>
                            <td className="w-1/3 px-4 py-2 border-b">Sam Brown</td>
                            <td className="w-1/3 px-4 py-2 border-b text-start">a@gmail.com</td>
                            <td className="w-1/3 px-4 py-2 border-b text-start">Member</td>
                            <td className="w-1/3 px-4 py-2 border-b"><ActionsButton /></td>
                        </tr>
                        <tr>
                            <td className="w-1/3 px-4 py-2 border-b">Sam Brown</td>
                            <td className="w-1/3 px-4 py-2 border-b text-start">a@gmail.com</td>
                            <td className="w-1/3 px-4 py-2 border-b text-start">Member</td>
                            <td className="w-1/3 px-4 py-2 border-b"><ActionsButton /></td>
                        </tr>
                        <tr>
                            <td className="w-1/3 px-4 py-2 border-b">Sam Brown</td>
                            <td className="w-1/3 px-4 py-2 border-b text-start">a@gmail.com</td>
                            <td className="w-1/3 px-4 py-2 border-b text-start">Member</td>
                            <td className="w-1/3 px-4 py-2 border-b"><ActionsButton /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MembersTable;