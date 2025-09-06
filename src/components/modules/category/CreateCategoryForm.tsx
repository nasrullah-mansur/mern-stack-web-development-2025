import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { baseURL } from "@/utils/baseApi";
import { useState } from "react";
import { useNavigate } from "react-router";


function CreateCategoryForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const setFormData = async () => {
            try {
                const res = await fetch(`${baseURL}/api/category/create`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })

                if (res.status == 200) {
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
    return (
        <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto mt-6 border rounded-lg p-6">
            <Input value={formData.name} onChange={handleChange} name="name" className="mb-3" type="text" placeholder="Title here" />



            <Button>Add Category</Button>
        </form>
    );
}

export default CreateCategoryForm;