import BlogItem from "@/components/modules/blog/BlogItem";

function BlogList({ blogs }) {

    return (
        <div className="grid grid-cols-4 gap-6 max-w-screen-lg mx-auto pt-8">
            {blogs.data.map(blog => <BlogItem key={blog._id} blog={blog} />)}

        </div>
    );
}

export default BlogList;