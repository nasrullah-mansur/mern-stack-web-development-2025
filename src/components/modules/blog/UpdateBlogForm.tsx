import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { baseURL } from "@/utils/baseApi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UpdateBlogForm() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const [UpdateBlogId, setUpdateBlogId] = useState("");

    const { slug } = useParams();

    const [formData, setFormData] = useState({
        title: "",
        details: "",
        categoryId: ""
    });


    useEffect(() => {

        const getData = async () => {
            const res = await fetch(`${baseURL}/api/blog/get/${slug}`)

            const data = await res.json();

            const updateFormData = {
                title: data.data[0].title,
                details: data.data[0].details,
                categoryId: data.data[0].categoryId
            }

            setUpdateBlogId(data.data[0]._id);

            setFormData(updateFormData)


        }

        getData()


    }, [slug])

    const handleSubmit = (e) => {
        e.preventDefault();

        const setFormData = async () => {
            try {
                const res = await fetch(`${baseURL}/api/blog/update/${UpdateBlogId}`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })

                if (res.status == 201) {
                    navigate('/');
                }
            } catch (error) {
                console.log(error);

            }

        }

        setFormData();
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${baseURL}/api/category/all`)
            const data = await res.json();
            setCategories(data.data);
        }
        getData();

    }, []);
    return (
        <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto mt-6 border rounded-lg p-6">
            <Input value={formData.title} onChange={handleChange} name="title" className="mb-3" type="text" placeholder="Title here" />

            <Textarea value={formData.details} onChange={handleChange} name="details" className="mb-3" placeholder="Type your message here." />


            <Select onValueChange={(data) => setFormData({ ...formData, categoryId: data })} defaultValue={formData.categoryId}>
                <SelectTrigger className="w-full mb-4">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup >
                        {categories.map((cat, index) => <SelectItem key={index} value={cat._id} >{cat.name}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Button>Update Blog</Button>
        </form>
    );
}

export default UpdateBlogForm;