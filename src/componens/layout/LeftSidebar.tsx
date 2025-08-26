import { IoSearchOutline } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";
import React, { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import { GiOldMicrophone } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import Search from "../../features/search/Search";


const ListItem = ({ title, icon }: {
    title: string,
    icon: React.ReactElement
}) => {
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

    const [isSearchShow, setIsSearchShow] = useState(false);

    // const handleClick = () => {
    //     setIsSearchShow((prev) => {
    //         if(prev == true) {
    //             return false;
    //         }
    //         return true;
    //     });

    //     setIsSearchShow(!isSearchShow);
    // }

    const isSearchHandler = () => {
        setIsSearchShow(!isSearchShow)

    }

    return (
        <div className="p-2 border-r border-r-gray-300 w-[220px] h-full absolute left-0 top-0">
            <div onClick={() => setIsSearchShow(!isSearchShow)} className="border-[1.5px] border-theme rounded-md px-2 py-1.5 relative">
                <IoSearchOutline className="absolute top-1/2 left-[15px] text-3 -translate-1/2 dark:text-white" />
                <span className="pl-[20px] dark:text-white text-[13px]">Search here ...</span>
            </div>

            <div className="mt-2">
                <ul>
                    <ListItem title="Trending" icon={<RiFireLine className="dark:text-white" />} />
                    <ListItem title="New Releases" icon={<FiFolderPlus className="dark:text-white" />} />
                    <ListItem title="Coming Soon" icon={<GiOldMicrophone className="dark:text-white" />} />
                    <ListItem title="Favorites" icon={<FaRegHeart className="dark:text-white" />} />
                </ul>
            </div>



            {/* {isSearchShow ? <Search /> : ""} */}
            {isSearchShow && <Search isSearch={isSearchHandler} />}

        </div>
    );
}

export default LeftSidebar;