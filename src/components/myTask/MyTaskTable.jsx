import React, { useState } from 'react';
import { Select, Tooltip } from 'antd';
import author from '../../assets/author.webp'

const MyTaskTable = () => {
    const [selectedValue, setSelectedValue] = useState('todo');

    const handleChange = (value) => {
        setSelectedValue(value);
    };
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md border-t">
                <thead>
                    <tr>
                        <th className="w-1/3 px-4 py-2 border-b text-start">Name</th>
                        <th className="w-1/3 px-4 py-2 border-b text-start">Assignee</th>
                        <th className="w-1/3 px-4 py-2 border-b text-start">Due Date</th>
                        <th className="w-1/3 px-4 py-2 border-b text-center">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-1/3 px-4 py-2 border-b">Navbar</td>
                        <td className="w-1/3 px-4 py-2 border-b text-start">
                            <div className='flex items-center'>
                                <Tooltip placement='bottom' title='Adnan'>
                                    <img className='w-6 h-6 rounded-full cursor-pointer' src={author} alt="author" />
                                </Tooltip>
                                <Tooltip placement='bottom' title='Joy'>
                                    <img className='w-6 h-6 rounded-full cursor-pointer' src={author} alt="author" />
                                </Tooltip>
                                <Tooltip placement='bottom' title='Farhan'>
                                    <img className='w-6 h-6 rounded-full cursor-pointer' src={author} alt="author" />
                                </Tooltip>
                            </div>
                        </td>
                        <td className="w-1/3 px-4 py-2 border-b text-start">12/07/2024</td>
                        <td className="w-1/3 px-4 py-2 border-b">
                            <Select
                                value={selectedValue}
                                onChange={handleChange}
                                className={`w-28 ${selectedValue === 'complete' ? 'custom-select' : 'custom-select-todo'}`}
                                options={[
                                    {
                                        value: 'todo',
                                        label: 'TO DO',
                                    },
                                    {
                                        value: 'complete',
                                        label: 'COMPLETE',
                                    },
                                ]}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyTaskTable;