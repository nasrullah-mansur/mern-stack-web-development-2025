
import BlogList from "@/components/modules/blog/BlogList";
import { CategoryList } from "@/components/modules/blog/CategoryList";
import type { IBlog } from "@/type";
import { useLoaderData } from "react-router";

function IndexPage() {

    const { categoryData, blogData } = useLoaderData();

    return (
        <div className="container mx-auto">

            <div className="max-w-[600px] mx-auto text-center pt-8">
                <h1 className="text-3xl font-bold mb-4">Welcome to our website</h1>
                <p>HyperUI is a collection of free Tailwind CSS components that can be used in your next project. With a range of components, you can build your next marketing website, admin dashboard, eCommerce store and much more.</p>
            </div>

            <div className="mt-6 pb-4 max-w-screen-md mx-auto">
                <CategoryList categories={categoryData} />
            </div>

            <BlogList blogs={blogData} />


        </div>
    );
}

export default IndexPage;