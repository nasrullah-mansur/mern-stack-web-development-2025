import { useMeQuery } from "@/redux/modules/auth/auth.api";
import type { ComponentType } from "react";
import { useNavigate } from "react-router";

export const withAuth = (Component: ComponentType) => {

    return function Com() {
        const { data } = useMeQuery(undefined);
        const navigate = useNavigate();

        console.log(data);


        if (!data) {
            // navigate("/login")
        }

        return <Component />;
    }

}