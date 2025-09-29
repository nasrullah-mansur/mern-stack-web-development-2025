import BlogCategory from "@/components/modules/category/Category";
import { Badge } from "@/components/ui/badge";

export default function Post() {
    return (
        <>
            <div className=" w-full flex flex-col gap-16 items-center justify-center px-6 pt-16 bg-accent">
                <div className="text-center max-w-3xl px-4">

                    <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:leading-[1.2] font-semibold tracking-tighter">
                        Customized Shadcn UI Blocks & Components
                    </h1>

                    <div className="flex items-center justify-center mt-10 gap-3">
                        <Badge className="bg-primary/5 py-2 px-5 text-primary hover:bg-primary/5 shadow-none">
                            Technology
                        </Badge>
                        <span className="font-medium text-muted-foreground">
                            5 min read
                        </span>
                    </div>

                </div>

                <BlogCategory />


                <div className="w-full max-w-(--breakpoint-xl) mx-auto rounded-xl px-4">

                </div>
            </div>
            <div className="max-w-(--breakpoint-xl) mx-auto px-4">
                <div className="aspect-video bg-muted w-full border-b my-6" />


                <div className="pb-12 text-muted-foreground">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio nobis ipsum, blanditiis omnis molestias facere quasi. Reprehenderit facilis rem in nihil, quod minima autem facere veritatis explicabo excepturi quas fugiat, quis ab doloribus dignissimos alias. Praesentium id, quaerat doloribus ex tempora cupiditate ipsam cum dicta odio aliquam est optio, libero molestias ut ducimus repellat! Vitae odio non eius dolor illum qui excepturi voluptates nihil commodi enim placeat rem, nulla maxime aliquid incidunt facere dignissimos doloremque itaque atque repudiandae ab ipsa? Magnam consequatur blanditiis porro veniam excepturi deserunt saepe, officiis, reprehenderit doloribus ad alias! Incidunt architecto nemo omnis quae culpa expedita deleniti quidem dolorem laboriosam, vel at quos atque nam saepe quaerat corrupti quisquam officiis rerum eligendi voluptatum fuga recusandae voluptates. Nobis dolores debitis ullam. Libero aliquid incidunt illo mollitia, esse facilis nisi sint. Perspiciatis dolor nam animi expedita tempora adipisci voluptatibus quasi quia id consequatur, laudantium omnis voluptas eligendi, minima natus facere inventore quaerat temporibus quae. Laboriosam quasi obcaecati, consequuntur ad ut eveniet delectus labore soluta corrupti, sit, maiores sint. Possimus quasi saepe explicabo, pariatur, mollitia eum veritatis nesciunt perferendis enim voluptatibus distinctio harum tempora dignissimos error. Laborum reiciendis quos reprehenderit officiis veritatis asperiores corrupti molestiae excepturi cumque quasi!
                    </p>
                </div>
            </div>
        </>
    )
}
