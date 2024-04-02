import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/pages/auth/AuthProvider";

const PrivateRoute = () => {
    const user = useAuth();
    if (!user.token) return <Navigate to="/auth" />;
    return <Outlet />;
};

export default PrivateRoute;
