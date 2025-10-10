import Search from '@/components/modules/search/Search'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/logo'
import { ModeToggle } from '@/components/ui/mode-toggler'
import { NavigationSheet } from '@/components/ui/navigation-sheet'
import { NavMenu } from '@/components/ui/navMenu'
import { Link } from 'react-router'

export default function Header() {
    return (
        <div className="bg-muted">
            <nav className="h-16 bg-background border-b">
                <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-8">
                        <Logo />
                        {/* Desktop Menu */}
                        <NavMenu className="hidden md:block" />
                    </div>
                    <div className="flex items-center gap-3">
                        <Button asChild variant="outline" className="hidden sm:inline-flex">
                            <Link to={"/login"}>Login</Link>
                        </Button>
                        <Search />
                        <ModeToggle />
                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <NavigationSheet />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
