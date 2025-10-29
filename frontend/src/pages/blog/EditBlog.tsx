/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useCreateMutation, useUpdateMutation, useViewBlogQuery } from "@/redux/modules/blog/blog.api";
import { useGetCategoriesQuery } from "@/redux/modules/category/category.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

import { z } from "zod";

const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    subTitle: z.string().min(1, "Sub title is required"),
    details: z.string().min(1, "Details is required"),
    imageUrl: z.string().min(1, "Image URL is required"),
    category: z.string().min(1, "Category is required"),
});

export default function EditBlog() {

    const { id } = useParams();

    const { data: allCategories } = useGetCategoriesQuery(undefined);
    const { data } = useViewBlogQuery(id);

    const [updateBlog] = useUpdateMutation();


    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            title: "",
            subTitle: "",
            imageUrl: "",
            details: "",
            category: ""
        },
        resolver: zodResolver(formSchema),
    });
    const onSubmit = async (data: z.infer<typeof formSchema>) => {

        try {
            const res = await updateBlog({ data, id }).unwrap()
            console.log(res);

            if (res.status == "success") {
                toast.success("Blog updated successfully")
            }
            // navigate('/me/all-categories')

        } catch (error) {
            toast.error("Something error")
            console.log(error);

        }
    };

    useEffect(() => {
        if (data) {

            const keys = Object.keys(data.data);

            keys.forEach((key: any) => {
                if (key == "category") {
                    form.setValue("category", data.data.category._id);

                } else {
                    form.setValue(key, data.data[key]);

                }
            })

        }
    }, [data, form])

    return (
        <div className="py-10 flex items-center justify-center">
            <div className="max-w-md w-full flex flex-col items-center border p-4 rounded-lg">

                <p className="mt-4 text-xl font-semibold tracking-tight">
                    Create Blog
                </p>

                <div className="my-7 w-full flex items-center justify-center overflow-hidden">
                    <Separator />

                </div>
                <Form {...form}>
                    <form
                        className="w-full space-y-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Blog Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Title"
                                            className="w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sub Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Sub Title"
                                            className="w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="details"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Blog Details</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Blog Details"
                                            className="w-full"
                                            {...field}
                                        />

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image Url</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Image URL"
                                            className="w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {allCategories &&

                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category Select</FormLabel>
                                        <FormControl>
                                            <Select {...field} onValueChange={field.onChange}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select Category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {allCategories.data.map((cat: any) => (
                                                        <SelectItem key={cat._id} value={cat._id}>{cat.title}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        }


                        <Button type="submit" className="mt-4 w-full">
                            Save Category
                        </Button>
                    </form>
                </Form>

            </div>
        </div>
    );
}

