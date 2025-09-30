import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ChevronRight } from "lucide-react";

const Blogs = () => {
    return (
        <div className="justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8 py-16 xl:px-0">
            <div className="flex items-end justify-between px-4">
                <h2 className="text-3xl font-bold tracking-tight">Our latest blogs</h2>
                <Select defaultValue="latest">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="latest">Latest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 px-4 gap-10">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <Card key={i} className="shadow-none overflow-hidden rounded-md py-0 relative">
                        <Badge className="absolute top-10 right-10 rotate-45 rounded-none px-10 uppercase translate-x-1/2 -translate-y-1/2">
                            Most Popular
                        </Badge>
                        <CardHeader className="p-0">
                            <div className="aspect-video bg-muted w-full border-b" />
                        </CardHeader>
                        <CardContent className="pb-6">
                            <div className="flex items-center gap-3">
                                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                                    Technology
                                </Badge>
                                <span className="font-medium text-xs text-muted-foreground">
                                    5 min read
                                </span>
                            </div>

                            <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                                A beginner&apos;s guide to blackchain for engineers
                            </h3>
                            <p className="mt-2 text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros.
                            </p>

                            <Button size="sm" className="mt-6 shadow-none">
                                Read more <ChevronRight />
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
