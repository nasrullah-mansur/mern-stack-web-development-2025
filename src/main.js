
import { headerSectionElements } from "./sections/header/header";
import leftSidebarElements from "./sections/leftSidebar/leftSidebar";
import { bannerSectionElement } from "./sections/mainSection/banner";
import fullCategorySectionElements from "./sections/mainSection/category";
import foodCartSectionElements from "./sections/mainSection/foodCarts";


let leftSidebar = document.getElementById('leftSidebar');
leftSidebar.innerHTML = leftSidebarElements;

let headerSection = document.getElementById('headerSection');
headerSection.innerHTML = headerSectionElements;

let bannerSection = document.getElementById('bannerSection');
bannerSection.innerHTML = bannerSectionElement;


let categorySection = document.getElementById('foodCategory');
categorySection.innerHTML = fullCategorySectionElements;


let foodCartSection = document.getElementById('foodCartSection');
foodCartSection.innerHTML = foodCartSectionElements;




