import { useMeQuery } from "@/redux/modules/auth/auth.api";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType) => {
    return function WithAuthComponent() {
        const { data, isLoading } = useMeQuery(undefined);

        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (data?.status === "success") {
            return <Component />;
        }

        return <Navigate to="/login" replace />;
    };
};
