import { FaRegHeart } from "react-icons/fa";

function ProductDetailsPopup() {
    return (
        <div className="w-full  h-screen fixed top-0 left-0 bg-white/30 backdrop-blur-md z-10 flex justify-center items-start">
            <div className="w-[620px] overflow-hidden bg-white rounded-md mt-[60px] border border-theme flex">
                <div className="w-[calc(100%-160px)] p-4">
                    <h2 className="text-2xl font-bold">Prenlter Prestion Pssquik</h2>
                    <span className="text-[12px]">Comedy/Drama</span>
                    <p className="text-sm mt-2 mb-3 text-gray-600">When I Feel Alone is a deeply introspective story that explores themes of isolation, connection, and healing. Through the protagonist's journey, readers are reminded of the importance of reaching out and finding support in others.</p>
                    <div className="flex">
                        <button className="bg-theme cursor-pointer h-[35px] mr-4 w-[160px] rounded-sm text-sm">$140 | Add to cart</button>
                        <button className="w-[35px] cursor-pointer h-[35px] border border-theme rounded-md flex justify-center items-center">
                            <FaRegHeart className="dark:text-white" />
                        </button>
                        <button className="h-[35px] px-5 bg-theme rounded-md ml-4">
                            Close
                        </button>
                    </div>
                </div>
                <div className="w-[160px] ">
                    <img className="w-full" src="./products/i-1.jpg" alt="a" />
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPopup;