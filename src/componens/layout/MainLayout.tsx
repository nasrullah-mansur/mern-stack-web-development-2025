import ProductCart from "../../features/product/ProductCart";
import ProductList from "../../features/product/ProductList";
import IndexPage from "../../pages/Index";
import Footer from "./Footer";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";

function MainLayout() {
    return (
        <>
            <Header />
            <div className="">
                <div className="flex relative h-[calc(100vh-100px)]">
                    <LeftSidebar />
                    <ProductList></ProductList>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;