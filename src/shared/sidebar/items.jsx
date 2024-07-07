import { GoTasklist } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoFolderOutline } from "react-icons/io5";

export const items = [
    {
        key: '1',
        icon: <GoTasklist />,
        label: 'My Task',
    },
    {
        key: '2',
        icon: <IoFolderOutline />,
        label: 'Projects',
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