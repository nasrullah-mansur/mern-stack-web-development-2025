import { Badge } from "lucide-react";
import { Link } from "react-router";

function NextPrevBtn() {
    return (
        <div className="container mx-auto mb-20">
            <ul className="flex justify-between">
                <li className="max-w-[320px] border bg-muted p-4 rounded-lg">
                    <Link to="/">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit sed aliquid.</h4>
                        <div className="flex items-center gap-3 pt-4">
                            <Badge className="bg-primary/10 text-primary font-medium shadow-none">
                                Technology
                            </Badge>
                            <span className="text-xs text-muted-foreground">5 min read</span>
                        </div>
                    </Link>
                </li>
                <li className="max-w-[320px] border bg-muted p-4 rounded-lg">
                    <Link to="/">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit sed aliquid.</h4>
                        <div className="flex items-center gap-3 pt-4">
                            <Badge className="bg-primary/10 text-primary font-medium shadow-none">
                                Technology
                            </Badge>
                            <span className="text-xs text-muted-foreground">5 min read</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NextPrevBtn;