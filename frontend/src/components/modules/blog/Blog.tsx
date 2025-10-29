/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useAllQuery } from "@/redux/modules/blog/blog.api";
import { ChevronRight } from "lucide-react";

const Blogs = () => {

    const { data, isLoading } = useAllQuery();

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

            {isLoading && <div className="py-6 text-center font-semibold">Data is loading please wait</div>}

            {!isLoading && data &&
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 px-4 gap-10">
                    {data.data.map((blog: any) => (
                        <Card key={blog._id} className="shadow-none overflow-hidden rounded-md py-0 relative">

                            <CardHeader className="p-0">
                                <img src={blog.imageUrl} alt="" />
                            </CardHeader>
                            <CardContent className="pb-6">
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                                        {blog.category?.title}
                                    </Badge>

                                </div>

                                <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                                    {blog.title}
                                </h3>
                                <p className="mt-2 text-muted-foreground">
                                    {blog.subTitle}
                                </p>

                                <Button size="sm" className="mt-6 shadow-none">
                                    Read more <ChevronRight />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            }
        </div>
    );
};

export default Blogs;
