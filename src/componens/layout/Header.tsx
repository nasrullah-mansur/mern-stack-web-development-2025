import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import { themeModeHandler } from "../../utils/themeModeHandler";

function Header() {

    const [theme, setTheme] = useState("dark-theme");

    const clickHandler = () => {
        // themeModeHandler("dark-mode");
        setTheme((prev) => {
            if (prev == "dark-theme") {
                return "light-theme";
            } else {
                return "dark-theme"
            }
        })
    }

    useEffect(() => {
        themeModeHandler(theme);
    }, [theme])



    return (
        <header className="py-3 border-b border-b-gray-300 px-2">
            <div className="container mx-auto flex justify-between items-center">
                <span className="font-bold text-2xl dark:text-white">BOOK SELL {theme}</span>
                <div className="flex gap-x-2">
                    <button onClick={clickHandler} className="p-2 border border-gray-300 cursor-pointer rounded-md">
                        <MdOutlineLightMode className="dark:text-white" />
                    </button>
                    <button className="p-2 border border-gray-300 cursor-pointer rounded-md">
                        <MdOutlineShoppingCart className="dark:text-white" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;