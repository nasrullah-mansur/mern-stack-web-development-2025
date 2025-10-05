import PasswordInput from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useSignUpMutation } from "@/redux/modules/user/user.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import { z } from "zod";

const formSchema = z
    .object({
        name: z.string().min(1, "Please enter your name"),
        email: z.string().trim().email("Please enter a valid email address"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters long"),
        confirm_password: z
            .string()
            .min(8, "Password must be at least 8 characters long"),
    })
    .refine((data) => data.password === data.confirm_password, {
        path: ["confirm_password"],
        message: "Passwords do not match",
    });

function SignUp() {

    const [signUp] = useSignUpMutation();

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        resolver: zodResolver(formSchema),
    });
    const onSubmit = async (data: z.infer<typeof formSchema>) => {

        try {
            const res = await signUp(data)
            console.log(res);

        } catch (error) {
            console.log(error);

        }
    };

    return (
        <div className="py-10 flex items-center justify-center mt-12">
            <div className="max-w-xs w-full flex flex-col items-center">

                <p className="mt-4 text-xl font-semibold tracking-tight">
                    Crate your own account
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
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Name"
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
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Email"
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
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirm_password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm password</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="Confirm Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="mt-4 w-full">
                            Sign Up
                        </Button>
                    </form>
                </Form>
                <div className="mt-5 space-y-5">

                    <p className="text-sm text-center">
                        Already have account?
                        <Link to="/login" className="ml-1 underline text-muted-foreground">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;