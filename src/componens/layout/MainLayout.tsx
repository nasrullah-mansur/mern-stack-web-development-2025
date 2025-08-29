
import { useState } from "react";
import ProductList from "../../features/product/ProductList";
import Footer from "./Footer";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import type { ICart } from "../../interfaces/interface";



function MainLayout() {

    const [carts, setCarts] = useState<ICart[]>([]);


    const handleSetCarts = (cart: ICart) => {

        const newCart: ICart = {
            id: cart.id,
            name: cart.name,
            price: cart.price,
            quantity: 1,
            total() {
                return this.price * this.quantity;
            }
        }

        const isCartExist = carts.find(c => c.id === cart.id);

        if (!isCartExist) {
            setCarts([
                ...carts,
                newCart
            ]);

        }
    }

    console.log(carts);


    return (
        <>
            <Header carts={carts} />
            <div className="">
                <div className="flex relative h-[calc(100vh-100px)]">
                    <LeftSidebar />
                    <ProductList setCarts={handleSetCarts}></ProductList>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;