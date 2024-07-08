import React from 'react';
import { LiaEdit } from 'react-icons/lia';
import { RiDeleteBin7Line } from 'react-icons/ri';

const ActionsButton = () => {
    return (
        <div className='flex items-center justify-end'>
            <button className='bg-cyan-700 px-2 py-1.5 rounded-s text-white'>
                <LiaEdit className='' />
            </button>
            <button className='bg-red-600 px-2 py-1.5 rounded-r text-white'>
                <RiDeleteBin7Line className='' />
            </button>
        </div>
    );
};

export default ActionsButton;