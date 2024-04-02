import { useState } from "react";
import { Input, Button } from "@/shared/ui";
import { useAuthContext } from "../model/AuthContext";

const AuthForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuthContext();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!login || !password) {
            console.log("Пустые данные");
            return;
        }

        auth.loginAction({
            username: login,
            password: password,
            expiresInMins: 10,
        });
    };

    return (
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
    );
};

export default AuthForm;
