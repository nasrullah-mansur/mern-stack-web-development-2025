import { IoSearchOutline } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";
import React from "react";
import { FiFolderPlus } from "react-icons/fi";
import { GiOldMicrophone } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";


interface ListItemProps {
    title: string;
    icon: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ title, icon }) => {
    return (
        <li>
            <button className="px-3 mb-2 py-1.5 border border-gray-200 flex items-center w-full rounded-md cursor-pointer hover:bg-theme">
                {icon}
                <span className="ml-3 dark:text-white">{title}</span>
            </button>
        </li>
    )
}


function LeftSidebar() {
    return (
        <div className="p-2 border-r border-r-gray-300 w-[220px] h-full absolute left-0 top-0">
            <div className="border-[1.5px] border-theme rounded-md px-2 py-1.5 relative">
                <IoSearchOutline className="absolute top-1/2 left-[15px] text-3 -translate-1/2 dark:text-white" />
                <input className="pl-[20px] dark:text-white focus:outline-0 text-[13px]" type="search" placeholder="Search book ..." />
            </div>

            <div className="mt-2">
                <ul>
                    <ListItem title="Trending" icon={<RiFireLine className="dark:text-white" />} />
                    <ListItem title="New Releases" icon={<FiFolderPlus className="dark:text-white" />} />
                    <ListItem title="Coming Soon" icon={<GiOldMicrophone className="dark:text-white" />} />
                    <ListItem title="Favorites" icon={<FaRegHeart className="dark:text-white" />} />
                </ul>
            </div>
        </div>
    );
}

export default LeftSidebar;