import React from 'react';
import MyTaskTable from '../../components/myTask/MyTaskTable';

const MyTaskPage = () => {
    return (
        <div>
            <h1 className='text-2xl font-medium'>My Task</h1>
            <div className='bg-white rounded-md mt-5'>
                <h3 className='p-4'>Upcoming</h3>
                <MyTaskTable />
                
            </div>
        </div>
    );
};

export default MyTaskPage;