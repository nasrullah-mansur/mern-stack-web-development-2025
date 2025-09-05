
import BlogByCategoryList from "@/components/modules/category/BlogByCategoryList";
import { useLoaderData } from "react-router";

function BlogByCategory() {

    const { data } = useLoaderData();

    return (
        <>
            <div className="max-w-[600px] mx-auto text-center pt-8">
                <h1 className="text-3xl font-bold mb-4">{data[0].name}</h1>
            </div>

            <BlogByCategoryList blogs={data} />

        </>
    );
}

export default BlogByCategory;