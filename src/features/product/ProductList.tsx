/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { products as productsData } from "./data";
import ProductCart from "./ProductCart";

export type HandleSetProductCart = (prop1: number) => void;

const ProductList = ({ setCarts }: { setCarts: any }) => {

    const menupulatedProducts = productsData.map(product => {
        return {
            ...product,
            isFavorite: false,
        }
    })

    const [products, setProducts] = useState(menupulatedProducts)



    const handleSetProductCart: HandleSetProductCart = (prop1: number) => {

        const isProductExist = products.find(product => product.id === prop1);

        if (!isProductExist) return;

        const updateProducts = products.map(product => {
            if (product.id === isProductExist.id) {
                return {
                    ...product,
                    // isFavorite: product.isFavorite ? false : true,
                    isFavorite: !product.isFavorite
                }
            } else {
                return product;
            }
        })

        setProducts(updateProducts);

    }


    return (
        <div className="w-[calc(100%-220px)] ml-auto justify-items-start grid grid-cols-5 gap-2 overflow-y-scroll p-2">

            {products.map(product => <ProductCart setProducts={handleSetProductCart} key={product.id} product={product} setCarts={setCarts} />)}


        </div>
    );
}

export default ProductList;