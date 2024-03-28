import { createBrowserRouter } from "react-router-dom";
import AuthPage from "@/pages/auth";
import MainPage from "@/pages/mainPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/auth",
        element: <AuthPage />,
    },
]);

export default router;
