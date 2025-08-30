/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegHeart } from "react-icons/fa";
import type { IProduct } from "./data";
import { IoMdHeart } from "react-icons/io";
import type { HandleSetProductCart } from "./ProductList";



function ProductDetailsPopup({ onClose, product, setCarts, setProducts }: { onClose: () => void; product: IProduct, setCarts: any, setProducts: HandleSetProductCart }) {
    return (
        <div className="w-full  h-screen fixed top-0 left-0 bg-white/30 backdrop-blur-md z-10 flex justify-center items-start">
            <div className="w-[620px] overflow-hidden bg-white rounded-md mt-[60px] border border-theme flex">
                <div className="w-[calc(100%-160px)] p-4">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <span className="text-[12px]">{product.category}</span>
                    <p className="text-sm mt-2 mb-3 text-gray-600">{product.description}</p>
                    <div className="flex">
                        <button onClick={() => setCarts(product)} className="bg-theme cursor-pointer h-[35px] mr-4 w-[160px] rounded-sm text-sm">{product.price} | Add to cart</button>
                        <button onClick={() => setProducts(product.id)} className="w-[35px] cursor-pointer h-[35px] border border-theme rounded-md flex justify-center items-center">
                            {product.isFavorite
                                ? <IoMdHeart className="text-theme" />
                                : <FaRegHeart className="dark:text-white" />
                            }
                        </button>
                        <button onClick={() => onClose()} className="cursor-pointer h-[35px] px-5 bg-theme rounded-md ml-4">
                            Close
                        </button>
                    </div>
                </div>
                <div className="w-[160px] ">
                    <img className="w-full" src={product.image} alt="a" />
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPopup;