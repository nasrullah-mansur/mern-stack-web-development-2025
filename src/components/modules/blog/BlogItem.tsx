import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


function BlogItem({ blog }) {
    return (
        <Card >
            <CardHeader>
                <CardTitle className="leading-[24px]">{blog.title}</CardTitle>
                {blog.categoryDetails &&
                    <CardDescription>{blog.categoryDetails[0]?.name}</CardDescription>
                }
            </CardHeader>

            <CardFooter>
                <Button variant="outline" size="lg" className="cursor-pointer">Read More</Button>
            </CardFooter>
        </Card>
    );
}

export default BlogItem;