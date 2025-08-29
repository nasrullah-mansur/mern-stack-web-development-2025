/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import ProductDetailsPopup from "./ProductDetailsPopup";
import { useState } from "react";
import type { IProduct } from "./data";

const ProductCart = ({ product, setCarts }: { product: IProduct; setCarts: any }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-300 p-1">
            <img onClick={() => setIsOpen(!isOpen)} className="w-full cursor-pointer" src={product.image} alt="alt" />
            <h4 onClick={() => setIsOpen(!isOpen)} className="text-[14px] dark:text-white cursor-pointer hover:text-theme">{product.name}</h4>
            <span className="text-[12px] dark:text-white">{product.category}</span>
            <div className="flex gap-x-1 my-3">
                <FaStar className="text-[10px] text-theme" />
                <FaStar className="text-[10px] text-theme" />
                <FaStar className="text-[10px] text-theme" />
                <FaStar className="text-[10px] text-theme" />
                <FaStar className="text-[10px] text-theme" />
            </div>
            <div className="flex">
                <button onClick={() => setCarts(product)} className="bg-theme cursor-pointer h-[35px] mr-4 w-[calc(100%-58px)] rounded-sm text-sm">{product.price} | Add to cart</button>
                <button className="w-[35px] cursor-pointer h-[35px] border border-theme rounded-md flex justify-center items-center">
                    <FaRegHeart className="dark:text-white" />
                </button>
            </div>

            {isOpen && <ProductDetailsPopup setCarts={setCarts} product={product} onClose={() => setIsOpen(false)} />}
        </div>

    )
}

export default ProductCart;