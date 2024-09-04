import { GoTasklist } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoFolderOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const items = [
    {
        key: '/',
        icon: <GoTasklist />,
        label: <Link to='/'>My Task</Link>,
    },
    {
        key: '/projects',
        icon: <IoFolderOutline />,
        label: <Link to='/projects'>Projects</Link>,
    },
    {
        key: '/members',
        icon: <HiOutlineUserGroup />,
        label: <Link to='/members'>Members</Link>,
    },
    // {
    //     key: 'sub1',
    //     label: 'All Projects',
    //     children: [
    //         {
    //             key: '5',
    //             label: 'Option 5',
    //         },
    //         {
    //             key: '6',
    //             label: 'Option 6',
    //         },
    //         {
    //             key: '7',
    //             label: 'Option 7',
    //         },
    //         {
    //             key: '8',
    //             label: 'Option 8',
    //         },
    //     ],
    // },
];