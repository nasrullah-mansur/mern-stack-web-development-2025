import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

export function SearchBar() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button className="rounded-full" size="icon" variant="outline">
                        <Search />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Search in blog</DialogTitle>

                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">

                            <Input id="name-1" name="name" placeholder="Search here ..." />
                        </div>

                    </div>
                    <DialogFooter >
                        <div className="mr-auto">

                            <DialogClose asChild className="mr-3">
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Search</Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
