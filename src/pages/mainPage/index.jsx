import { Button } from "@/shared/ui";
import { useAuth } from "../auth/AuthProvider";
import { useEffect, useState } from "react";

const MainPage = () => {
    const [user, setUser] = useState(null);
    const auth = useAuth();

    const logout = () => {
        auth.logOut();
    };

    useEffect(() => {
        fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${auth.token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, [auth.token]);

    return (
        <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
            <div className="w-[400px] text-white flex items-center flex-col gap-y-5">
                <h1 className="text-4xl">Привет, {user?.username}</h1>
                <img src={user?.image} alt={user?.usename} />
                <Button
                    className="w-min"
                    label="Выйти"
                    size="small"
                    view="accent"
                    handleClick={logout}
                />
            </div>
        </div>
    );
};

export default MainPage;
