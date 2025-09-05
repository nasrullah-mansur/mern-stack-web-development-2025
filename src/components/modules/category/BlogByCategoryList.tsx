import BlogItem from "@/components/modules/blog/BlogItem";

function BlogByCategoryList({ blogs }) {

    return (
        <div>
            <div className="grid grid-cols-4 gap-6 max-w-screen-lg mx-auto pt-8">

                {blogs[0].blogs.map(item => <BlogItem blog={item} />)}

            </div>

        </div>
    );
}

export default BlogByCategoryList;