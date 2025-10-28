import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useUpdateMutation, useViewCategoryQuery } from "@/redux/modules/category/category.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

import { z } from "zod";

const formSchema = z.object({
    title: z.string().min(1, "Title is required")
});

function EditCategory() {

    const params = useParams();

    const [update] = useUpdateMutation();

    const { data } = useViewCategoryQuery(params.id);


    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            title: ""
        },
        resolver: zodResolver(formSchema),
    });
    const onSubmit = async (data: z.infer<typeof formSchema>) => {

        try {
            const res = await update({ data, id: params.id }).unwrap()
            if (res.status == "success") {
                toast.success("Category added successfully")
            }
            navigate('/me/all-categories')

        } catch (error) {
            toast.error("Something error")
            console.log(error);

        }
    };

    useEffect(() => {
        if (data) {
            console.log(data);
            form.setValue("title", data.data.title);
        }
    }, [data, form]);

    return (
        <div className="py-10 flex items-center justify-center">
            <div className="max-w-xs w-full flex flex-col items-center border p-4 rounded-lg">

                <p className="mt-4 text-xl font-semibold tracking-tight">
                    Update Category
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
                                    <FormLabel>Category Title</FormLabel>
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

                        <Button type="submit" className="mt-4 w-full">
                            Update Category
                        </Button>
                    </form>
                </Form>

            </div>
        </div>
    );
}

export default EditCategory;