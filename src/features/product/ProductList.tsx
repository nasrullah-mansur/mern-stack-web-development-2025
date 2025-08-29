/* eslint-disable @typescript-eslint/no-explicit-any */

import { products } from "./data";
import ProductCart from "./ProductCart";


const ProductList = ({ setCarts }: { setCarts: any }) => {
    return (
        <div className="w-[calc(100%-220px)] ml-auto justify-items-start grid grid-cols-5 gap-2 overflow-y-scroll p-2">

            {products.map(product => <ProductCart key={product.id} product={product} setCarts={setCarts} />)}


        </div>
    );
}

export default ProductList;