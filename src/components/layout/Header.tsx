import Logo from "@/components/logo"
import { ModeToggle } from "@/components/mode-toggle"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { NavLink } from "react-router"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
    { href: "/", label: "Home", active: true },
    { href: "/create-category", label: "Create Category" },
    { href: "/create-blog", label: "Create Blog" },
]

export default function Header() {
    return (
        <header className="border-b px-4 md:px-6">
            <div className="flex h-16 justify-between gap-4">
                {/* Left side */}
                <div className="flex gap-2">

                    {/* Main nav */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-primary hover:text-primary/90">
                            <Logo />
                        </a>
                        {/* Navigation menu */}
                        <NavigationMenu className="h-full *:h-full max-md:hidden">
                            <NavigationMenuList className="h-full gap-2">
                                {navigationLinks.map((link, index) => (
                                    <NavigationMenuItem key={index} className="h-full">
                                        <NavigationMenuLink
                                            active={link.active}
                                            asChild
                                            className="text-muted-foreground hover:text-primary border-b-primary hover:border-b-primary data-[active]:border-b-primary h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent!"
                                        >
                                            <NavLink to={link.href}>
                                                {link.label}
                                            </NavLink>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                {/* Right side */}
                <div className="flex items-center gap-2">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
