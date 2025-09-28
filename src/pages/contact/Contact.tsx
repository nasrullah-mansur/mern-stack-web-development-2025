
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const formSchema = z.object({
    full_name: z
        .string()
        .trim()
        .min(1, "Please write your full name")
        .max(50, "Full name must be at most 50 characters"),

    message: z
        .string()
        .trim()
        .min(1, "Please write your full name")
        .max(50, "Full name must be at most 50 characters"),

    email: z
        .string()
        .trim()
        .min(1, "Please write your email")
        .email("Please enter a valid email address")
        .max(50, "Email must be at most 50 characters"),

    phone: z
        .string()
        .trim()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be at most 15 digits")
        .regex(/^[0-9+\-() ]+$/, "Phone number contains invalid characters"),
});




function Contact() {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            full_name: "",
            email: "",
            phone: "",
            message: ""
        },
    })


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)

        toast.success("Thank you for your message")

        form.reset()
    }

    return (
        <>
            <div className="w-full flex flex-col gap-16 items-center justify-center px-6 py-16 mt-10">
                <div className="text-center max-w-3xl">
                    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                        Contact Us
                    </h1>
                </div>
            </div>

            <div className="max-w-screen-md mx-auto my-16 bg-accent p-6 rounded-2xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="full_name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="full name" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="phone" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Your message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="your message "  {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full" type="submit">Send Message</Button>
                    </form>
                </Form>
            </div>
        </>
    );
}

export default Contact;