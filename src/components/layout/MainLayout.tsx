import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router";

function MainLayout() {
    return (
        <>

            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-1">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MainLayout;