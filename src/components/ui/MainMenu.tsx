import { Link } from "react-router"

function MainMenu() {

    const menus = [
        {
            id: 1,
            link: "/",
            label: "Home"
        },
        {
            id: 2,
            link: "/about",
            label: "About"
        },
        {
            id: 3,
            link: "/blogs",
            label: "Blogs"
        },
        {
            id: 4,
            link: "/contact",
            label: "Contact"
        }
    ];

    return (
        <ul className="flex gap-x-6">
            {menus.map(menu => (
                <li>
                    <Link key={menu.id} to={menu.link}>{menu.label}</Link>
                </li>
            ))}


        </ul>
    );
}

export default MainMenu;