import type { ICart } from "../../interfaces/interface";
import CartItem from "./CartItem";

function CartList({ carts }: { carts: ICart[] }) {

    return (
        <>
            {carts.map(cart => <CartItem key={cart.id} cart={cart} />)}
        </>
    );
}

export default CartList;