import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { NavMenu } from "@/components/ui/navMenu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";



export const NavigationSheet = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="px-6 py-3">
                <Logo />
                <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
            </SheetContent>
        </Sheet>
    );
};
