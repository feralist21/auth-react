import { AuthForm } from "@/modules/AuthForm";
import reactLogo from "@assets/react.svg";

const AuthPage = () => {
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
                    <AuthForm />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
