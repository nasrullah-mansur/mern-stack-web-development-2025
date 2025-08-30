import type { ISetCartQuantity } from "../../componens/layout/MainLayout";
import type { ICart } from "../../interfaces/interface";
import CartItem from "./CartItem";

function CartList({ carts, setCarts }: { carts: ICart[], setCarts: ISetCartQuantity }) {

    return (
        <>
            {carts.map(cart => <CartItem setCarts={setCarts} key={cart.id} cart={cart} />)}
        </>
    );
}

export default CartList;