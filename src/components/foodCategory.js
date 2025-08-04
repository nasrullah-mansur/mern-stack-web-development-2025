
function foodCategory(catObj) {
        
    return `<div class="food-category">
            <img src="public/images/food-categories/${catObj.img}" alt="category">
            <span>${catObj.title}</span>
          </div>`;
}


export {
    foodCategory
}