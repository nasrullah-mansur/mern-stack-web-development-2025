function foodCart(cartObj) {
    return `<div class="bg-white rounded-lg overflow-hidden">
            <div class="relative">
              <img data-food_id="${cartObj.id}" class="w-full h-[130px] cursor-pointer foodCartItem" src="public/images/foods/${cartObj.image_url}" alt="food">
              <img class="absolute top-2 right-2 cursor-pointer" src="public/images/love-unactive.svg" alt="icon">
            </div>
            <div class="flex justify-between items-center px-2 pt-2">
              <div>
                <h4 class="text-body text-3">${cartObj.name}</h4>
                <strong class="text-xl">$ ${cartObj.price}</strong>
              </div>
              <div class="bg-primary p-1.5 rounded-md">
                <img class="w-3 cursor-pointer" src="public/images/plus.svg" alt="plus icon">
              </div>
            </div>
            <div class="flex justify-between px-2 pb-2">
              <div class="flex items-center">
                <img class="w-3" src="public/images/star.svg" alt="star img">
                <span class="text-body pl-1.5 text-[12px]">${cartObj.rating}</span>
              </div>
              <div class="flex items-center">
                <img class="w-3" src="public/images/clock.svg" alt="clock img">
                <span class="text-body pl-1.5 text-[12px]">${cartObj.delivery_time}</span>
              </div>
            </div>
          </div>`;
}

export {
    foodCart
}