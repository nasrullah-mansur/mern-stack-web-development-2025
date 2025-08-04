import { foodCartItems } from "../../../data/data";
import { foodCart } from "../../components/foodCart";
import { cartViewModal } from "../../components/modal";

let foodCartsHeader = `<h2 class="text-4 font-[500] py-3 mt-4">Foods & Drinks</h2>`;

let foodCartData = foodCartItems.map(function(item) {
    return foodCart(item);
})

let foodCartItemsContainer = `<div class="grid grid-cols-4 gap-4 mb-[100px]">${foodCartData.join("")}</div>`;

let foodCartSectionElements = foodCartsHeader + foodCartItemsContainer;

let modalSection = document.getElementById('modalSection');
let foodCartSection = document.getElementById('foodCartSection');

// Add modal;
foodCartSection.addEventListener('click', function(event) {
    let classNameCheck = event.target.classList.contains('foodCartItem')
    if(classNameCheck == true) {
        modalSection.innerHTML = cartViewModal();
    }  
})

// Remove Modal;
modalSection.addEventListener('click', function(event) {
    let classNameCheck = event.target.classList.contains("closeModal");
    if(classNameCheck == true) {
        modalSection.innerHTML = "";
    }
    
})



export default foodCartSectionElements;