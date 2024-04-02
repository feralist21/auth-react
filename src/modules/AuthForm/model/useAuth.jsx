import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../api";

const useAuth = () => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const navigate = useNavigate();

    const loginAction = async (data) => {
        try {
            const response = await authLogin(data);

            if (response.token) {
                setToken(response.token);
                localStorage.setItem("token", response.token);

                navigate("/");

                return;
            }
            throw new Error(response.message);
        } catch (err) {
            console.error(err);
        }
    };

    const logOutAction = () => {
        setToken("");
        localStorage.removeItem("token");

        navigate("/auth");
    };

    return {
        token,
        loginAction,
        logOutAction,
    };
};

export default useAuth;
