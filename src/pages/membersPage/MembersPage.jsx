import React from 'react';
import MembersTable from '../../components/membersTable/MembersTable';
import CreateMember from '../../components/member/CreateMember';

const MembersPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-medium'>Team Members</h1>
                <div className='flex items-center gap-x-3'>
                    <CreateMember />
                </div>
            </div>
            <MembersTable />
        </div>
    );
};

export default MembersPage;