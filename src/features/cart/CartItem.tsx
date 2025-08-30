import { MdDeleteForever } from "react-icons/md";
import type { ICart } from "../../interfaces/interface";
import type { ISetCartQuantity } from "../../componens/layout/MainLayout";


const CartItem = ({ cart, setCarts }: { cart: ICart, setCarts: ISetCartQuantity }) => {
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                {cart.name}
            </td>
            <td className="px-6 py-4">
                {cart.price}
            </td>
            <td className="px-6 py-4">
                <button onClick={() => setCarts(cart.quantity - 1, cart.id)} type="button" className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    -
                </button>
                {cart.quantity}
                <button onClick={() => setCarts(cart.quantity + 1, cart.id)} type="button" className="ml-1 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    +
                </button>
            </td>
            <td className="px-6 py-4">
                {cart.total()}
            </td>
            <td className="px-6 py-4">
                <MdDeleteForever className="text-xl text-red-500 cursor-pointer" />

            </td>
        </tr>
    )
}

export default CartItem;