import React from 'react';
import { LiaEdit } from 'react-icons/lia';
import { RiDeleteBin7Line } from 'react-icons/ri';
import DeleteModal from '../modal/DeleteModal';

const ActionsButton = ({ deleteId }) => {
    return (
        <div className='flex items-center justify-end'>
            <button className='bg-cyan-700 px-2 py-1.5 rounded-s text-white'>
                <LiaEdit className='' />
            </button>
            <DeleteModal deleteId={deleteId} />
        </div>
    );
};

export default ActionsButton;