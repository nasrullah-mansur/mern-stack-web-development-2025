import CartItem from "./CartItem";
import { IoCloseSharp } from "react-icons/io5";



function CartPopup() {
    return (
        <div className="w-full  h-screen fixed top-0 left-0 bg-white/30 backdrop-blur-md z-10 flex justify-center items-start">
            <div className="w-[620px] overflow-hidden bg-white rounded-md mt-[60px] border border-theme relative">
                <IoCloseSharp className="absolute top-2 right-2 text-xl cursor-pointer" />
                <h2 className="text-center text-2xl font-bold py-3">Your Cart</h2>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className=" h-[120px] flex items-center justify-center">
                        <p>No data found</p>
                    </div>
                    <div className="h-[220px] overflow-y-scroll">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Total
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />

                            </tbody>
                        </table>
                    </div>
                    <div className="px-3 py-5 border-t border-gray-300 flex justify-between items-center">
                        <strong>Total: 500</strong>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 cursor-pointer dark:focus:ring-green-800">Checkout</button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default CartPopup;