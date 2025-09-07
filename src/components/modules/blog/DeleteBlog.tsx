import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { baseURL } from "@/utils/baseApi";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useNavigate } from "react-router";

function DeleteBlog({ id }) {

    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            const res = await fetch(`${baseURL}/api/blog/delete/${id}`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                }
            })

            console.log(res);


            if (res.status == 201) {
                navigate('/');
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Delete</Button>
            </DialogTrigger>
            <DialogContent>

                <DialogTitle></DialogTitle>
                <h2 className="text-center font-bold text-3xl"> Are you absolutely sure?</h2>

                <div className="flex justify-center gap-x-2 mt-6">
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleDelete} type="submit">Yes</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteBlog;