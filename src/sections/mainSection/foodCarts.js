import { foodCartItems } from "../../../data/data";
import { foodCart } from "../../components/foodCart";
import { cartViewModal } from "../../components/modal";

let foodCartsHeader = `<h2 class="text-4 font-[500] py-3 mt-4">Foods & Drinks</h2>`;

let foodCartData = foodCartItems.map(function(item) {
    return foodCart(item);
})

let foodCartItemsContainer = `<div class="grid grid-cols-4 gap-4 mb-[100px]">${foodCartData.join("")}</div>`;

let foodCartSectionElements = foodCartsHeader + foodCartItemsContainer;

let foodCartSection = document.getElementById('foodCartSection');
let modalDiv = document.getElementById('modalSection');

// Add modal;
foodCartSection.addEventListener('click', function(e) {
    let targetFoodItemId = e.target.getAttribute('data-food_id');

    let targetFoodItemObj = foodCartItems.find(function(item) {
        return item.id == targetFoodItemId;
    })

    console.log(targetFoodItemObj);
    
    let targetTagCheck = e.target.classList.contains("foodCartItem");
    if(targetTagCheck == true) {
        modalDiv.innerHTML = cartViewModal(targetFoodItemObj);
    }
})

// Remove modal;
modalDiv.addEventListener('click', function(e) {
    let targetTagCheck = e.target.classList.contains("closeModal");
    if(targetTagCheck == true) {
        modalDiv.innerHTML = ""
    }
    
})




export default foodCartSectionElements;