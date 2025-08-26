/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const SearchItem = () => {
    return (
        <div className="flex px-[30px] bg-theme/20 py-2 mb-3">
            <div className="w-[50px]">
                <img className="w-[50px]" src="./products/i-1.jpg" alt="abc" />
            </div>
            <div className="ml-[20px]">
                <h4 className="text-[14px]">Lorem ipsum book name here</h4>
                <span className="text-[10px] block">Lorem ipsum book name here</span>
                <strong>BDT: 200 TK</strong>
            </div>
        </div>
    )
}

function Search({ isSearch }: { isSearch: any }) {
    return (
        <div className="w-full h-screen fixed top-0 left-0 bg-white/30 backdrop-blur-md z-10 flex justify-center items-start">
            <div className="w-[620px] py-5 bg-white rounded-md mt-[60px]">
                <div className="relative px-5 border-b border-b-gray-300 pb-3">
                    <IoSearch className="absolute top-1.5" />
                    <input className=" w-full pl-5 focus:outline-0" type="text" />
                    <IoMdClose onClick={() => isSearch()} className="absolute -top-3 right-3 text-lg cursor-pointer" />
                </div>
                <div className=" h-[120px] flex items-center justify-center">
                    <p>No data found</p>
                </div>
                <div className="overflow-y-scroll h-[240px]">
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </div>
            </div>
        </div>
    );
}

export default Search;