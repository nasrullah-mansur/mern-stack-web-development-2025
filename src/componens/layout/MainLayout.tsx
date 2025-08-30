/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import ProductList from "../../features/product/ProductList";
import Footer from "./Footer";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import type { ICart } from "../../interfaces/interface";


export type ISetCartQuantity = (prop1: number, id: number) => void;


function MainLayout() {

    const [carts, setCarts] = useState<ICart[]>([]);

    const totalPrice: number = carts.reduce((total: number, cart) => {
        return total + cart.price;
    }, 0);


    const quantityHandler = (prop: number, id: number) => {

        const isCartExist = carts.find(cart => cart.id === id);

        if (!isCartExist) return;

        if (prop < 1) return;

        const updateCarts = carts.map(cart => {
            if (cart.id === isCartExist.id) {
                return {
                    ...cart,
                    quantity: prop
                }
            } else {
                return cart;
            }
        })

        setCarts(updateCarts);


    }

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


    return (
        <>
            <Header setCarts={quantityHandler} carts={carts} />
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