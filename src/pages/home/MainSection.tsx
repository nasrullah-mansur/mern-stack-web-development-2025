import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import {
    BadgeDollarSign,
    Bike,
    BookHeart,
    BriefcaseBusiness,
    ChevronRight,
    Cpu,
    FlaskRound,
    HeartPulse,
    Scale,
} from "lucide-react";
import { Link } from "react-router";

const categories = [
    { name: "Technology", totalPosts: 10, icon: Cpu },
    { name: "Business", totalPosts: 5, icon: BriefcaseBusiness },
    { name: "Finance", totalPosts: 8, icon: BadgeDollarSign },
    { name: "Health", totalPosts: 12, icon: HeartPulse },
    { name: "Lifestyle", totalPosts: 15, icon: BookHeart },
    { name: "Politics", totalPosts: 20, icon: Scale },
    { name: "Science", totalPosts: 25, icon: FlaskRound },
    { name: "Sports", totalPosts: 30, icon: Bike },
];

const MainSection = () => {
    return (
        <div className="overflow-x-hidden max-w-screen-xl mx-auto py-12 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* === Left Column: Posts === */}
            <div className="lg:col-span-8">
                <h2 className="text-2xl font-bold mt-4 pb-2">Our blogs</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <Card
                            key={i}
                            className="group border border-muted/40 hover:border-primary/40 shadow-sm hover:shadow-md transition-all rounded-xl overflow-hidden"
                        >
                            <CardHeader className="p-0">
                                <div className="aspect-video bg-muted w-full border-b group-hover:scale-[1.02] transition-transform" />
                            </CardHeader>

                            <CardContent className="p-5">
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-primary/10 text-primary font-medium shadow-none">
                                        Technology
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">5 min read</span>
                                </div>

                                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight group-hover:text-primary transition-colors">
                                    A beginner&apos;s guide to blockchain for engineers
                                </h3>

                                <Button
                                    asChild
                                    size="sm"
                                    className="mt-6 shadow-none group-hover:translate-x-1 transition-transform"
                                    variant="outline"
                                >
                                    <Link to="/single-blog/abc">
                                        Read more <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* === Right Column: Categories === */}
            <aside className="lg:col-span-3 sticky top-12 h-fit">
                <h3 className="text-lg font-semibold tracking-tight mb-3">Categories</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2.5">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="flex items-center justify-between gap-2 rounded-md bg-muted/30 dark:bg-muted/20 px-3 py-2.5 hover:bg-primary/10 transition-colors cursor-pointer"
                        >
                            <div className="flex items-center gap-2.5">
                                <category.icon className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium">{category.name}</span>
                            </div>
                            <Badge className="px-1.5 py-0.5 rounded-full bg-primary/20 text-primary text-xs">
                                {category.totalPosts}
                            </Badge>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default MainSection;
