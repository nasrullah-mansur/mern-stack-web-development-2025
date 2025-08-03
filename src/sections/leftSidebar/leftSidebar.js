import { mainMenuListItems } from "../../../data/data";


let siteLogo = `
    <div class="h-[50px] flex items-center">
        <a href="#">
        <img src="public/images/logo.png" alt="Yellow Cafe">
        </a>
    </div>
`;


function buildMenuLis() {
    let output = mainMenuListItems.map(function(item) {
        return `<li class="mb-[15px]">
                    <a href="#" class="menu-li">
                        ${item.svg}
                        <span>${item.title}</span>
                    </a>
                </li>`;
    });

    return output.join(" ");
    
}


let mainMenu = `
    <nav class="mt-[20px]">
      <ul>
       ${buildMenuLis()}
      </ul>
    </nav>
`;


let leftSidebarElements = siteLogo + mainMenu;

export default leftSidebarElements;

