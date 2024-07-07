import React from 'react';
import MembersTable from '../../components/membersTable/MembersTable';

const MembersPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-medium'>Team Members</h1>
                <div className='flex items-center gap-x-3'>
                    <button className='bg-blue-600 px-2 py-1.5 text-sm text-white rounded-md'>Create Member</button>
                </div>
            </div>
            <MembersTable />
        </div>
    );
};

export default MembersPage;