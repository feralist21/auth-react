import { useAuthContext } from "@/modules/AuthForm";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const auth = useAuthContext();

    if (!auth.token) {
        return <Navigate to="/auth" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
