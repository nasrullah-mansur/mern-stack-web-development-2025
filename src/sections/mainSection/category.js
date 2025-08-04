import { foodCategory } from "../../components/foodCategory";
import { foodCategoryList } from "../../../data/data";

let categoryHeader = `<h2 class="text-4 font-[500] py-3">Explore Categories </h2>`;

let foodCategoryElem = foodCategoryList.map(function(item) {
                return foodCategory(item);
            });

           
            

let categoryParentElement = `<div class="grid grid-cols-5 gap-x-4">
          ${foodCategoryElem.join("")}
         </div>`;

let fullCategorySectionElements = categoryHeader + categoryParentElement;

export default fullCategorySectionElements;