import { Button } from "@/components/ui/button";
import { ToggleButtonGroup } from "@/components/ui/toggle"
import { Link } from "react-router";

export function CategoryList({ categories }) {

    return (
        <ToggleButtonGroup defaultSelectedKeys={["left"]}>
            {categories.data.map(category => (
                <Button
                    className="cursor-pointer"
                    key={category._id}
                >
                    <Link to={`/blog-by-category/${category.slug}`}>{category.name}</Link>
                </Button>)
            )}

        </ToggleButtonGroup>
    )
}