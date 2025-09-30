import BlogCategory from "@/components/modules/category/Category";

export default function Banner() {
    return (
        <div className=" w-full flex flex-col gap-16 items-center justify-center px-6 pt-16 bg-accent">
            <div className="text-center max-w-3xl">

                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                    Customized Shadcn UI Blocks & Components
                </h1>
                <p className="mt-6 md:text-lg">
                    Explore a collection of Shadcn UI blocks and components, ready to
                    preview and copy. Streamline your development workflow with
                    easy-to-implement examples.
                </p>



            </div>

            <BlogCategory />


            <div className="w-full max-w-(--breakpoint-xl) mx-auto rounded-xl">

            </div>
        </div>
    )
}
