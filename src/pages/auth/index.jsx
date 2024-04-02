import reactLogo from "@assets/react.svg";
import { useCallback, useState } from "react";
import { Input, Button } from "@/shared/ui";

const AuthPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        if (!login || !password) {
            console.log('Пустые данные');
            return;
        }

        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: login,
                password: password,
                expiresInMins: 5,
            }),
        })
            .then((res) => res.json())
            .then(console.log);
    }, [login, password]);


    return (
        <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-900 w-full h-screen text-white flex items-center justify-center">
                <div className="w-[400px]">
                    <img
                        src={reactLogo}
                        className="block w-20 h-auto mx-auto mb-4"
                        alt="React logo"
                    />
                    <h1 className="text-4xl block mb-12">Добро пожаловать!</h1>
                    <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-y-2">
                            <Input
                                label="Логин"
                                inputName="login"
                                id="login"
                                type="text"
                                onChange={(event) => setLogin(event.target.value)}
                                value={login}
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Input
                                label="Пароль"
                                inputName="password"
                                id="password"
                                type="password"
                                onChange={(event) => setPassword(event.target.value)}
                                value={password}
                            />
                        </div>
                        <Button label="Войти" size="small" view="accent" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
