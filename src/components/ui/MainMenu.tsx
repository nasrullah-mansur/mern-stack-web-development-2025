import { Link } from "react-router"

function MainMenu() {
    return (
        <ul className="flex gap-x-6">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Blogs</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
    );
}

export default MainMenu;