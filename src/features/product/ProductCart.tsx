
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const ProductCart = () => {
    return (
        <div className="border border-gray-300 p-1">
            <img className="w-full" src="./products/i-1.jpg" alt="alt" />
            <h4 className="text-[14px] dark:text-white">Once Upon a Time... in Hollywood</h4>
            <span className="text-[12px] dark:text-white">Comedy/Drama</span>
            <div className="flex gap-x-1 my-3">
                <FaStar className="text-[10px] text-theme" />
                <FaStar className="text-[10px] text-theme" />
                <FaStar className="text-[10px] text-theme" />
                <FaStar className="text-[10px] text-theme" />
                <FaStar className="text-[10px] text-theme" />
            </div>
            <div className="flex">
                <button className="bg-theme cursor-pointer h-[35px] mr-4 w-[calc(100%-58px)] rounded-sm text-sm">$140 | Add to cart</button>
                <button className="w-[35px] cursor-pointer h-[35px] border border-theme rounded-md flex justify-center items-center">
                    <FaRegHeart className="dark:text-white" />
                </button>
            </div>



        </div>
    )
}

export default ProductCart;