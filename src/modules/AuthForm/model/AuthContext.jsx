import { createContext, useContext } from "react";
import useAuth from "./useAuth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const authHook = useAuth();

    return <AuthContext.Provider value={{ ...authHook }}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
    const useAuthContext = useContext(AuthContext);

    return useAuthContext;
};

export { AuthProvider, useAuthContext };
