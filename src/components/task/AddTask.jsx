import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { CiCalendarDate } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';

const AddTask = () => {
    return (
        <div className='flex items-center justify-between my-4'>
            <button className='hover:bg-gray-200 p-1'><IoIosArrowForward /></button>
            <input className='bg-[#f4f4f4] w-full px-2' defaultValue={'NEW PROJECT'} type="text" name="" id="" />
            <label htmlFor="taskdate">
                <CiCalendarDate />
            </label>
                <input className='hidden' type="date" name="" id="taskdate" />

            <button className='hover:bg-gray-200 p-1 text-gray-400 hover:text-gray-500 rounded-full'><FaUser /></button>
            <button className='hover:bg-gray-200 p-1 rounded-full'><BsThreeDots /></button>
        </div>
    );
};

export default AddTask;