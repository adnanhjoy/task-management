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
                            <th className="w-1/3 px-4 py-2 border-b text-center">Role</th>
                            <th className="w-1/3 px-4 py-2 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-1/3 px-4 py-2 border-b">John Doe</td>
                            <td className="w-1/3 px-4 py-2 border-b text-center">Admin</td>
                            <td className="w-1/3 px-4 py-2 border-b"><ActionsButton /></td>
                        </tr>
                        <tr>
                            <td className="w-1/3 px-4 py-2 border-b">Jane Smith</td>
                            <td className="w-1/3 px-4 py-2 border-b text-center">Manager</td>
                            <td className="w-1/3 px-4 py-2 border-b"><ActionsButton /></td>
                        </tr>
                        <tr>
                            <td className="w-1/3 px-4 py-2 border-b">Sam Brown</td>
                            <td className="w-1/3 px-4 py-2 border-b text-center">Member</td>
                            <td className="w-1/3 px-4 py-2 border-b"><ActionsButton /></td>
                        </tr>
                        <tr>
                            <td className="w-1/3 px-4 py-2 border-b">Sam Brown</td>
                            <td className="w-1/3 px-4 py-2 border-b text-center">Member</td>
                            <td className="w-1/3 px-4 py-2 border-b"><ActionsButton /></td>
                        </tr>
                        <tr>
                            <td className="w-1/3 px-4 py-2 border-b">Sam Brown</td>
                            <td className="w-1/3 px-4 py-2 border-b text-center">Member</td>
                            <td className="w-1/3 px-4 py-2 border-b"><ActionsButton /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MembersTable;