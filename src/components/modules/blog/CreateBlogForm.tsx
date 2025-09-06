import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { baseURL } from "@/utils/baseApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function CreateBlogForm() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        details: "",
        categoryId: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const setFormData = async () => {
            try {
                const res = await fetch(`${baseURL}/api/blog/create`, {
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


            <Select onValueChange={(data) => setFormData({ ...formData, categoryId: data })}>
                <SelectTrigger className="w-full mb-4">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup >
                        {categories.map((cat, index) => <SelectItem key={index} value={cat._id} >{cat.name}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Button>Add Blog</Button>
        </form>
    );
}

export default CreateBlogForm;