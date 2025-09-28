import { Badge } from "lucide-react";

function SinglePageContent() {
    return (

        <div className="w-full flex flex-col gap-16 items-center justify-center px-6 py-16">
            <div className="text-center max-w-3xl">

                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                    Customized Shadcn UI Blocks & Components
                </h1>
                <div className="flex items-center gap-3 justify-center py-6">
                    <Badge className="bg-primary/10 text-primary font-medium shadow-none">
                        Technology
                    </Badge>
                    <span className="text-xs text-muted-foreground">5 min read</span>
                </div>

            </div>

            <div className="container mx-auto">
                <img className="w-full" src="https://i.postimg.cc/9XJvm49c/pexels-fotios-photos-1006293.jpg" alt="image" />
            </div>

            <div className="container mx-auto bg-accent rounded-xl">
                <div className="p-6">
                    <p className="text-foreground leading-[26px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eius dicta, itaque mollitia atque necessitatibus exercitationem neque magni impedit quod repellat perferendis quas! Fugit quae, quidem culpa dolorem ipsa ex eaque, eos, deleniti debitis vitae numquam ut architecto assumenda qui deserunt sapiente quos perferendis ab necessitatibus omnis cupiditate exercitationem sit quam! Unde, deserunt a, eos quidem molestias labore quae expedita minus excepturi aliquid doloribus magni ipsa nisi vel consectetur, dolor eveniet saepe optio illum cumque magnam sapiente explicabo odio tempora. Repudiandae cupiditate aperiam impedit doloremque asperiores voluptatibus aliquam, totam rem ad beatae delectus nemo commodi, assumenda eum unde odit? Ipsum nobis dolor facere architecto eaque repellat voluptatum harum blanditiis placeat necessitatibus nostrum possimus libero dolorem nemo amet ducimus, ratione officia fugit beatae veritatis tempora! Officiis, veniam illum dicta impedit porro ratione eligendi nisi eos aliquid? Facilis, accusantium nulla, sed vero recusandae quos modi non atque vitae, soluta voluptatem porro harum ex perferendis ea cupiditate repellendus labore? Quos, est expedita. Iusto nobis, reiciendis optio, veritatis veniam inventore eveniet expedita illo alias soluta, vitae in est hic? Eum, molestias! Ducimus, quis at ratione veritatis velit reprehenderit. Ea perspiciatis ab facilis ad enim in consequatur numquam, modi doloribus, a qui debitis quos tempora.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default SinglePageContent;