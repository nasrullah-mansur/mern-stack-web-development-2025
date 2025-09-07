import DeleteBlog from "@/components/modules/blog/DeleteBlog";
import { Button } from "@/components/ui/button";
import { baseURL } from "@/utils/baseApi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function ViewBlog() {

    const { slug } = useParams();

    const [data, setData] = useState({});


    useEffect(() => {

        const getData = async () => {
            const res = await fetch(`${baseURL}/api/blog/get/${slug}`)

            const data = await res.json();

            const blogData = {
                id: data.data[0]._id,
                title: data.data[0].title,
                slug: data.data[0].slug,
                details: data.data[0].details,
                categoryName: data.data[0].category[0].name,
            }

            setData(blogData);

        }

        getData();

    }, [slug])


    return (
        <div className="max-w-screen-lg mx-auto my-8">
            <h1 className="text-3xl font-bold">{data.title}</h1>
            <small>{data.categoryName}</small>
            <p className="mt-2 mb-6 text-black/60">{data.details}</p>

            <div className="flex gap-x-4">
                <DeleteBlog id={data.id} />

                <Link to={`/update-blog/${data.slug}`}>
                    <Button>Edit</Button>
                </Link>
            </div>

        </div>
    );
}

export default ViewBlog;