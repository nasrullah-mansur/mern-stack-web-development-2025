
import ProductCart from "./ProductCart";

const ProductList = () => {
    return (
        <div className="w-[calc(100%-220px)] ml-auto grid grid-cols-5 gap-2 overflow-y-scroll p-2">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
        </div>
    );
}

export default ProductList;