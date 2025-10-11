import { useLogoutQuery } from "@/redux/modules/auth/auth.api";
import { useNavigate } from "react-router";

function Logout() {
    const { data } = useLogoutQuery(undefined)
    const navigate = useNavigate()

    if (data) {
        navigate('/login')
    }

    return (
        <></>
    );
}

export default Logout;