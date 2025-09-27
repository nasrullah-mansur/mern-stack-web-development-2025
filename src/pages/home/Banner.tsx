
import { BackgroundPattern } from "@/components/ui/backgroun-patternt";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Link } from "react-router";



const Banner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <BackgroundPattern />

            <div className="relative z-10 text-center max-w-3xl">

                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                    Customized Shadcn UI Blocks & Components
                </h1>
                <p className="mt-6 md:text-lg">
                    Explore a collection of Shadcn UI blocks and components, ready to
                    preview and copy. Streamline your development workflow with
                    easy-to-implement examples.
                </p>
                <div className="mt-12 flex items-center justify-center gap-4">
                    <Button asChild size="lg" className="rounded-full text-base">
                        <Link to="/">
                            Latest blog <ArrowUpRight className="h-5! w-5!" />
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full text-base shadow-none"
                    >
                        <CirclePlay className="h-5! w-5!" /> Hire me now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
