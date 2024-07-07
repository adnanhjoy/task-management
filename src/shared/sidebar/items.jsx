import { GoTasklist } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoFolderOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const items = [
    {
        key: '1',
        icon: <GoTasklist />,
        label: <Link to='/task'>My Task</Link>,
    },
    {
        key: '2',
        icon: <IoFolderOutline />,
        label: <Link to='/projects'>Projects</Link>,
    },
    {
        key: '3',
        icon: <HiOutlineUserGroup />,
        label: 'Members',
    },
    {
        key: 'sub1',
        label: 'All Projects',
        children: [
            {
                key: '5',
                label: 'Option 5',
            },
            {
                key: '6',
                label: 'Option 6',
            },
            {
                key: '7',
                label: 'Option 7',
            },
            {
                key: '8',
                label: 'Option 8',
            },
        ],
    },
];