import React from 'react';
import DeleteModal from '../modal/DeleteModal';
import CreateMember from '../member/CreateMember';
import { useGetSingleTeamQuery } from '../../redux/about/aboutApi';

const ActionsButton = ({ deleteId }) => {
    const { data: teamMember } = useGetSingleTeamQuery(deleteId)
    return (
        <div className='flex items-center justify-end'>
            <CreateMember
                teamMember={teamMember?.data?.[0]}
            />
            <DeleteModal deleteId={deleteId} />
        </div>
    );
};

export default ActionsButton;